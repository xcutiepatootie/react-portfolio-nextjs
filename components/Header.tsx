import React from "react";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
  {
    name: "Projects",
    link: "/",
  },
  {
    name: "Contact",
    link: "/",
  },
];

const Header = () => {
  return (
    <div className="sticky top-0 left-0 z-50 h-24 bg-inherit">
      <div className="flex justify-between">
        <span>Logo Here</span>
        {links.map((link, index) => {
          return <h1 key={index}>{link.name}</h1>;
        })}
      </div>
    </div>
  );
};

export default Header;
