export interface Project {
  title: string;
  subtitle: string;
  date: string;
  details: string[];
  link?: string;
  linkName?: string
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
    techUsed: "react, node.js, express.js, RESTful APIs, postgresql, tailwind css, figma" 
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
    techUsed: "go (goroutines, mutexes, channels)",
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
    linkName: "Design Case",
    techUsed: "python",
  },
  {
    title: '"Personalate" Social App',
    subtitle: "HackCMU 2022",
    date: "sept 2022",
    details: [
      "Created a social app prototype in a team of 4 that analyzes personality quizzes to strengthen friendships.",
      "Utilized Unity's 2D suite with Unity C# for app functionality and Adobe Illustrator for UI design.",
      "Won the Aptiv Sponsored Prize for “Best Hack for a More Connected World.",
    ],
    link: "https://docs.google.com/presentation/d/1_1kVrmnP_gW4BS1sxEE3zkYLk3F6pprJv_8Bs2Nz354/edit?usp=sharing",
    linkName: "Demo Presentation",
    techUsed: "unity, c#, git, adobe illustrator",
  },
];

export default projects;