"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    link?: string;
    githubLink?: string[];
    highlights?: string[];
    technologies?: string[];
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const MotionLink = motion(Link);

  return (
    <motion.div
      className="relative mt-2 flex h-auto max-h-[80vh] w-full items-start justify-center space-x-4 overflow-y-auto rounded-md p-4 lg:space-x-10 lg:p-6"
      ref={ref}
    >
      <div className="relative flex w-full max-w-[90vw] items-start px-4 lg:w-[45rem]">
        <div className="w-full">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-8 space-y-6 lg:space-y-10"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-3xl font-bold italic text-slate-100 underline lg:text-5xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-6 text-justify text-lg text-slate-50 lg:mt-12 lg:text-2xl"
              >
                {item.description}
              </motion.p>
              {item.highlights && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="flex flex-col"
                >
                  <h2 className="text-2xl lg:text-3xl">Project Highlights</h2>
                  {item.highlights.map((highlight, index) => (
                    <li
                      className="text-lg lg:text-xl"
                      key={`${highlight}${index}`}
                    >
                      {highlight}
                    </li>
                  ))}
                </motion.div>
              )}
              {item.technologies && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="flex flex-col"
                >
                  <h2 className="text-2xl lg:text-3xl">Technologies Used</h2>
                  {item.technologies.map((tech, index) => (
                    <li className="text-lg lg:text-xl" key={`${tech}${index}`}>
                      {tech}
                    </li>
                  ))}
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="flex flex-col"
              >
                <div className="mt-2">
                  {item.link !== "Currently Down" &&
                  item.link !== "Not Available" &&
                  item.link ? (
                    <>
                      <MotionLink href={item.link} target="_blank">
                        <span className="flex cursor-pointer items-center space-x-2 space-y-2 text-lg">
                          <FaLink className="mr-2" />
                          {item.link}
                        </span>
                      </MotionLink>
                    </>
                  ) : (
                    <div>
                      <span className="flex cursor-pointer items-center space-x-2 space-y-2 text-lg">
                        <FaLink className="mr-2" />
                        {item.link
                          ? item.link
                          : "Currently Down / Not Available"}
                      </span>
                    </div>
                  )}

                  {item.githubLink &&
                    item.githubLink.map((link, index) => (
                      <MotionLink
                        href={link}
                        target="_blank"
                        key={`${link}${index}`}
                      >
                        <span className="flex cursor-pointer items-center space-x-2 space-y-2 text-lg">
                          <FaGithub className="mr-2" />
                          {link}
                        </span>
                      </MotionLink>
                    ))}
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div
        className={cn(
          "sticky top-10 hidden h-[25rem] w-fit overflow-hidden rounded-md border border-black bg-white shadow-xl drop-shadow-xl lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
