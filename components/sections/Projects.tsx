import Link from "next/link";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { Tabs } from "../ui/tabs";
import Image from "next/image";

const Completed_content = [
  {
    title: "Smartscore",
    description:
      "A web based quiz application that has the ability to cluster student based on students’ clickstream analysis and score.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/projects/smartscore.png"
          width={1900}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "https://smartscore.netlify.app",
    githubLink: [
      "https://github.com/xcutiepatootie/new_smartscore",
      "https://github.com/xcutiepatootie/smartscore_weka_backend",
    ],
    highlights: [
      " Presented at National Research Congress (iSITE)",
      " 3rd place at CCS Student Research Congress",
      " User Friendly and Mobile Responsive",
      " Utilizes MongoDB for storage",
    ],
    technologies: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Spring Boot",
      "MongoDB",
      "Tailwind CSS",
      "Weka",
      "shadcn",
    ],
  },
  {
    title: "E-archiving System",
    description:
      "A web based archiving application that gives the user toupload files for monitoring and requirements.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/projects/e-archivingsystem.jpg"
          width={1900}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "Currently Down",
    githubLink: ["https://github.com/stephaniexjoy/archiving-system"],
    highlights: [
      "Developed a responsive and user-friendly interface",
      "Utilized Supabase (postgreSQL) for storing data.",
      "Utilized Edgestore for storage bucket.",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "Next.js",
      " postgreSQL",
      "Tailwind CSS",
      "shadcn",
      "Edgestore",
    ],
  },
  {
    title: "Event Management System",
    description:
      " A web based event manager system that books the users to a certain event.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/projects/eventmanagement.jpg"
          width={1900}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "Not Available",
    githubLink: ["https://github.com/Asdf123ah/event-management-system"],
    highlights: [
      "Developed a responsive and user-friendly interface",
      "Utilized Serverless Functions of Next.js",
      " JSON Server as mock API/Database of the application.",
    ],
    technologies: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JSON Server",
    ],
  },
  {
    title: "IPCR System",
    description:
      "A web based peer evaluation system that streamline the process  of evaluation of the department.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="/projects/ipcrsystem.jpg"
          width={1900}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "Currently Down",
    githubLink: ["https://github.com/xcutiepatootie/IPCR-System"],
    highlights: [
      " My very first project using React.js and Next.js",
      " Used mongoose for MongoDB connection",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    title: "Personal Portfolio",
    description:
      "My Portfolio made in Next.js/React.js and Tailwind CSS with Aceternity and FramerMotion.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <Image
          src="/projects/portfolio.png"
          width={1900}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "https://react-portfolio-nextjs-git-main-xcutiepatooties-projects.vercel.app/",
    githubLink: ["https://github.com/xcutiepatootie/react-portfolio-nextjs"],
    highlights: [
      "My very first portfolio utilizes Next.js",
      "Minimalist Approach",
    ],
    technologies: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "FramerMotion",
      "Vercel",
      "Github Actions",
    ],
  },
];

const wip_content = [
  {
    title: "Music Party",
    description:
      " A web based music player that users can bring friends with to listen to music inspired by TechWithTim.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/projects/musicparty.png"
          width={1900}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "Not Available",
    githubLink: ["https://github.com/xcutiepatootie/Music_Party/"],
    highlights: [
      "Developing a responsive and user-friendly interface",
      "Uses Spotify’s API and web player",
      "Will utilize postgreSQL for database",
    ],
    technologies: ["React.js", "Django", "react-mui", "Spotify API"],
  },
  {
    title: "RCQC Payroll System",
    description: "Payroll System using JavaFX",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/projects/rcqc.png"
          width={1900}
          height={1000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
    link: "Not Available",

    highlights: [
      "Developing a responsive and user-friendly interface",
      "Using JavaFX for local deployment",
      "Under designing phase.",
    ],
    technologies: ["Java", "JavaFX"],
  },
];

const Projects = () => {
  const tabs = [
    {
      title: "Completed",
      value: "completed",
      content: (
        <div className="relative h-[60vh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#81d693] to-[#95b4a5] p-10 text-xl font-bold text-white md:h-full md:text-4xl">
          <p className="text-">Completed Projects</p>
          <StickyScroll content={Completed_content} />
        </div>
      ),
    },
    {
      title: "Work In Progress",
      value: "wip",
      content: (
        <div className="relative h-[60vh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#95b4a5] to-[#81d693] p-10 text-xl font-bold text-white md:h-full md:text-4xl">
          <p className="text-">Work In Progress (WiP)</p>
          <StickyScroll content={wip_content} />
        </div>
      ),
    },
  ];

  return (
    <div className="flex h-[20rem] w-full flex-col items-start justify-start px-8 [perspective:1000px] md:h-[45rem]">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Projects;
