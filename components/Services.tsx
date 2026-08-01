import { ServicesContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Services({
  services,
}: {
  services: ServicesContent;
}) {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow" style={{ color: "#c97a12" }}>
            {services.eyebrow}
          </div>
          <h2>{services.heading}</h2>
          <p>{services.description}</p>
        </div>

        <div className="cards">
          {services.cards.map((card) => (
            <Reveal as="div" className="card" key={card.num}>
              <div className="num">{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
