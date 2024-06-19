"use client";

type Props = {
  children?: React.ReactNode;
  pageProps?: any;
};

export const FramerMotionProvider = ({ children, pageProps }: Props) => {
  return <>{children}</>;
};
