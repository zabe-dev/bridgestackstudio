import { MessageCircle, LayoutGrid } from "lucide-react";
import { HeroContent } from "@/lib/content";
export default function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="small-dot" />
              {hero.eyebrow}
            </div>
            <h1>{[...hero.headlineLines, hero.headlineAccent].join(" ")}</h1>
            <p className="lead">{hero.lead}</p>
            <div className="hero-ctas">
              <a className="btn btn-solid" href="#contact">
                <MessageCircle size={17} aria-hidden="true" />
                {hero.ctaPrimary}

              </a>
              <a className="text-link" href="#services">
                <LayoutGrid size={16} aria-hidden="true" />
                {hero.ctaSecondary}

              </a>
            </div>
            <p className="hero-note">
              Custom design. Managed hosting. Ongoing support.
            </p>
          </div>
          <figure className="showcase">
            <div className="showcase-top">
              <span>A better first impression.</span>

            </div>
            <div
              className="browser-preview"
              role="img"
              aria-label="Illustrative website design for a fictional home builder, Oak and Field. A clean editorial design with an architectural house illustration."
            >
              <div className="browser-bar">
                <span className="browser-dots">● ● ●</span>
                <span>oakandfield.example</span>
                <span>—</span>
              </div>
              <div className="sample-nav">
                <b>
                  OAK <i>&</i> FIELD
                </b>
                <span>
                  Our approach &nbsp;&nbsp; Our homes &nbsp;&nbsp;{" "}
                  <u>Let’s build</u>
                </span>
              </div>
              <div className="sample-copy">
                <span className="sample-label">
                  THOUGHTFULLY BUILT. ROOTED IN INDIANA.
                </span>
                <div>
                  Room to live.
                  <br />
                  <em>Space to belong.</em>
                </div>
                <span className="sample-cta">Find your place</span>
              </div>
              <svg
                className="house-art"
                viewBox="0 0 640 310"
                fill="none"
                aria-hidden="true"
              >
                <rect width="640" height="310" fill="var(--surface)" />
                <circle cx="508" cy="58" r="33" fill="var(--amber)" />
                <path
                  d="M0 182 Q100 145 227 178 T640 155 V310 H0Z"
                  fill="var(--border)"
                />
                <path d="M0 221 Q200 187 640 227V310H0Z" fill="var(--muted)" />
                <path d="M105 171L267 87L431 166V267H105Z" fill="var(--paper)" />
                <path d="M267 87L431 166V267H267Z" fill="var(--border)" />
                <path
                  d="M86 171L267 73L449 164L431 178L267 97L105 185Z"
                  fill="var(--ink)"
                />
                <path d="M419 184H555V266H419Z" fill="var(--paper)" />
                <path d="M408 179H566V191H408Z" fill="var(--ink)" />
                <path
                  d="M131 190H189V242H131Z M207 168H248V265H207Z M299 172H344V231H299Z M366 205H402V244H366Z M445 209H526V250H445Z"
                  fill="var(--dark-surface)"
                />
                <path
                  d="M160 190V242M131 216H189M321 172V231M299 201H344M485 209V250"
                  stroke="var(--paper)"
                  strokeWidth="3"
                />
                <path d="M201 267L170 310H302L248 267Z" fill="var(--surface)" />
                <path
                  d="M49 265V124M580 267V112"
                  stroke="var(--ink)"
                  strokeWidth="8"
                />
                <path
                  d="M49 75C4 127 2 183 49 204C96 181 87 122 49 75Z"
                  fill="var(--ink)"
                />
                <path
                  d="M580 64C536 113 526 170 580 201C630 172 623 113 580 64Z"
                  fill="var(--dark-surface)"
                />
                <path
                  d="M70 263Q126 226 179 268M349 267Q391 231 433 267M486 269Q526 240 570 269"
                  fill="var(--dark-surface)"
                />
              </svg>
              <div className="sample-bottom">
                <span>Considered details. Lasting quality.</span>
                <span>01 — 03</span>
              </div>
            </div>
            <figcaption>
              <span>Design exploration / Local home builder</span>
              <span>Concept, not client work</span>
            </figcaption>
            <div className="showcase-bottom">
              <span className="showcase-mark" aria-hidden="true">
                ✳
              </span>
              <p>
                Your business has a story.
                <br />
                <strong>Let’s give it a proper home.</strong>
              </p>
            </div>
          </figure>
        </div>

      </div>
    </section>
  );
}
