import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow reveal">Selected work</div>
        <h2 className="title reveal">Projects with real scale.</h2>
        <div className="proj">
          {projects.map((p) => (
            <article className="proj-card reveal" key={p.title}>
              <span className="num">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="proj-stats">
                {p.stats.map((s) => (
                  <div key={s.l}>
                    <div className="n">{s.n}</div>
                    <div className="l">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="stack tags">
                {p.stack.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
