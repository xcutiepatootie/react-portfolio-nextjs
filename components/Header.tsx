"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Link {
  name: string;
  link: string;
}

interface Section {
  id: string;
  color: string;
}

const links: Link[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const sections: Section[] = [
  { id: "home", color: "bg-slate-500" },
  { id: "about", color: "bg-green-300" },
  { id: "projects", color: "bg-gray-300" },
  { id: "contact", color: "bg-blue-300" },
];

const Header: React.FC = () => {
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

  const MotionLink = motion(Link);
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      className={`absolute left-0 top-0 z-50 mb-96 h-16 w-full bg-transparent`}
    >
      <div className="flex h-full items-center justify-between px-6">
        <motion.span
          animate={{ color: isHomeVisible ? "#1e293b" : "#ffffff" }}
          transition={{ duration: 0.8 }}
          className="text-lg font-semibold"
        >
          Logo Here
        </motion.span>
        <div className="flex space-x-4">
          {links.map((link, index) => (
            <MotionLink
              animate={{ color: isHomeVisible ? "#1e293b" : "#ffffff" }}
              transition={{ duration: 0.8 }}
              key={index}
              href={link.link}
              className="text-lg font-semibold"
            >
              <span className="hidden md:inline">{link.name}</span>
            </MotionLink>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
