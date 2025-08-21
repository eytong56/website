import CreativeCard from "./CreativeCard";
import { designProjects, filmProjects } from "./data/projects";
import { Asterisk, ArrowUpRight } from "lucide-react";

function Creative() {
  const designCards = designProjects.map((project) => {
    return <CreativeCard project={project} />;
  });
  const filmCards = filmProjects.map((project) => {
    return <CreativeCard project={project} />;
  });
  return (
    <>
      <div className="text-md text-2xl font-bold col-span-full sm:col-span-1">
        design
      </div>
      <div className="col-span-full divide-y-1 divide-neutral-300 mb-12">
        {designCards}
      </div>

      <div className="text-md text-2xl font-bold col-span-full sm:col-span-1">
        filmmaking
      </div>
      <div className="col-span-full divide-y-1 divide-neutral-300 mb-12">
        {filmCards}
      </div>

      <div className="text-md text-2xl font-bold col-span-full sm:col-span-1">
        photography
      </div>
      <div className="font-medium col-span-full">
        <Asterisk className="inline relative -top-0.5 text-emerald-700" />
        <a
          href="https://emmatong.myportfolio.com/work"
          target="_blank"
          className="link group font-medium relative -bottom-1.5"
        >
          {" "}
          https://emmatong.myportfolio.com/work{" "}
          <ArrowUpRight className="inline w-5 h-5" />
          <span></span>
        </a>
      </div>
    </>
  );
}

export default Creative;
