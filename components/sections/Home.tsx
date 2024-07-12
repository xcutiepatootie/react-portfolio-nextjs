"use client";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const images = ["/gradpic.jpg", "/altpic.jpg", "/altpic2.jpg"];

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
      className="flex h-screen w-screen snap-start flex-row items-center justify-center scroll-smooth bg-[#ECE3CE]"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
        viewport={{ once: true }}
        className="grid w-full grid-cols-2 place-items-center p-4"
      >
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Blob background */}
          <div className="absolute inset-0 z-10 -mt-16 h-[700px] w-full">
            <Image
              src="/blob.svg"
              alt="Blob Background"
              layout="fill"
              className="object-cover"
            />
          </div>

          {/* Image */}
          <div className="relative z-20 h-[512px] w-[512px]">
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
                  src={images[currentImageIndex]}
                  alt="Image Here"
                  width={500}
                  height={500}
                  className="rounded-full object-cover shadow-2xl drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1>Calabia, Mackrislan A. &quot;Macky&quot;</h1>
          <h1 className="text-2xl">
            I{" "}
            <TypeAnimation
              sequence={[
                "am a Web Developer.",
                1000,
                "am a Certified MikroTik Network Associate.",
                1000,
                "am a Programmer.",
                1000,
                "enjoy learning new things and technologies.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              /*  style={{ fontSize: "2em", display: "inline-block" }} */
              repeat={Infinity}
            />
          </h1>

          <h4>and a</h4>
          <h2>Computer Science Graduate</h2>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
