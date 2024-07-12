import React from "react";
import { easeInOut, motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: easeInOut }}
      exit={{ opacity: 0 }}
      className="flex h-screen w-screen snap-start flex-row items-center justify-center scroll-smooth bg-[#ECE3CE]"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 1 } }}
        className="grid w-full grid-cols-2 place-items-center p-4"
      >
        <div className="flex items-center justify-center">Image Here</div>
        <div className="flex flex-col items-center justify-center">
          <h1>Calabia, Mackrislan A. &quot;Macky&quot;</h1>
          <h2>Web Developer</h2>
          <h4>and</h4>
          <h2>Computer Science Graduate</h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
