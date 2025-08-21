import justFilmsPoster from "../assets/justfilms-poster-2.png";
import magazineSpread from "../assets/magazine-1.webp";
import logo150 from "../assets/15-150-hoodie-f24.png";
import scsDayLogo from "../assets/scsday25-sticker.png";

export interface Project {
  title: string;
  subtitle: string;
  date: string;
  details: string[];
  imageSource?: string;
  imageAlt?: string;
  link?: string;
  linkName?: string;
  techUsed: string;
}

export interface Photo {
  imageSource: string;
  imageAlt: string;
  location: string;
  year?: string;
}

const techProjects: Project[] = [
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
      "Designed event page to promote university-wide cultural event, leading to over 140 ticket sales.",
    ],
    link: "https://github.com/cmujsa/cmujsa-web",
    linkName: "github repo",
    techUsed: "html, css, javascript, bootstrap library, git",
  },
];

const designProjects: Project[] = [
  {
    title: "Typographic Event Series Poster",
    subtitle: "Communication & Digital Design Fundamentals Course",
    date: "sept 2024 - oct 2024",
    details: [
      "Designed typographic posters for Just Films, an organization committed to using film to educate and promote conversations and actions in the realm of gender equity and social justice.",
      "Utilized design fundamentals by exploring the relationship between content, context, composition, and meaning.",
    ],
    imageSource: justFilmsPoster,
    imageAlt: "Poster for Just Films",
    link: "https://medium.com/@eytong/project-1-44ba43192cc8",
    linkName: "process blog",
    techUsed: "adobe indesign",
  },
  {
    title: "Complex Editorial System",
    subtitle: "Communication & Digital Design Fundamentals Course",
    date: "nov 2024 - dec 2024",
    details: [
      "Designed a print magazine article and an online magazine article page based on an existing story.",
      "Explored palettes and mood boards to determine the visual direction",
      "Focused on utilizing grid, composition, long-form typesetting, and other design principles learned across the semester.",
    ],
    imageSource: magazineSpread,
    imageAlt: "Ikebana magazine article spread",
    link: "https://medium.com/@eytong/project-4-b72e8108e9a2",
    linkName: "process blog",
    techUsed: "adobe indesign (print), figma (digital)",
  },
  {
    title: "Hoodie Design for 15-150 Teaching Assistants",
    subtitle: "Personal Project",
    date: "oct 2024 - nov 2024",
    details: [
      "Drew designs for front and back of a hoodie, based on the 15-150 course mascot.",
    ],
    imageSource: logo150,
    imageAlt: "Hoodie logo for 15-150",
    techUsed: "procreate (illustration), adobe illlustrator (vectorization)",
  },
  {
    title: "Logo Submission for SCS Day 2025",
    subtitle: "SCS Day 2025",
    date: "jan 2025",
    details: [
      "Illustrated a logo design for the SCS Day 2025 Logo Competition.",
      "Won honorable mention and logo was featured on stickers for the event.",
    ],
    imageSource: scsDayLogo,
    imageAlt: "Logo submission for SCS Day 2025",
    techUsed: "procreate",
  },
];

const filmProjects: Project[] = [
  {
    title: 'SDC Ready? "SDC BUILD!"',
    subtitle: "Introduction to Film Production Course",
    date: "sept 2024 - oct 2024",
    details: [
      "Directed, produced, filmed, and edited a short documentary film following the members of Student Dormitory Council (SDC) Booth during Carnegie Mellon University's 2024 Spring Carnival.",
      "Shot multiple interviews with members of SDC Booth, and combined footage with b-roll filmed throughout the event.",
      "Edited with intention to show behind-the-scenes struggles and highlight the dedication and hard work displayed by students for this incredible tradition.",
    ],
    imageSource: "https://img.youtube.com/vi/37yWPs4x3xc/mqdefault.jpg",
    link: "https://youtu.be/37yWPs4x3xc",
    linkName: "film (youtube)",
    techUsed: "adobe premiere pro, camera operation, audio recording",
  },
  {
    title: "late",
    subtitle: "Introduction to Film Production Course",
    date: "feb 2024",
    details: [
      "Created a playful narrative short film about a man waiting for his tardy friends.",
      "Focused on camera operation skills including exposure, camera movement, and shot composition.",
    ],
    imageSource: "https://img.youtube.com/vi/ItebHmyM-wg/mqdefault.jpg",
    link: "https://youtu.be/ItebHmyM-wg",
    linkName: "film (youtube)",
    techUsed: "adobe premiere pro, camera operation",
  },
  {
    title: "Christian Theology",
    subtitle: "Introduction to Film Production Course",
    date: "apr 2024",
    details: [
      "Wrote and created a short film about a strange man interviewing a Christian theology reader.",
      "Concentrated on using audio effects to enhance emotions and suspense.",
    ],
    imageSource: "https://img.youtube.com/vi/yuabrUB2-58/mqdefault.jpg",

    link: "https://youtu.be/yuabrUB2-58",
    linkName: "film (youtube)",
    techUsed: "adobe premiere pro, camera operation, audio recording",
  },
  {
    title: '"Road of Return" by Joy Harjo',
    subtitle: "Making the Documentary Course",
    date: "oct 2024",
    details: [
      'Edited short film set to the poem "Road of Return" by Joy Harjo.',
      "Selected metaphorical shots to match the tone and feel of the words.",
    ],
    imageSource: "https://img.youtube.com/vi/UsOEsWyHpDo/mqdefault.jpg",

    link: "https://youtu.be/UsOEsWyHpDo",
    linkName: "film (youtube)",
    techUsed: "adobe premiere pro",
  },
];

const photos: Photo[] = [
  {
    imageSource: "",
    imageAlt: "",
    location: "New York City",
  },
];

export { techProjects, designProjects, filmProjects, photos };
