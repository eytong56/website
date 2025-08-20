export interface Project {
  title: string;
  subtitle: string;
  date: string;
  details: string[];
  link?: string;
  linkName?: string;
  techUsed: string;
}

const projects: Project[] = [
  {
    title: "Daily Task Management Application",
    subtitle: "Personal Project",
    date: "aug 2025 - ongoing",
    details: [
      "Developed a full-stack web application using React with Tailwind CSS frontend and Node.js / Express.js / PostgreSQL backend for day-by-day task organization.",
      "Implemented RESTful APIs with Express.js to handle CRUD operations and filter tasks by date.",
      "Built responsive React frontend from Figma designs with clickable status icon interface and date navigation.",
    ],
    link: "https://github.com/eytong56/task-app",
    linkName: "github repo",
    techUsed:
      "react, node.js, express.js, RESTful APIs, postgresql, tailwind css, figma",
  },
  {
    title: "Raft Consensus Algorithm",
    subtitle: "Distributed Systems Course",
    date: "nov 2024",
    details: [
      "Implemented distributed consensus system in Go with RPC-based peer communication and log replication.",
      "Designed heartbeat and leader election mechanisms to handle node failures, network partitions, and message losses.",
      "Delivered 100% consistency across replicas and thread-safe concurrent operations with <5-second leader re-elections using Go channels, mutexes, and goroutines.",
    ],
    techUsed: "go (goroutines, mutexes, channels), git",
  },
  {
    title: '"Interviewing You & Me!" Museum Exhibit',
    subtitle: "Learning in Museums Course",
    date: "feb 2025 - may 2025",
    details: [
      "Designed an interactive exhibit in a team of 3 for the Children's Museum of Pittsburgh, achieving 70% improvement in visitor engagement metrics through user-centered design and continuous iteration.",
      "Developed Python program that transcribes interviews in real-time using open-source libraries, generates summaries via ChatGPT API with prompt engineering, and integrates automatic thermal printing.",
      "Conducted user research and prototype testing through observations and exit surveys, and analyzed data through affinity diagramming and data visualization.",
    ],
    link: "https://drive.google.com/file/d/1yFpwp7BoS45ZG9L80E5TtFdEdWEff-gx/view?usp=sharing",
    linkName: "design case",
    techUsed: "python, chatgpt api",
  },
  {
    title: '"Personalate" Social Application',
    subtitle: "HackCMU 2022",
    date: "sept 2022",
    details: [
      "Created a social app prototype in a team of 4 that analyzes personality quizzes to strengthen friendships.",
      "Utilized Unity's 2D suite with Unity C# for app functionality and Adobe Illustrator for UI design.",
      'Won the Aptiv Sponsored Prize for “Best Hack for a More Connected World".',
    ],
    link: "https://docs.google.com/presentation/d/1_1kVrmnP_gW4BS1sxEE3zkYLk3F6pprJv_8Bs2Nz354/edit?usp=sharing",
    linkName: "demo presentation",
    techUsed: "unity, c#, git, adobe illustrator",
  },
  {
    title: "CMU Japanese Student Association Website",
    subtitle: "Personal Project",
    date: "aug 2022 - sept 2022",
    details: [
      "Developed the official website for the Japanese Student Association at Carnegie Mellon University (www.cmujsa.com).",
      "Converted Figma mockups to responsive website using HTML, CSS, JavaScript, and Bootstrap.",
      "Designed event page to promote university-wide cultural event, leading to over 140 ticket sales."
    ],
    link: "https://github.com/cmujsa/cmujsa-web",
    linkName: "github repo",
    techUsed: "html, css, javascript, bootstrap library, git",
  },
];

export default projects;
