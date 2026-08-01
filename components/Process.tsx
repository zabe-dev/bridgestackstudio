import { ProcessContent } from "@/lib/content";

export default function Process({ process }: { process: ProcessContent }) {
  return (
    <section className="process">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <div className="eyebrow">{process.eyebrow}</div>
          <h2>{process.heading}</h2>
          <p style={{ color: "var(--text-dim)" }}>{process.description}</p>
        </div>

        <div className="span-wrap">
          <svg
            className="span-line"
            viewBox="0 0 1120 60"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <line
              x1="10"
              y1="30"
              x2="1110"
              y2="30"
              stroke="var(--line)"
              strokeWidth="1"
            />
            <circle cx="30" cy="30" r="5" fill="#f5a623" />
            <circle cx="300" cy="30" r="5" fill="#f5a623" />
            <circle cx="570" cy="30" r="5" fill="#f5a623" />
            <circle cx="840" cy="30" r="5" fill="#f5a623" />
            <circle cx="1100" cy="30" r="5" fill="#f5a623" />
          </svg>

          <div className="stages">
            {process.stages.map((stage) => (
              <div className="stage" key={stage.key}>
                <div className="k">{stage.key.toUpperCase()}</div>
                <h4>{stage.title}</h4>
                <p>{stage.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
