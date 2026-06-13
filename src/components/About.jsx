import { aboutFacts } from "../data/content.js";

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about reveal">
          <div className="eyebrow">About</div>
          <h2 className="title">Engineering intelligence into the stack.</h2>
          <p>
            I'm <strong>Nishank Verma</strong>, an AI Engineer at{" "}
            <strong>Trianz</strong> and a Computer Science graduate from{" "}
            <strong>NIT Bhopal</strong>. I build AI-powered products where{" "}
            <strong>large language models, RAG, and agent orchestration</strong>{" "}
            meet rigorous systems engineering.
          </p>
          <p>
            My recent work includes an{" "}
            <strong>end-to-end AI deployment agent</strong> — a modular
            orchestrator with a playbook engine, dependency-graph resolution, and{" "}
            <strong>Amazon Bedrock</strong> LLM assistance fused with a
            deterministic YAML DAG engine, with real-time WebSocket observability
            and approval-gated control.
          </p>
          <p>
            I care about the unglamorous parts that make AI reliable:{" "}
            <strong>concurrency, caching, fault tolerance, and clean SOLID design</strong>.
            That balance — model-aware <em>and</em> infrastructure-aware — is how I
            turn prototypes into dependable products.
          </p>
        </div>
        <aside className="card reveal">
          <h4>At a glance</h4>
          {aboutFacts.map(([k, v]) => (
            <div className="fact" key={k}>
              <span>{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
