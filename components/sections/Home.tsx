"use client";
import { prefix } from "@/utils/prefix";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const images = ["gradpic.jpg", "altpic.jpg", "altpic2.jpg"];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      console.log(currentImageIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: easeInOut }}
      exit={{ opacity: 0 }}
      className="h-full snap-start bg-[#ECE3CE] md:h-screen md:w-screen"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
        viewport={{ once: true }}
        className="flex h-full w-full flex-col place-items-center p-4 md:grid md:grid-cols-2"
      >
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Blob background */}
          <div className="z absolute z-10 h-[350px] w-[350px] md:h-[750px] md:w-full">
            <Image
              src={`${prefix}/blob.svg`}
              alt="Blob Background"
              fill={true}
              className="object-cover blur-md"
            />
          </div>

          {/* Image */}
          <div className="relative top-2 z-20 h-[256px] w-[256px] md:h-[512px] md:w-[512px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute inset-0"
              >
                <Image
                  src={`${prefix}/${images[currentImageIndex]}`}
                  alt="Image Here"
                  width={500}
                  height={500}
                  className="h-auto w-auto rounded-full object-cover shadow-2xl drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex h-max flex-col items-center justify-center">
          <div className="flex h-full w-full flex-col items-center justify-evenly p-2 bg-blend-color-burn md:p-4">
            <div className="flex w-full flex-col items-center justify-evenly text-center text-2xl md:h-[500px]">
              <h1 className="text-4xl font-medium md:text-7xl">
                Calabia, Mackrislan A.
                <span className="animate-pulse font-light italic">
                  &quot;Macky&quot;
                </span>
              </h1>
              <TypeAnimation
                className="text-2xl font-light md:text-6xl"
                sequence={[
                  "I am a Web Developer.",
                  2000,
                  `I am a Certified MikroTik Network Associate.`,
                  2000,
                  "I am a Programmer.",
                  2000,
                  `I enjoy learning new things and technologies.`,
                  2000,
                ]}
                wrapper="span"
                speed={60}
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                }}
                repeat={Infinity}
              />
              <h4 className="text-xl md:text-3xl">and a</h4>
              <h2 className="text2x md:text-4xl">Computer Science Graduate</h2>
            </div>
            <div className="h-[300px]">
              <TypeAnimation
                className="text-lg md:text-xl"
                sequence={[
                  "Recent Computer Science graduated Cum Laude with a strong foundation in web development. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Next.js. Demonstrated ability to design, develop and deploy responsive and user-friendly web applications through academic projects. Passionate about learning new technologies and improving coding skills",
                ]}
                cursor={false}
                wrapper="span"
                speed={80}
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                }}
                repeat={0}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
