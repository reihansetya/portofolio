import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
import { ActiveNavContext } from "../context/ActiveNavContext";

export const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Portofolio, Next Js, React" />
        <meta name="author" content="Reihan Setya Abida" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Website Portofolio Reihan Setya Abida"
        />
        <title>Portofolio Reihan</title>
      </head>
      <body>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
};
