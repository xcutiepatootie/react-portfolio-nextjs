import React from "react";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function page() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
      <div className="flex h-screen w-screen snap-start flex-col items-center justify-center bg-[#739072]">
        <Home />
      </div>

      <div
        className="flex h-screen w-screen snap-start flex-col items-center justify-center bg-[#739072]"
        id="about"
      >
        <About />
      </div>
      <div
        className="flex h-screen w-screen snap-start flex-col justify-start bg-[#4F6F52] py-20 md:items-center md:justify-center"
        id="projects"
      >
        <Projects />
      </div>
      <div
        className="flex h-screen w-screen snap-start flex-col items-center justify-center bg-[#3A4D39] p-12"
        id="contact"
      >
        <Contact />
      </div>
    </div>
  );
}
