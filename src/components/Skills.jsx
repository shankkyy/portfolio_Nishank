import { skills } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills" style={{ background: "var(--bg-soft)" }}>
      <div className="wrap">
        <div className="eyebrow reveal">Capabilities</div>
        <h2 className="title reveal">What I work with.</h2>
        <div className="skill-grid">
          {skills.map((s) => (
            <div className="skill-card reveal" key={s.title}>
              <div className="ico">{s.icon}</div>
              <h3>{s.title}</h3>
              <div className="tags">
                {s.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
