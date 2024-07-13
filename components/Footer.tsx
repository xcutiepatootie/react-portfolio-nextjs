"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Section {
  id: string;
}

const sections: Section[] = [
  { id: "home" },
  { id: "about" },
  { id: "projects" },
  { id: "contact" },
];

const Footer: React.FC = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const observers = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer: IntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "home") {
            setIsHomeVisible(entry.isIntersecting);
          }
        });
      },
      options,
    );
    observers.current.push(observer);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observers.current.forEach((observer) => observer.observe(element));
      }
    });

    return () => {
      observers.current.forEach((observer) => observer.disconnect());
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="absolute bottom-0 left-0 z-50 mb-4 flex w-full items-center justify-center bg-transparent"
    >
      <motion.p
        animate={{ color: isHomeVisible ? "#1e293b" : "#ffffff" }}
        transition={{ duration: 0.8 }}
      >
        © 2024 Mcee - Portfolio. All rights reserved.
      </motion.p>
    </motion.div>
  );
};

export default Footer;
