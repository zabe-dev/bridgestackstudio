import { HeroContent } from "@/lib/content";

export default function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section className="hero grid-dark">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{hero.eyebrow}</div>
            <h1>
              {hero.headlineLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
              <span className="accent">{hero.headlineAccent}</span>
            </h1>
            <p className="lead">{hero.lead}</p>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-solid btn-arrow">
                {hero.ctaPrimary}
              </a>
              <a href="#about" className="btn btn-outline">
                {hero.ctaSecondary}
              </a>
            </div>
            <div className="hero-proof" aria-label="Service highlights">
              <span><strong>14–20</strong> days to launch</span>
              <span><strong>100%</strong> custom coded</span>
              <span><strong>Indiana</strong> based support</span>
            </div>
          </div>

          <div className="hero-figure" aria-hidden="true">
            <div className="figure-label figure-label-top">Strategy → structure</div>
            <svg
              viewBox="0 0 900 260"
              className="draw"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className="d1"
                x1="250"
                y1="45"
                x2="250"
                y2="200"
                stroke="#eeece3"
                strokeWidth="3"
              />
              <line
                className="d1"
                x1="650"
                y1="45"
                x2="650"
                y2="200"
                stroke="#eeece3"
                strokeWidth="3"
              />
              <line
                className="d1"
                x1="235"
                y1="200"
                x2="265"
                y2="200"
                stroke="#93a19d"
                strokeWidth="3"
              />
              <line
                className="d1"
                x1="635"
                y1="200"
                x2="665"
                y2="200"
                stroke="#93a19d"
                strokeWidth="3"
              />
              <line
                className="d2"
                x1="40"
                y1="200"
                x2="860"
                y2="200"
                stroke="#eeece3"
                strokeWidth="2.5"
              />
              <path
                className="d3"
                d="M40,150 Q120,80 250,45 Q450,190 650,45 Q780,80 860,150"
                fill="none"
                stroke="#f5a623"
                strokeWidth="2.5"
              />
              <g className="d4" stroke="#5bc0be" strokeWidth="1.5">
                <line x1="90" y1="132" x2="90" y2="200" />
                <line x1="140" y1="112" x2="140" y2="200" />
                <line x1="190" y1="80" x2="190" y2="200" />
                <line x1="330" y1="110" x2="330" y2="200" />
                <line x1="390" y1="150" x2="390" y2="200" />
                <line x1="450" y1="175" x2="450" y2="200" />
                <line x1="510" y1="150" x2="510" y2="200" />
                <line x1="570" y1="110" x2="570" y2="200" />
                <line x1="710" y1="80" x2="710" y2="200" />
                <line x1="760" y1="112" x2="760" y2="200" />
                <line x1="810" y1="132" x2="810" y2="200" />
              </g>
              <circle
                className="node"
                style={{ animationDelay: "1.1s" }}
                cx="250"
                cy="45"
                r="4"
                fill="#f5a623"
              />
              <circle
                className="node"
                style={{ animationDelay: "1.2s" }}
                cx="650"
                cy="45"
                r="4"
                fill="#f5a623"
              />
              <circle
                className="node"
                style={{ animationDelay: "1.3s" }}
                cx="450"
                cy="190"
                r="4"
                fill="#f5a623"
              />
              <circle className="pulse-dot" r="4" fill="#f5a623" />
            </svg>
            <div className="figure-label figure-label-bottom">Built to move business forward</div>
          </div>
        </div>
      </div>
    </section>
  );
}
