import ContactHeader from "./ContactHeader";
import Section from "./Section";
import Intro from "./Intro";
import About from "./About";
import Contact from "./Contact";
import Projects from "./projects/Projects";

function Body() {
  return (
    <div>
      <ContactHeader />
      <div>
        <Intro />
        <Section title="about">
          <About />
        </Section>
        <Section title="projects" >
        <Projects />
        </Section>
        <Section title="contact me">
          <Contact />
        </Section>
      </div>
    </div>
  );
}

export default Body;
