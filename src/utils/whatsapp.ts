export const WHATSAPP_NUMBER = '6281239229565';
export const WHATSAPP_DISPLAY = '+62 812-3922-9565';

export function getWhatsAppUrl(topic?: string, customNotes?: string): string {
  const baseMessage = topic
    ? `Halo Sevenpro Entertainment, saya ingin bertanya & melakukan booking untuk: ${topic}.`
    : 'Halo Sevenpro Entertainment, saya ingin konsultasi dan booking layanan event entertainment.';

  const fullMessage = customNotes?.trim()
    ? `${baseMessage}\n\n${customNotes.trim()}`
    : baseMessage;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
}
