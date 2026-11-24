import { processBookingEmail, type BookingEnv } from './lib/bookingMailer.ts';

interface AssetsBinding {
  fetch(request: Request): Promise<Response>;
}

interface WorkerEnv extends BookingEnv {
  ASSETS?: AssetsBinding;
}

const MAX_CONTENT_LENGTH = 16 * 1024;

export default {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/booking') {
      if (request.method !== 'POST') {
        return Response.json(
          { ok: false, message: 'Method not allowed.' },
          { status: 405, headers: { Allow: 'POST', 'Cache-Control': 'no-store' } }
        );
      }

      const contentLengthHeader = request.headers.get('content-length');
      if (contentLengthHeader) {
        const contentLength = Number(contentLengthHeader);
        if (Number.isFinite(contentLength) && contentLength > MAX_CONTENT_LENGTH) {
          return Response.json(
            { ok: false, message: 'Ukuran data booking terlalu besar.' },
            { status: 413, headers: { 'Cache-Control': 'no-store' } }
          );
        }
      }

      let payload: unknown;
      try {
        payload = await request.json();
      } catch {
        return Response.json(
          { ok: false, message: 'Format JSON tidak valid.' },
          { status: 400, headers: { 'Cache-Control': 'no-store' } }
        );
      }

      const result = await processBookingEmail(payload, env);

      return Response.json(result.body, {
        status: result.status,
        headers: {
          'Cache-Control': 'no-store',
        },
      });
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not Found', { status: 404 });
  },
};
