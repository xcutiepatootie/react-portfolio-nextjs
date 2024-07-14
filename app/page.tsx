import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function page() {
  /* const scrollRef = useRef(null);

  const controls = {
    home: useAnimation(),
    about: useAnimation(),
    projects: useAnimation(),
    contact: useAnimation(),
  };

  const sections = [
    { id: "home", ref: useRef(null), animation: controls.home },
    { id: "about", ref: useRef(null), animation: controls.about },
    { id: "projects", ref: useRef(null), animation: controls.projects },
    { id: "contact", ref: useRef(null), animation: controls.contact },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = sections.find(
            (sec) => sec.ref.current === entry.target,
          );
          if (section) {
            if (entry.isIntersecting) {
              section.animation.start({ opacity: 1, scale: 1 });
            } else {
              section.animation.start({ opacity: 0.5, scale: 0.9 });
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections]); */

  return (
    <div
      /*  ref={scrollRef} */
      className="h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth"
    >
      <Home />

      <div
        /* ref={sections[1].ref} */
        className="flex h-screen w-screen snap-start flex-row items-center justify-center bg-[#739072]"
        id="about"
      >
        <About />
      </div>
      <div
        /*   ref={sections[2].ref} */
        className="flex h-screen w-screen snap-start flex-row py-20 justify-center bg-[#4F6F52]"
        id="projects"
      >
        <Projects />
      </div>
      <div
        /*   ref={sections[3].ref} */
        className="flex h-screen w-screen snap-start flex-row items-center justify-center bg-[#3A4D39]"
        id="contact"
      >
        Contacts
      </div>
    </div>
  );
}
