export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="brand">Nishank<span>.</span></a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>
        <a href="#contact" className="nav-cta">Get in touch</a>
      </div>
    </header>
  );
}
