import { AboutContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function About({ about }: { about: AboutContent }) {
  return (
    <section className="about grid-dark" id="about">
      <div className="wrap">
        <div className="about-grid">
          <Reveal as="div">
            <div className="eyebrow">{about.eyebrow}</div>
            <h2>{about.heading}</h2>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="stat-row">
              {about.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <div className="n">{stat.value}</div>
                  <div className="l">{stat.label.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal as="div" className="compare ticked">
            <div className="eyebrow" style={{ marginBottom: 16 }}>
              {about.compareEyebrow}
            </div>
            <div className="compare-row">
              <div className="compare-col">
                <h4>{about.compareTemplate.heading}</h4>
                <ul>
                  {about.compareTemplate.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="compare-col win">
                <h4>{about.compareBridge.heading}</h4>
                <ul>
                  {about.compareBridge.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
