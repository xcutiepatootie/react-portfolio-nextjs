import React, { useEffect, useRef, useState } from "react";

const Footer: React.FC = () => {
  /*  const [isHomeVisible, setIsHomeVisible] = useState(false);
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
  }, []); */

  return (
    <div className="absolute bottom-0 left-0 z-50 mb-4 flex  w-full items-center justify-center bg-transparent">
      <p>Footer</p>
    </div>
  );
};

export default Footer;
