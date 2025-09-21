import { Asterisk } from "lucide-react";

const descs = [
  "Currently seeking intern and full-time opportunities as a software engineer + spending my time learning full-stack development!",
  "Former Head Teaching Assistant at CMU for 15-150: Principles of Functional Programming (Summer 2024).",
  "Hobbyist designer, filmmaker, and photographer (see creative).",
];

function Intro() {
  const descItems = descs.map((desc) => {
    return (
      <div className="relative">
        <Asterisk className="inline text-emerald-700 absolute -left-10" />{" "}
        {desc}
      </div>
    );
  });

  return (
    <>
      <div className="bg-white border-gray-700 border-1 p-5 rounded-3xl mb-10">
        <h1 className="text-3xl font-bold text-emerald-700 mb-5 tracking-tight">
          hi, i'm emma tong—
        </h1>
        <h2 className="">
          I'm a recent graduate of the{" "}
          <span className="font-bold">
            School of Computer Science at Carnegie Mellon University
          </span>{" "}
          with a <span className="font-bold">BS in Computer Science</span> (+
          minor in Music Technology).
        </h2>
      </div>
      <div className="flex flex-col gap-3 ml-10">{descItems}</div>
    </>
  );
}

export default Intro;
