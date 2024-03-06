import BrowserMockup from "./components/BrowserMockup";
import InitialTransition from "./components/InitialTransition";
import Layout from "./components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Project() {
  const dataProject = [
    {
      id: "my_modal_1",
      imgUrl: "/images/project-bucket.png",
      repo: "https://github.com/reihansetya/bouquetCatalog",
      url: "https://bucketbylisa.vercel.app/",
      text: {
        year: "2024",
        title: "Bucket by Lisa",
        description:
          "Katalog Bucket merupakan aplikasi web yang dibangun menggunakan teknologi MERN (MongoDB, Express.js, React, Node.js). Bertujuan untuk memajukan UMKM agar customer dapat mencari dan membeli produk-produk yang sesuai.",
        category: "Web Catalogue",
      },
    },
    {
      id: "my_modal_2",
      imgUrl: "/images/project-jmtm.png",
      repo: undefined,
      url: "https://eproc.jmtm.co.id/",
      text: {
        year: "2024",
        title: "EProcurement JMTM",
        description:
          "Menggunakan stack Codeigniter3 sebagai base, project ini untuk me revamp tampilan dari landing page eprocurement jmtm",
        category: "Landing Page",
      },
    },
    {
      id: "my_modal_3",
      imgUrl: "/images/project-generator.png",
      repo: "https://github.com/reihansetya/Generator",
      url: "https://reihansetya.github.io/Generator",
      text: {
        year: "2021",
        title: "Generator",
        description:
          "Menggunakan HTML, CSS, Javascript Website ini digunakan untuk membuat generate teks yang dapat di copy kepada dosen dan terdapat beberapa fitur hiburan lainnya.",
        category: "Website for text Generator",
      },
    },
    {
      id: "my_modal_4",
      imgUrl: "/images/project-portofolio-old.png",
      repo: "https://github.com/reihansetya/portfolio",
      url: "https://reihansetya.github.io/portfolio/",
      text: {
        year: "2021",
        title: "Portofolio (old)",
        description:
          "Merupakan portofolio versi lama dari saya, menggunakan bootstrap 5",
        category: "Website Portofolio",
      },
    },
  ];

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

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={content}
      // className="relative z-10"
    >
      <InitialTransition initText={"Reihan Project"} />
      <Layout>
        <Image
          src={"/images/hero-layer.svg"}
          alt="hero layer"
          className="md:block hidden absolute top-0 right-0 z-5 w-10/12"
          width={500}
          height={500}
        />
        <Image
          src={"/images/nav-project-layer.svg"}
          alt="nav project layer"
          className="md:hidden block absolute top-0 right-0 z-5 w-screen"
          width={500}
          height={500}
        />
        <motion.div variants={title} className="relative mt-5 z-20">
          <h1 className="container pt-10 text-center">Projects</h1>
          <h4 className="text-center pt-3">
            Here are some of the projects I've worked on
          </h4>
          <BrowserMockup dataProject={dataProject} />
        </motion.div>
      </Layout>
    </motion.div>
  );
}
