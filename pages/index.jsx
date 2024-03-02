import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";

import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
    </Layout>
  );
}
