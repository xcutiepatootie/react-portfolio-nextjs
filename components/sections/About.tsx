"use client";

import { about_cards } from "../Cards_Data";
import { BackgroundGradient } from "../ui/background-gradient";
import { Vortex } from "../ui/vortex";

const About = () => {
  return (
    <Vortex
      backgroundColor="transparent"
      baseHue={50}
      particleCount={100}
      rangeY={900}
      className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
    >
      <div className="flex flex-row space-x-4">
        {about_cards.map((card) => (
          <BackgroundGradient
            key={card.id}
            className="max-w-sm rounded-[22px] bg-slate-300 p-4 dark:bg-zinc-900 sm:p-10"
          >
            <div className="">
              <h2>{card.title}</h2>
              {card.content}
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </Vortex>
  );
};

export default About;
