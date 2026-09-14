import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { PricingContent } from "@/lib/content";
export default function Pricing({ pricing }: { pricing: PricingContent }) {
  return (
    <section className="pricing section" id="pricing">
      <div className="wrap">
        <div className="pricing-heading">
          <div>
            <div className="eyebrow">{pricing.eyebrow}</div>
            <h2>{pricing.heading}</h2>
          </div>
          <p>{pricing.description}</p>
        </div>
        <div className="plans">
          {pricing.plans.map((plan) => (
            <Reveal as="article"
              className={`plan${plan.popular ? " popular" : ""}`}
              key={plan.key}
            >
              <div className="plan-label">
                <span>{plan.key}</span>
                {plan.popular && (
                  <span className="badge">Ongoing partnership</span>
                )}
              </div>
              <h3>{plan.title}</h3>
              <p className="desc">{plan.desc}</p>
              <div className="price">{plan.price}</div>
              <div className="price-note">{plan.priceNote}</div>
              <a
                href={`?plan=${encodeURIComponent(plan.title)}#contact`}
                className={`btn ${plan.popular ? "btn-solid" : "btn-outline"}`}
              >
                <MessageCircle size={16} aria-hidden="true" />
                Let&apos;s get started
              </a>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="pricing-note">
          Not sure where to start? We’ll help you choose the right fit on a free
          consultation.
        </p>
      </div>
    </section>
  );
}
