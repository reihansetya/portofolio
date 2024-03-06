import Image from "next/image";
import Link from "next/link";
import { ButtonClick } from "./ButtonClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";

export const Hero = () => {
  const content = {
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 1.4 },
    },
  };
  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 3.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const products = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={content}
      className="space-y-12"
    >
      <div className="hero md:pt-5 md:mt-5 mt-3 md:mb-40 mb-20">
        <Image
          src={"/images/hero-layer.svg"}
          className="md:block hidden absolute top-0 right-0 z-55 w-10/12"
          width={500}
          height={500}
        />
        <Image
          src={"/images/nav-layer.svg"}
          className="md:hidden blcok absolute top-0 right-0 z-55 w-screen"
          width={500}
          height={500}
        />
        <motion.div
          variants={title}
          className="hero-content flex-col lg:flex-row-reverse"
        >
          <div>
            <Image
              className="max-w-sm rounded-xl shadow-2xl glass-morph"
              src={"/images/hannn2.jpg"}
              width={275}
              height={275}
            />
          </div>
          <div variants={title} className="md:w-3/5">
            <h1 className="md:text-5xl font-bold">Reihan Setya Abida</h1>
            <h3 className="pt-3 font-bold ">Front End Developer</h3>
            <p className="py-6">
              Hi! it's Reihan, I graduated from Mercu Buana University majoring
              in informatics engineering, I am eager to embark on my journey in
              the tech industry.
            </p>
            <div className="md:text-left text-center">
              <ButtonClick
                className={"btn-secondary text-white"}
                href={`https://drive.google.com/file/d/1ehgOkrscjOU0un6550__ZAK17wWOCEre/view?usp=sharing`}
                target={"_blank"}
              >
                <FontAwesomeIcon icon="fa-solid fa-download" />
                Download CV
              </ButtonClick>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
