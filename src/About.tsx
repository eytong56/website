import { coursework, languages, technologies, tools } from "./data/about";

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
      <div className="text-md font-bold">education</div>
      <div className="flex flex-col gap-3 col-span-3">
        <div>Carnegie Mellon University</div>
        <div>aug 2021 - may 2025</div>
        <div>BS in Computer Science, Minor in Music Technology</div>
        <div>gpa: 3.90</div>
      </div>
      <div className="text-md font-bold">selected coursework</div>
      <div className="flex flex-col gap-3 col-span-3">{courseworkItems}</div>
      <div className="text-md font-bold row-span-2">languages</div>
      <div className="flex flex-col gap-3 row-span-2">{languageItems}</div>
      <div className="text-md font-bold">
        web & database technologies
        <br />
        tools & design
      </div>
      <div className="flex flex-col gap-3">{technologiesItems}</div>
      <div className="text-md font-bold">tools & design</div>
      <div className="flex flex-col gap-3">{toolsItems}</div>
    </>
  );
}

export default About;
