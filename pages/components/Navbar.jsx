import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

export const Navbar = () => {
  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);
  const dataNav = [
    {
      name: "Reihan",
      href: "/",
    },
    {
      name: "Skill",
      href: "/",
    },
    {
      name: "Project",
      href: "/project",
    },
    {
      name: "Contact",
      href: "/",
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
            <Link href={item.href} key={item.name} className="btn btn-ghost">
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
