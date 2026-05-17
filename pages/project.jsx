import BrowserMockup from "./components/BrowserMockup";
import InitialTransition from "./components/InitialTransition";
import Layout from "./components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Project() {
  const [activeTab, setActiveTab] = useState("Web Development");

  const dataProject = [
    { 
      id: "my_modal_revenue",
      imgUrl: "/images/rei-revenue-expense.png",
      repo: undefined,
      url: "https://rei-revenue-expense.vercel.app",
      text: {
        year: "2026",
        title: "Revenue & Expense Tracker",
        description:
          "Aplikasi pelacak keuangan pribadi dengan dukungan multi-wallet (dompet digital, tunai, investasi), transfer antar wallet, dan fitur sembunyikan saldo dengan mode terang/gelap. Dilengkapi dashboard interaktif dengan grafik pengeluaran per kategori, transaksi bulanan dan harian. Terintegrasi dengan bot Telegram untuk akses jarak jauh — pengguna dapat melihat ringkasan bulanan dan mencatat pemasukan/pengeluaran langsung melalui Telegram.",
        category: "Aplikasi Keuangan Pribadi",
      },
    },
    {
      id: "my_modal_1",
      imgUrl: "/images/bucketbylisa-project.png",
      repo: "https://github.com/reihansetya/bucket-by-lisa-next",
      url: "https://bucketbylisa.vercel.app/",
      type: "Web Development",
      text: {
        year: "2026",
        title: "Bucket by Lisa (Revamp)",
        description:
          "Katalog Bucket By Lisa Revamp merupakan aplikasi web yang dibangun menggunakan teknologi Next JS dan Supabase. dengan Front End Yang lebih menarik dan User Friendly. Bertujuan untuk memajukan UMKM agar customer dapat mencari dan membeli produk-produk yang sesuai. Serta Admin Dashboard untuk memudahkan pengelolaan produk.",
        category: "Web Catalogue",
      },
    },
    {
      id: "my_modal_old_bucket",
      imgUrl: "/images/project-bucket.png",
      repo: "https://github.com/reihansetya/bouquetCatalog",
      url: "https://bucketbylisa2.vercel.app//",
      type: "Web Development",
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
      type: "Web Development",
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
      type: "Web Development",
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
      type: "Web Development",
      text: {
        year: "2021",
        title: "Portofolio (old)",
        description:
          "Merupakan portofolio versi lama dari saya, menggunakan bootstrap 5",
        category: "Website Portofolio",
      },
    },
    {
      id: "modal_auto2000",
      imgUrl: "/images/astra.png",
      repo: undefined,
      url: "Auto2000 Astra",
      type: "Salesforce",
      text: {
        title: "Auto2000 Astra",
        description:
          "Membangun otomatisasi omni-channel (WhatsApp, SMS, Email) menggunakan Salesforce Marketing Cloud, lengkap dengan sistem segmentasi customer mendalam dan integrasi arsitektur data CRM yang kompleks.",
        category: "Salesforce - Marketing Cloud",
      },
    },
    {
      id: "modal_mmksi",
      imgUrl: "/images/mmksi.png",
      repo: undefined,
      url: "Mitsubishi Motors Krama Yudha Indonesia",
      type: "Salesforce",
      text: {
        title: "MMKSI (Mitsubishi)",
        description:
          "Mengimplementasikan integrasi ekosistem Salesforce dengan Consent Management Platform (CMP) untuk mematuhi regulasi PDP (Perlindungan Data Pribadi) serta membangun Customer Ticketing di Service Cloud.",
        category: "Salesforce - Service Cloud",
      },
    },
    {
      id: "modal_telin",
      imgUrl: "/images/telin.png",
      repo: undefined,
      url: "Telekomunikasi Indonesia Internasional",
      type: "Salesforce",
      text: {
        title: "Telin",
        description:
          "Mengimplementasikan proyek B2B Lead-to-Order skala besar menggunakan Salesforce Communication Cloud. Mencakup manajemen Site Location dan alur CPQ dinamis (Quotes) dengan integrasi mulus ke Enterprise System eksternal.",
        category: "Salesforce - Communication Cloud",
      },
    },
  ];

  const filteredProjects = dataProject.filter(
    (project) => project.type === activeTab,
  );

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

          {/* Tab Filter */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab("Web Development")}
              className={`btn btn-sm md:btn-md ${
                activeTab === "Web Development"
                  ? "btn-secondary"
                  : "btn-outline btn-secondary"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveTab("Salesforce")}
              className={`btn btn-sm md:btn-md ${
                activeTab === "Salesforce"
                  ? "btn-secondary"
                  : "btn-outline btn-secondary"
              }`}
            >
              Salesforce
            </button>
          </div>

          <BrowserMockup dataProject={filteredProjects} />
        </motion.div>
      </Layout>
    </motion.div>
  );
}
