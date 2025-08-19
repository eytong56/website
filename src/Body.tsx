import ContactHeader from "./contact/ContactHeader";
import Section from "./Section";
import Intro from "./about/Intro";
import About from "./about/About";
import Projects from "./projects/Projects";
import Creative from "./Creative";
import Contact from "./contact/Contact";

function Body() {
  return (
    <div>
      <ContactHeader />
      <div>
        <Intro />
        <Section title="about" id="about">
          <About />
        </Section>
        <Section title="projects" id="projects">
          <Projects />
        </Section>
        <Section title="creative" id="creative">
          <Creative />
        </Section>
        <Section title="contact me" id="contact">
          <Contact />
        </Section>
      </div>
    </div>
  );
}

export default Body;
