"use client";

import { TypeAnimation } from "react-type-animation";
import { about_cards } from "../Cards_Data";
import { BackgroundGradient } from "../ui/background-gradient";
import { Vortex } from "../ui/vortex";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sequenceParagpraph =
  "Hi there! While you are taking time to view my credentials. Once again, I am Macky. Here are my skills, awards, and certifications I earned during my school years." +
  "\n\nI have always been fascinated by how computers operate. It is inevitable that technology will evolve quickly, and this means that I will need to pick up new skills day by day." +
  "\n\nI am constantly working on upgrading my skills especially as a Web Developer. Learning new frameworks, libraries, and especially the building blocks of a web development. I also do standalone applications and native application for windows aside from web development.";

const About = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      setAnimationStarted(true);
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
      viewport={{ once: true }}
    >
      <Vortex
        backgroundColor="transparent"
        baseHue={50}
        particleCount={100}
        rangeY={900}
        className="px-2 py-4 md:px-10"
      >
        <div className="grid grid-cols-3">
          <div ref={ref} className="p-6 text-justify">
            {animationStarted && (
              <div>
                <div>
                  <TypeAnimation
                    className="text-2xl font-light text-zinc-50"
                    sequence={[sequenceParagpraph]}
                    cursor={false}
                    wrapper="span"
                    speed={90}
                    style={{
                      whiteSpace: "pre-line",
                      display: "block",
                    }}
                    repeat={0}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="col-span-2 flex flex-wrap items-center justify-center gap-4">
            <BackgroundGradient
              animate={false}
              className="h-[700px] w-full overflow-scroll rounded-[22px] bg-slate-100 p-4 dark:bg-zinc-900 sm:p-10"
            >
              {about_cards.map((card) => (
                <div key={card.id}>
                  <div className="grid grid-cols-5 place-content-center">
                    <h1 className="text-3xl">{card.title}</h1>
                    <div className="col-span-4">{card.content}</div>
                  </div>
                  <hr className="my-4 border-t-2 border-slate-500" />
                </div>
              ))}
            </BackgroundGradient>
          </div>
        </div>
      </Vortex>
    </motion.div>
  );
};

export default About;
