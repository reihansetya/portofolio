import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  );
};
