import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappUrl } from "@/lib/whatsapp";

export default function WhatsAppChat({ phone }: { phone: string }) {
  return (
    <a className="whatsapp-chat" href={whatsappUrl(phone)} target="_blank" rel="noopener noreferrer" aria-label="Ask a question on WhatsApp (opens in a new tab)">
      <WhatsAppIcon />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
