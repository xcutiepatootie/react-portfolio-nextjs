"use client";
import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

interface Link {
  name: string;
  link: string;
}

interface Section {
  id: string;
}

const links: Link[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const sections: Section[] = [
  { id: "home" },
  { id: "about" },
  { id: "projects" },
  { id: "contact" },
];

const Header: React.FC = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(false);
  const [open, setOpen] = useState(false);

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className={`absolute left-0 top-0 z-50 mb-96 h-16 w-full bg-transparent`}
    >
      <div className="flex h-full items-center justify-between px-6">
        <motion.span
          animate={{ color: isHomeVisible ? "#1e293b" : "#ffffff" }}
          transition={{ duration: 0.8 }}
          className="text-lg font-semibold"
        >
          <div className="h-32 w-32">Logo Here</div>
        </motion.span>
        <div className="flex space-x-4 pr-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="text-2xl font-semibold"
            >
              <motion.span
                animate={{ color: isHomeVisible ? "#1e293b" : "#ffffff" }}
                transition={{ duration: 0.8 }}
                className="hidden md:inline"
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
          <div className="relative -right-10 top-0 z-30 flex md:hidden">
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="times"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes onClick={() => setOpen(!open)} />
                </motion.div>
              ) : (
                <motion.div
                  key="bars"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBars onClick={() => setOpen(!open)} />
                </motion.div>
              )}
            </AnimatePresence>
            <ul
              className={`absolute left-0 z-40 w-full bg-white pb-12 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${open ? "top-[4.5rem]" : "top-[-490px]"}`}
            >
              <li className="my-7 flex items-center justify-center text-xl md:my-0 md:ml-8">
                <div className="group m-auto flex cursor-pointer items-center justify-start gap-4 rounded-md p-2 px-5 duration-300 hover:bg-gray-900 hover:shadow-lg">
                  <Link href={"/#home"}>
                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-white">
                      Home
                    </h3>
                  </Link>
                </div>
                <div className="group m-auto flex cursor-pointer items-center justify-start gap-4 rounded-md p-2 px-5 duration-300 hover:bg-gray-900 hover:shadow-lg">
                  <Link href={"/#about"}>
                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-white">
                      About
                    </h3>
                  </Link>
                </div>
                <div className="group m-auto flex cursor-pointer items-center justify-start gap-4 rounded-md p-2 px-5 duration-300 hover:bg-gray-900 hover:shadow-lg">
                  <Link href={"/#projects"}>
                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-white">
                      Projects
                    </h3>
                  </Link>
                </div>
                <div className="group m-auto flex cursor-pointer items-center justify-start gap-4 rounded-md p-2 px-5 duration-300 hover:bg-gray-900 hover:shadow-lg">
                  <Link href={"/#contact"}>
                    <h3 className="text-base font-semibold text-gray-800 group-hover:text-white">
                      Contact
                    </h3>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
