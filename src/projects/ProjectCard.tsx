import type { Project } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project }: { project: Project }) {
  console.log(project);
  const detailItems = project.details.map((detail: string) => {
    return <div>{detail}</div>;
  });
  return (
    <div className="col-span-4 grid grid-cols-4 gap-6 not-first:pt-12 not-last:pb-12">
      <div className="col-span-full sm:col-span-3">
        <span className="font-bold">{project.title}</span>
        <br></br>
        <span className="italic">{project.subtitle}</span>
      </div>
      <div className="col-span-full sm:col-span-1 sm:text-right">{project.date}</div>
      <div className="col-span-full sm:col-span-1 font-bold">details</div>
      <div className="col-span-full sm:col-span-3 flex flex-col gap-3">{detailItems}</div>
      {project.link && (
        <>
          <div className="col-span-1 font-bold">link</div>
          <div className="col-span-3">
            <a href={project.link} target="_blank" className="font-medium link group">
              {project.linkName} <ArrowUpRight className="inline w-5 h-5" />
              <span />
            </a>
          </div>
        </>
      )}
      <div className="col-span-1 font-bold">tech used</div>
      <div className="col-span-3">{project.techUsed}</div>
    </div>
  );
}

export default ProjectCard;
