import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { processBookingEmail } from './lib/bookingMailer.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '16kb' }));

  app.post('/api/booking', async (req, res) => {
    const result = await processBookingEmail(req.body, {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      BOOKING_FROM_EMAIL: process.env.BOOKING_FROM_EMAIL,
      BOOKING_TO_EMAIL: process.env.BOOKING_TO_EMAIL,
    });

    res.status(result.status).set('Cache-Control', 'no-store').json(result.body);
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
