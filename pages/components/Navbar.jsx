import Link from "next/link";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ActiveNavContext } from "../context/ActiveNavContext";

const Navbar = () => {
  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);
  const { activeIndex, setActiveIndex } = useContext(ActiveNavContext);

  const dataNav = [
    {
      name: "Reihan",
      href: "/#",
    },
    {
      name: "Skill",
      href: "/#skills",
    },
    {
      name: "Project",
      href: "/project",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar bg-base-100 text-neutral-content">
      <div className="container md:text-lg fixed top-0 z-50">
        <div
          className={`${
            showBackground ? "glass-morph" : ""
          } rounded-3xl mt-5 flex justify-center mx-auto md:gap-12 px-2 text-base-content`}
        >
          {dataNav.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              onClick={() => setActiveIndex(item.name)}
              className={`btn btn-ghost ${
                activeIndex === item.name
                  ? "border-b-secondary border-4 pb-1 tansition ease-in-out duration-500"
                  : ""
              }`}
            >
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
