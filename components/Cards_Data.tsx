import React, { ReactNode } from "react";
import { TypeAnimation } from "react-type-animation";

type HomeCard = {
  id: number;
  content: ReactNode;
};

export const home_cards: HomeCard[] = [
  {
    id: 0,
    content: (
      <>
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-full w-96 items-center justify-center p-4 bg-blend-color-burn">
            <div className="flex flex-col items-center justify-center">
              <h1>Calabia, Mackrislan A. &quot;Macky&quot;</h1>
              <TypeAnimation
                className="text-center text-2xl"
                sequence={[
                  "I am a Web Developer.",
                  1000,
                  `I am a Certified MikroTik Network Associate.`,
                  1000,
                  "I am a Programmer.",
                  1000,
                  `I enjoy learning new things and technologies.`,
                  1000,
                ]}
                wrapper="span"
                speed={80}
                deletionSpeed={50}
                style={{
                  whiteSpace: "pre-line",
                }}
                repeat={Infinity}
              />
              <h4>and a</h4>
              <h2>Computer Science Graduate</h2>
            </div>
          </div>
        </div>
      </>
    ),
  },
  { id: 1, content: "E" },
  { id: 2, content: "S" },
  { id: 3, content: "T" },
];

{
  /* */
}
