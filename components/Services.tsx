import { PanelsTopLeft, Search, Server, CodeXml } from "lucide-react";
import Reveal from "./Reveal";
import { ServicesContent } from "@/lib/content";
const serviceIcons = [PanelsTopLeft, Search, Server, CodeXml];

export default function Services({ services }: { services: ServicesContent }) {
  return (
    <section className="services section" id="services">
      <div className="wrap">
        <div className="split-heading">
          <div className="eyebrow">{services.eyebrow}</div>
          <div>
            <h2>{services.heading}</h2>
            <p>{services.description}</p>
          </div>
        </div>
        <div className="service-list">
          {services.cards.map((card, index) => {
            const ServiceIcon = serviceIcons[index] ?? PanelsTopLeft;
            return (
            <Reveal as="article" className="service-row" key={card.num}>
              <span className="service-symbol"><ServiceIcon size={23} strokeWidth={1.6} aria-hidden="true" /></span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>

            </Reveal>
          ); })}
        </div>
      </div>
    </section>
  );
}
