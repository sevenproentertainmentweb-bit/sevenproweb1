import React, { useEffect, useState } from 'react';
import { ArrowUpRight, CheckCircle2, MapPin, MessageSquare, X } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../utils/whatsapp';

interface InquiryModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  'Dancer',
  'Band & Live Music',
  'Costume',
  'Consulting',
  'Event Equipment (Lighting, Sound & Generator)',
  'Corporate & Government Cooperation',
];

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  initialService,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [serviceType, setServiceType] = useState(initialService || SERVICE_OPTIONS[0]);
  const [notes, setNotes] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReadyToSend, setIsReadyToSend] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setServiceType(initialService || SERVICE_OPTIONS[0]);
      setError('');
      setIsSubmitting(false);
      setIsReadyToSend(false);
    }
  }, [isOpen, initialService]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmedName = name.trim();
  const trimmedPhone = phone.trim();

  const noteLines = [
    trimmedName ? `Nama / Instansi: ${trimmedName}` : '',
    trimmedPhone ? `No. Telepon / WA: ${trimmedPhone}` : '',
    eventDate ? `Tanggal Acara: ${eventDate}` : '',
    notes.trim() ? `Detail Acara: ${notes.trim()}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappHref = getWhatsAppUrl(serviceType, noteLines);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!trimmedName) {
      setError('Mohon isi nama atau nama perusahaan Anda.');
      return;
    }

    const digitsOnly = trimmedPhone.replace(/\D/g, '');
    if (!trimmedPhone || digitsOnly.length < 8) {
      setError('Mohon isi nomor telepon / WhatsApp yang valid (minimal 8 digit).');
      return;
    }

    setError('');
    setIsSubmitting(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);

    try {
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: trimmedName,
          phone: trimmedPhone,
          serviceType,
          eventDate,
          notes: notes.trim(),
          companyWebsite,
        }),
        signal: controller.signal,
      });
    } catch {
      // Fail-safe: allow visitor to proceed to WhatsApp even if email API is unavailable
    } finally {
      window.clearTimeout(timeoutId);
      setIsSubmitting(false);
      setIsReadyToSend(true);
    }
  };

  const resetAndClose = () => {
    setName('');
    setPhone('');
    setEventDate('');
    setNotes('');
    setCompanyWebsite('');
    setError('');
    setIsSubmitting(false);
    setIsReadyToSend(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-[#0B0B0D] border border-white/15 p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close booking form"
          className="absolute top-5 right-5 p-2 text-white/60 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <X className="h-5 w-5" />
        </button>

        {isReadyToSend ? (
          <div className="py-2">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="h-8 w-8 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs font-medium tracking-[0.18em] text-[#D4AF37] uppercase">
                  Form Terisi
                </p>
                <h3 id="contact-modal-title" className="font-display text-2xl font-semibold text-white">
                  Lanjutkan Booking ke WhatsApp
                </h3>
              </div>
            </div>

            <p className="text-sm text-white/70 mb-5">
              Data booking Anda sudah siap dikirim ke WhatsApp resmi Sevenpro Entertainment ({WHATSAPP_DISPLAY}).
            </p>

            <dl className="space-y-2.5 border border-white/10 bg-[#050505] p-4 text-sm mb-6">
              <div className="flex justify-between gap-4">
                <dt className="text-white/50">Nama / Instansi</dt>
                <dd className="text-white font-medium text-right">{trimmedName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/50">No. Telepon</dt>
                <dd className="text-white font-mono tabular-nums text-right">{trimmedPhone}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-white/50">Layanan</dt>
                <dd className="text-[#E5C158] font-medium text-right">{serviceType}</dd>
              </div>
              {eventDate && (
                <div className="flex justify-between gap-4">
                  <dt className="text-white/50">Tanggal Acara</dt>
                  <dd className="text-white tabular-nums text-right">{eventDate}</dd>
                </div>
              )}
              {notes.trim() && (
                <div className="pt-2 border-t border-white/10">
                  <dt className="text-white/50 text-xs mb-1">Catatan Acara</dt>
                  <dd className="text-white/85 text-xs leading-relaxed">{notes.trim()}</dd>
                </div>
              )}
            </dl>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsReadyToSend(false)}
                className="px-4 py-2.5 text-sm text-white/65 hover:text-white transition-colors cursor-pointer"
              >
                Ubah Data
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-sm px-6 py-2.5 transition-colors cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Kirim ke WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-[#D4AF37] uppercase mb-2">
              Booking & Consultation Form
            </p>
            <h3 id="contact-modal-title" className="font-display text-2xl font-semibold text-white mb-1">
              Form Booking Sevenpro Entertainment
            </h3>
            <p className="text-sm text-white/65 mb-5">
              Isi detail kontak Anda terlebih dahulu sebelum diarahkan ke WhatsApp{' '}
              <span className="font-mono tabular-nums text-white">{WHATSAPP_DISPLAY}</span>.
            </p>

            <div className="mb-5 flex items-start gap-2.5 border border-white/10 bg-[#050505] p-3 text-xs text-white/75">
              <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>
                Jalan Kuwum 2 Gang Kartika No. 26, Kerobokan, North Kuta, Badung, Bali
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input
                type="text"
                name="companyWebsite"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="wa-name" className="block text-xs font-medium text-white/80 mb-1.5">
                    Nama / Organisasi <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="wa-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="cth. Ayana Resort Event"
                    className="w-full bg-[#050505] border border-white/15 focus:border-[#D4AF37] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="wa-phone" className="block text-xs font-medium text-white/80 mb-1.5">
                    Nomor Telepon / WhatsApp <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="wa-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="cth. 081234567890"
                    className="w-full bg-[#050505] border border-white/15 focus:border-[#D4AF37] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="wa-service" className="block text-xs font-medium text-white/80 mb-1.5">
                    Layanan / Pertunjukan
                  </label>
                  <select
                    id="wa-service"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#050505] border border-white/15 focus:border-[#D4AF37] px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0B0B0D]">
                        {opt}
                      </option>
                    ))}
                    {!SERVICE_OPTIONS.includes(serviceType) && (
                      <option value={serviceType} className="bg-[#0B0B0D]">
                        {serviceType}
                      </option>
                    )}
                  </select>
                </div>

                <div>
                  <label htmlFor="wa-date" className="block text-xs font-medium text-white/80 mb-1.5">
                    Tanggal Acara
                  </label>
                  <input
                    id="wa-date"
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-[#050505] border border-white/15 focus:border-[#D4AF37] px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="wa-notes" className="block text-xs font-medium text-white/80 mb-1.5">
                  Lokasi Venue & Catatan
                </label>
                <textarea
                  id="wa-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Venue lokasi, jumlah tamu, atau konsep pertunjukan..."
                  className="w-full bg-[#050505] border border-white/15 focus:border-[#D4AF37] px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors resize-none"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs text-amber-400">
                  {error}
                </p>
              )}

              <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={resetAndClose}
                  disabled={isSubmitting}
                  className="px-4 py-2.5 text-sm text-white/65 hover:text-white disabled:opacity-50 transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C158] disabled:opacity-70 text-black font-semibold text-sm px-6 py-2.5 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>{isSubmitting ? 'Memproses...' : 'Lanjut ke WhatsApp'}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
