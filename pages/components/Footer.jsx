import React from "react";
import { BoxSosmed } from "./BoxSosmed";

const Footer = () => {
  const dataSosmed = [
    {
      icon: "fa-brands fa-instagram",
      background: "bg-[#a21caf]",
      text: "Instagram",
      href: "https://www.instagram.com/reihan_setya/",
    },
    {
      icon: "fa-brands fa-linkedin",
      background: "bg-[#0077b5]",
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/reihan-setya-abida-31515b1b9/",
    },
    {
      icon: "fa-brands fa-github",
      background: "bg-gradient-to-r",
      text: "Github",
      href: "https://github.com/reihansetya?tab=repositories",
    },
    {
      icon: "fa-solid fa-envelope",
      background: "bg-[#C71610]",
      text: "Gmail",
      href: "mailto:reihan.setya048@gmail.com",
    },
  ];
  return (
    <footer className="footer footer-center p-4 text-base-content">
      <div className="flex flex-col container w-full border-opacity-50">
        <div className="divider"></div>
        <section className="flex justify-center items-center gap-7">
          {dataSosmed.map((sosmed, index) => (
            <BoxSosmed key={index} href={sosmed.href} {...sosmed}>
              {sosmed.text}
            </BoxSosmed>
          ))}
        </section>
        <aside>
          <p>{`Copyright © 2024 - All right reserved by Reihan Setya Abida`}</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
