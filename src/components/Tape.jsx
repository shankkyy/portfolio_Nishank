import { buzzwords } from "../data/content.js";

export default function Tape() {
  // Duplicated list so the marquee loops seamlessly.
  const loop = [...buzzwords, ...buzzwords];
  return (
    <div className="tape">
      <div className="tape-track">
        {loop.map((b, i) => (
          <span className="chip" key={`${b}-${i}`}>{b}</span>
        ))}
      </div>
    </div>
  );
}
