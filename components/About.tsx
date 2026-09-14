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
            <p>We start with your services, your customers, and the questions they need answered. The design follows your business, rather than a template.</p>
          </Reveal>
          <Reveal as="article" className="approach-principle">
            <h3>A direct line to your web partner</h3>
            <p>Work with one studio from the first conversation through launch. You know who to contact, what happens next, and where your project stands.</p>
          </Reveal>
          <Reveal as="article" className="approach-principle">
            <h3>Support beyond launch day</h3>
            <p>New services, different hours, or a change of direction? We take care of hosting and the updates in your plan, so your website keeps up.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
