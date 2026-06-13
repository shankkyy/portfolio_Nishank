import { heroStats } from "../data/content.js";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="status reveal">
          <span className="dot"></span> Open to AI Engineering roles · Available now
        </span>
        <h1 className="reveal">
          AI Engineer building<br />
          <span className="grad">LLM, RAG &amp; agentic</span> systems<br />
          that ship to production.
        </h1>
        <p className="lead reveal">
          I design and deliver intelligent applications end-to-end — from
          retrieval-augmented LLM pipelines and autonomous agents to the
          distributed, fault-tolerant backends that run them at scale.
        </p>
        <div className="hero-cta reveal">
          <a href="#projects" className="btn btn-primary">View my work →</a>
          <a href="#contact" className="btn btn-ghost">Contact me</a>
        </div>
        <div className="hero-meta reveal">
          {heroStats.map((s) => (
            <div key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
