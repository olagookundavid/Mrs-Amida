import { WHATSAPP_NUMBER } from '../data/site'

/** Build a wa.me link that opens a chat with the secretariat, pre-filled with `text`. */
export function whatsappUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
