import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { Tabs } from "../ui/tabs";
import Image from "next/image";

const Completed_content = [
  {
    title: "Smartscore",
    description: "description here",
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
  },
  {
    title: "E-archiving System",
    description: "description here",
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
  },
  {
    title: "Event Management System",
    description: "description here",
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
  },
  {
    title: "IPCR System",
    description: "description here",
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
  },
  {
    title: "Personal Portfolio",
    description: "description here",
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
  },
];

const wip_content = [
  {
    title: "Music Party",
    description: "description here",
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
  },
  {
    title: "RCQC Payroll System",
    description: "description here",
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
  },
];

const Projects = () => {
  const tabs = [
    {
      title: "Completed",
      value: "completed",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#81d693] to-[#95b4a5] p-10 text-xl font-bold text-white md:text-4xl">
          <p className="text-">Completed Projects</p>
          <StickyScroll content={Completed_content} />
        </div>
      ),
    },
    {
      title: "Work In Progress",
      value: "wip",
      content: (
        <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#95b4a5] to-[#81d693] p-10 text-xl font-bold text-white md:text-4xl">
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
