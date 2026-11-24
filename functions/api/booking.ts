import { processBookingEmail, type BookingEnv } from '../../lib/bookingMailer.ts';

interface PagesContext {
  request: Request;
  env: BookingEnv;
}

const MAX_CONTENT_LENGTH = 16 * 1024;

export async function onRequestPost(context: PagesContext): Promise<Response> {
  const contentLengthHeader = context.request.headers.get('content-length');
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
    payload = await context.request.json();
  } catch {
    return Response.json(
      { ok: false, message: 'Format JSON tidak valid.' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } }
    );
  }

  const result = await processBookingEmail(payload, context.env);

  return Response.json(result.body, {
    status: result.status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}
