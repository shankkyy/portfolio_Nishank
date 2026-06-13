import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" style={{ background: "var(--bg-soft)" }}>
      <div className="wrap">
        <div className="eyebrow reveal">Experience &amp; Education</div>
        <h2 className="title reveal">The journey so far.</h2>
        <div className="timeline">
          {experience.map((e) => (
            <div className="tl-item reveal" key={e.role + e.when}>
              <div className="when">{e.when}</div>
              <h3>{e.role}</h3>
              <div className="org">{e.org}</div>
              <ul>
                {e.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
