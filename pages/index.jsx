import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { InitialTransition } from "./components/InitialTransition";
import { Layout } from "./components/Layout";
import { Skills } from "./components/Skills";
import { motion } from "framer-motion";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <motion.div>
      <InitialTransition initText={"Reihan Portofolio"} />
      <Layout>
        <Hero />
        <Experience
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        />
        <Skills
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
        />
      </Layout>
    </motion.div>
  );
}
