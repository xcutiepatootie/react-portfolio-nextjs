import React, { ReactNode } from "react";
import { TypeAnimation } from "react-type-animation";

type AboutCard = {
  id: number;
  title: string;
  content: ReactNode;
};

const TechnicalSkills = {
  languages: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "C#",
    "PHP",
  ],
  frameworks: ["React.js", "Next.js", "Django", "Spring Boot"],
  libraries: [
    "shadcn",
    "material-ui",
    "Tailwind CSS",
    "FramerMotion",
    "Aceternity UI",
    "Bootstrap",
    "Weka",
  ],
  tandps: ["Git", "Docker", "Google Cloud Platform", "Linux"],
};

export const about_cards: AboutCard[] = [
  {
    id: 0,
    title: "Technical Skills",
    content: (
      <div className="w-auto">
        <h1 className="text-2xl">Languages</h1>
        <ul className="flex flex-wrap gap-2">
          {TechnicalSkills.languages.map((language, index) => (
            <li
              className="w-auto rounded-md border border-slate-50 bg-[#739072] p-1 px-2 font-bold text-white"
              key={index}
            >
              {language}
            </li>
          ))}
        </ul>
        <h1 className="text-2xl">Frameworks</h1>
        <ul className="flex flex-wrap gap-2">
          {TechnicalSkills.frameworks.map((framework, index) => (
            <li
              className="w-auto rounded-md border border-slate-50 bg-[#739072] p-1 px-2 font-bold text-white"
              key={index}
            >
              {framework}
            </li>
          ))}
        </ul>
        <h1 className="text-2xl">Libraries</h1>
        <ul className="flex flex-wrap gap-2">
          {TechnicalSkills.libraries.map((library, index) => (
            <li
              className="w-auto rounded-md border border-slate-50 bg-[#739072] p-1 px-2 font-bold text-white"
              key={index}
            >
              {library}
            </li>
          ))}
        </ul>
        <h1 className="text-2xl">Game Engine/s</h1>
        <ul className="flex flex-wrap gap-2">
          <li className="w-auto rounded-md border border-slate-50 bg-[#739072] p-1 px-2 font-bold text-white">
            Unity
          </li>
        </ul>
        <h1 className="text-2xl">Tools & Platforms</h1>
        <ul className="flex flex-wrap gap-2">
          {TechnicalSkills.tandps.map((tandp, index) => (
            <li
              className="w-auto rounded-md border border-slate-50 bg-[#739072] p-1 px-2 font-bold text-white"
              key={index}
            >
              {tandp}
            </li>
          ))}
        </ul>
        <h1 className="text-2xl">Databases</h1>
        <h2 className="text-xl">SQL</h2>
        <ul className="flex flex-wrap gap-2">
          <li className="w-auto rounded-md border border-slate-50 bg-[#739072] p-1 px-2 font-bold text-white">
            MySQL
          </li>
          <li className="w-auto rounded-md border border-slate-50 bg-[#739072] p-1 px-2 font-bold text-white">
            postgreSQL
          </li>
        </ul>
        <h2 className="text-xl">NoSQL</h2>
        <ul className="flex flex-wrap gap-2">
          <li className="w-auto rounded-md border border-slate-50 bg-[#739072] p-1 px-2 font-bold text-white">
            MongoDB
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 1,
    title: "Soft Skills",
    content: (
      <div>
        <li>Project Management</li>
        <li>Teamwork</li>
        <li>Time Management</li>
        <li>Leadership</li>
        <li>Effective Communication</li>
        <li>Critical Thinking</li>
        <li>Adaptable</li>
      </div>
    ),
  },
  {
    id: 2,
    title: "Awards",
    content: (
      <div>
        <li>
          Cum Laude - Certificate of Recognition - Laguna State Polytechnic
          University - San Pablo City Campus
        </li>
        <li>
          Research Presenter - 9th National Research Conference on Information
          Technology Education
        </li>
        <li>Research Presenter - 3rd place - CCS Student Research Congress</li>
      </div>
    ),
  },
  {
    id: 3,
    title: "Certificates ",
    content: (
      <div>
        <li>MikroTik Certified Network Associate</li>
        <li>Cisco - Introduction to Cybersecurity - Course Completion</li>
        <li>Cisco - Cybersecurity Essentials - Course Completion</li>
      </div>
    ),
  },
  {
    id: 4,
    title: "Seminars ",
    content: (
      <div>
        <li>
          MikroTik Network Associate Bootcamp - Laguna State Polytechnic
          University- San Pablo City Campus - June 2024
        </li>
        <li>
          CCS Learn Fest 2023 - Exploring the Frontiers of Information
          Technology and Computer Science - Laguna State Polytechnic University
          - San Pablo City Campus - May 2023
        </li>
        <li>
          13th EdukCircle International Convention on Engineering and Computer
          Technology - UP Diliman - April 2023
        </li>
        <li>
          The Essentials of Machine Learning - Laguna State Polytechnic
          University San Pablo Campus College of Computer Studies - February
          2021
        </li>
        <li>
          Youth for Information Technology - UP System Information Technology
          Foundation - December 2020
        </li>
      </div>
    ),
  },
];
