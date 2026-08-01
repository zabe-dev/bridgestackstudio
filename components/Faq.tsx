"use client";

import { useState } from "react";
import { FaqContent } from "@/lib/content";
import FaqItem from "./FaqItem";

export default function Faq({ faq }: { faq: FaqContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow" style={{ color: "#c97a12" }}>
            {faq.eyebrow}
          </div>
          <h2>{faq.heading}</h2>
          <p>{faq.description}</p>
        </div>

        <div className="faq-list">
          {faq.items.map((item, index) => (
            <FaqItem
              key={item.q}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
