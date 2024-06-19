"use client";

import { AnimatePresence } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  pageProps?: any;
};

export const FramerMotionProvider = ({ children, pageProps }: Props) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};
