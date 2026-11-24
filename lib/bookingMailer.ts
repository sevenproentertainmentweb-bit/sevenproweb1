export interface BookingEnv {
  RESEND_API_KEY?: string;
  BOOKING_FROM_EMAIL?: string;
  BOOKING_TO_EMAIL?: string;
}

export interface BookingResult {
  status: number;
  body: {
    ok: boolean;
    skipped?: boolean;
    configured?: boolean;
    message: string;
  };
}

const DEFAULT_FROM_EMAIL = 'Sevenpro Entertainment <onboarding@resend.dev>';
const RESEND_API_URL = 'https://api.resend.com/emails';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeHeaderText(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function normalizeWhatsAppDigits(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 8 || digits.length > 16) return '';
  if (digits.startsWith('0')) {
    return `62${digits.slice(1)}`;
  }
  return digits;
}

function formatBaliTimestamp(): string {
  try {
    return new Intl.DateTimeFormat('id-ID', {
      dateStyle: 'full',
      timeStyle: 'short',
      timeZone: 'Asia/Makassar',
    }).format(new Date());
  } catch {
    return new Date().toISOString();
  }
}

export async function processBookingEmail(
  rawPayload: unknown,
  env: BookingEnv
): Promise<BookingResult> {
  if (!rawPayload || typeof rawPayload !== 'object' || Array.isArray(rawPayload)) {
    return {
      status: 400,
      body: { ok: false, message: 'Payload booking tidak valid.' },
    };
  }

  const data = rawPayload as Record<string, unknown>;
  const companyWebsite = normalizeString(data.companyWebsite, 200);

  // Honeypot field: silently ignore automated bot submissions
  if (companyWebsite.length > 0) {
    return {
      status: 200,
      body: { ok: true, skipped: true, message: 'Accepted.' },
    };
  }

  const name = normalizeString(data.name, 120);
  const phone = normalizeString(data.phone, 40);
  const serviceType = normalizeString(data.serviceType, 120) || 'Konsultasi & Booking Event';
  const eventDate = normalizeString(data.eventDate, 30);
  const notes = normalizeString(data.notes, 2000);

  const phoneDigits = phone.replace(/\D/g, '');
  if (!name || phoneDigits.length < 8) {
    return {
      status: 400,
      body: {
        ok: false,
        message: 'Nama dan nomor telepon/WhatsApp yang valid wajib diisi.',
      },
    };
  }

  const apiKey = env.RESEND_API_KEY?.trim();
  const toRaw = env.BOOKING_TO_EMAIL?.trim() || '';
  const toRecipients = toRaw
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);
  const fromEmail = env.BOOKING_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL;

  if (!apiKey || toRecipients.length === 0) {
    return {
      status: 503,
      body: {
        ok: false,
        configured: false,
        message: 'Notifikasi email belum dikonfigurasi.',
      },
    };
  }

  const timestamp = formatBaliTimestamp();
  const waDigits = normalizeWhatsAppDigits(phone);
  const waReplyUrl = waDigits ? `https://wa.me/${waDigits}` : '';

  const subject = `[Booking Baru] ${sanitizeHeaderText(serviceType)} — ${sanitizeHeaderText(name)}`;

  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeService = escapeHtml(serviceType);
  const safeDate = escapeHtml(eventDate || 'Belum ditentukan');
  const safeNotes = escapeHtml(notes || 'Tidak ada catatan tambahan.').replace(/\n/g, '<br />');
  const safeTimestamp = escapeHtml(timestamp);

  const html = `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; background-color: #050505; color: #f5f5f5; padding: 32px 20px;">
      <div style="max-width: 580px; margin: 0 auto; background-color: #0B0B0D; border: 1px solid #262626; padding: 28px;">
        <p style="margin: 0 0 8px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #D4AF37;">
          Sevenpro Entertainment · Lead Notification
        </p>
        <h1 style="margin: 0 0 18px; font-size: 22px; font-weight: 600; color: #ffffff;">
          Permintaan Booking Baru
        </h1>
        <p style="margin: 0 0 20px; font-size: 14px; line-height: 1.6; color: #b3b3b3;">
          Calon klien baru saja mengisi Form Booking WhatsApp di website Sevenpro Entertainment.
        </p>

        <table style="width: 100%; border-collapse: collapse; border: 1px solid #262626; background-color: #050505; margin-bottom: 22px;">
          <tr>
            <td style="padding: 12px 14px; font-size: 13px; color: #8c8c8c; border-bottom: 1px solid #1f1f1f; width: 38%;">Nama / Instansi</td>
            <td style="padding: 12px 14px; font-size: 14px; color: #ffffff; font-weight: 600; border-bottom: 1px solid #1f1f1f;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 12px 14px; font-size: 13px; color: #8c8c8c; border-bottom: 1px solid #1f1f1f;">No. Telepon / WA</td>
            <td style="padding: 12px 14px; font-size: 14px; color: #ffffff; font-family: monospace; border-bottom: 1px solid #1f1f1f;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 12px 14px; font-size: 13px; color: #8c8c8c; border-bottom: 1px solid #1f1f1f;">Layanan</td>
            <td style="padding: 12px 14px; font-size: 14px; color: #E5C158; font-weight: 600; border-bottom: 1px solid #1f1f1f;">${safeService}</td>
          </tr>
          <tr>
            <td style="padding: 12px 14px; font-size: 13px; color: #8c8c8c; border-bottom: 1px solid #1f1f1f;">Tanggal Acara</td>
            <td style="padding: 12px 14px; font-size: 14px; color: #ffffff; border-bottom: 1px solid #1f1f1f;">${safeDate}</td>
          </tr>
          <tr>
            <td style="padding: 12px 14px; font-size: 13px; color: #8c8c8c; vertical-align: top;">Lokasi &amp; Catatan</td>
            <td style="padding: 12px 14px; font-size: 13px; line-height: 1.6; color: #e5e5e5;">${safeNotes}</td>
          </tr>
        </table>

        ${
          waReplyUrl
            ? `<div style="margin-bottom: 22px;">
                <a href="${waReplyUrl}" style="display: inline-block; background-color: #D4AF37; color: #000000; text-decoration: none; font-weight: 600; font-size: 13px; padding: 12px 20px;">
                  Balas via WhatsApp Klien
                </a>
              </div>`
            : ''
        }

        <p style="margin: 0; font-size: 11px; color: #737373;">
          Diterima pada ${safeTimestamp} (WITA)
        </p>
      </div>
    </div>
  `.trim();

  const text = [
    'Permintaan Booking Baru - Sevenpro Entertainment',
    '',
    `Nama / Instansi : ${name}`,
    `No. Telepon / WA: ${phone}`,
    `Layanan         : ${serviceType}`,
    `Tanggal Acara   : ${eventDate || 'Belum ditentukan'}`,
    `Catatan         : ${notes || 'Tidak ada catatan tambahan.'}`,
    waReplyUrl ? `Link WhatsApp   : ${waReplyUrl}` : '',
    `Waktu Input     : ${timestamp} (WITA)`,
  ]
    .filter(Boolean)
    .join('\n');

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toRecipients,
        subject,
        html,
        text,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error('Resend API returned non-OK status:', response.status);
      return {
        status: 502,
        body: { ok: false, message: 'Gagal mengirim notifikasi email.' },
      };
    }

    return {
      status: 200,
      body: { ok: true, message: 'Notifikasi booking terkirim.' },
    };
  } catch (err) {
    console.error('Resend request failed:', err instanceof Error ? err.name : 'UnknownError');
    return {
      status: 502,
      body: { ok: false, message: 'Layanan email tidak merespons tepat waktu.' },
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
