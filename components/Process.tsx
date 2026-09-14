import Reveal from "./Reveal";
import { ProcessContent } from "@/lib/content";
export default function Process({ process }: { process: ProcessContent }) {
  return (
    <section className="process section" id="process">
      <div className="wrap">
        <div className="split-heading">
          <div className="eyebrow">{process.eyebrow}</div>
          <div>
            <h2>{process.heading}</h2>
            <p>{process.description}</p>
          </div>
        </div>
        <div className="stages">
          {process.stages.map((stage, i) => (
            <Reveal as="article" className="stage" key={stage.key}>
              <div className="stage-number">
                0{i + 1}

              </div>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
