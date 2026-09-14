import { AboutContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function About({ about }: { about: AboutContent }) {
  return (
    <section className="about section" id="about">
      <div className="wrap studio-approach">
        <div className="approach-intro">
          <div className="eyebrow">{about.eyebrow}</div>
          <h2>{about.heading}</h2>
          <p>{about.paragraphs[0]}</p>
        </div>
        <div className="approach-principles">
          <Reveal as="article" className="approach-principle">
            <h3>A website that fits your business</h3>
            <p>We start with what you offer, who you serve, and the questions customers ask before they reach out. The site is shaped around your business, not a generic template.</p>
          </Reveal>
          <Reveal as="article" className="approach-principle">
            <h3>A direct line to your web partner</h3>
            <p>You work directly with one person from the first conversation through launch. You always know who to contact, what happens next, and where the project stands.</p>
          </Reveal>
          <Reveal as="article" className="approach-principle">
            <h3>Support beyond launch day</h3>
            <p>When services, hours, or priorities change, your site can change with them. We handle hosting and the updates included in your plan, so the details stay current.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
