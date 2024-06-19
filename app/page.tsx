"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Home from "@/components/sections/Home";

export default function page() {
  return (
    <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
      <Home />
      <div
        className="flex h-screen w-screen snap-start flex-row items-center justify-center bg-[#739072]"
        id="about"
      >
        About Me
      </div>
      <div
        className="flex h-screen w-screen snap-start flex-row items-center justify-center bg-[#4F6F52]"
        id="projects"
      >
        Projects
      </div>
      <div
        className="flex h-screen w-screen snap-start flex-row items-center justify-center bg-[#3A4D39]"
        id="contact"
      >
        Contact
      </div>
    </div>
  );
}

/* <div
        className="flex h-screen w-full snap-start items-center justify-center bg-slate-500"
        id="home"
      >
        
      </div>
      <div
        className="flex h-screen w-full snap-start items-center justify-center bg-green-300"
        id="about"
      >
        About Me
      </div>
      <div className="flex h-screen items-center justify-center" id="projects">
       
      </div>
      <div className="flex h-screen items-center justify-center">Contact</div> */
