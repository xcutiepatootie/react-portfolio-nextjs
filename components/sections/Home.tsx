import React from "react";
import { easeInOut, motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: easeInOut }}
      className="flex h-screen w-screen snap-start flex-row items-center justify-center scroll-smooth bg-[#ECE3CE]"
      id="home"
    >
      <div className="grid w-full grid-cols-2 place-items-center p-4">
        <div className="flex items-center justify-center">Image Here</div>
        <div className="flex flex-col items-center justify-center">
          <h1>Calabia, Mackrislan A. "Macky"</h1>
          <h2>Web Developer</h2>
          <h4>and</h4>
          <h2>Computer Science Graduate</h2>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
