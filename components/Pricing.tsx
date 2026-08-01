import { PricingContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function Pricing({ pricing }: { pricing: PricingContent }) {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{pricing.eyebrow}</div>
          <h2>{pricing.heading}</h2>
          <p style={{ color: "var(--text-dim)" }}>{pricing.description}</p>
        </div>

        <div className="plans">
          {pricing.plans.map((plan) => (
            <Reveal
              as="div"
              className={`plan${plan.popular ? " popular" : ""}`}
              key={plan.key}
            >
              {plan.popular && <div className="badge">MOST POPULAR</div>}
              <div className="k">{plan.key.toUpperCase()}</div>
              <h3>{plan.title}</h3>
              <div className="desc">{plan.desc}</div>
              <div className="price">
                {plan.price}
                <small> {plan.priceNote}</small>
              </div>
              <a
                href="#contact"
                className={`btn ${plan.popular ? "btn-solid" : "btn-outline"}`}
              >
                Schedule a call
              </a>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
