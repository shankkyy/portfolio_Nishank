import useReveal from "./hooks/useReveal.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Tape from "./components/Tape.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Tape />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
