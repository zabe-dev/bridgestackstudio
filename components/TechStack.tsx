import { StackContent } from "@/lib/content";
import Reveal from "./Reveal";

export default function TechStack({ stack }: { stack: StackContent }) {
  return (
    <section className="stack grid-dark">
      <div className="wrap">
        <div className="stack-head">
          <div className="eyebrow" style={{ marginBottom: 0 }}>
            {stack.eyebrow}
          </div>
          <p>{stack.description}</p>
        </div>
        <div className="stack-layers">
          {stack.layers.map((layer) => (
            <Reveal as="div" className="layer" key={layer.name}>
              <div className="tag">{layer.tag}</div>
              <div className="name">{layer.name}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
