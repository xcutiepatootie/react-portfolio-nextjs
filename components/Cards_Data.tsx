import React, { ReactNode } from "react";
import { TypeAnimation } from "react-type-animation";

type AboutCard = {
  id: number;
  title: string;
  content: ReactNode;
};

export const about_cards: AboutCard[] = [
  { id: 0, title: "Technical Skills", content: <>Test1</> },
  { id: 1, title: "Soft Skills", content: <>Test2</> },
  { id: 2, title: "Awards", content: <>Test3</> },
  { id: 3, title: "Certificates ", content: <>Test4</> },
  { id: 4, title: "Seminars ", content: <>Test5</> },
];
