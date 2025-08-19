import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectCards = projects.map((project) => {
    return <ProjectCard project={project} />;
  });
  return <div className="col-span-4 flex flex-col divide-y-1 divide-neutral-300">{projectCards}</div>;
}

export default Projects;
