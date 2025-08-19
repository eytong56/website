import { coursework, languages, technologies, tools } from "../data/about";

const arrayToDivs = (arr: string[]) => {
  return arr.map((item) => {
    return <div>{item}</div>;
  });
};

function About() {
  const courseworkItems = arrayToDivs(coursework);
  const languageItems = arrayToDivs(languages);
  const technologiesItems = arrayToDivs(technologies);
  const toolsItems = arrayToDivs(tools);
  return (
    <>
      <div className="text-md font-bold col-span-full lg:col-span-1">education</div>
      <div className="flex flex-col gap-3 col-span-full lg:col-span-3">
        <div>Carnegie Mellon University</div>
        <div>aug 2021 - may 2025</div>
        <div>BS in Computer Science, Minor in Music Technology</div>
        <div>gpa: 3.90</div>
      </div>
      <div className="text-md font-bold col-span-full lg:col-span-1">selected coursework</div>
      <div className="flex flex-col gap-3 col-span-full lg:col-span-3">{courseworkItems}</div>
      <div className="text-md font-bold col-span-2 lg:col-span-1 lg:row-span-2">languages</div>
      <div className="flex flex-col gap-3 col-span-2 lg:col-span-1 lg:row-span-2">{languageItems}</div>
      <div className="text-md font-bold col-span-2 lg:col-span-1">
        web & database technologies
      </div>
      <div className="flex flex-col gap-3 col-span-2 lg:col-span-1">{technologiesItems}</div>
      <div className="text-md font-bold col-span-2 lg:col-span-1">tools & design</div>
      <div className="flex flex-col gap-3 col-span-2 lg:col-span-1">{toolsItems}</div>
    </>
  );
}

export default About;
