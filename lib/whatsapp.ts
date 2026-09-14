/** WhatsApp click-to-chat: international digits only, with an optional draft. */
export function whatsappUrl(phone: string, message = "Hi Bridge Stack Studio! I have a question about a website for my business.") {
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}
