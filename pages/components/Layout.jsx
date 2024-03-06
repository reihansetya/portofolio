import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Portofolio, Next Js, React" />
        <meta name="author" content="Reihan Setya Abida" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Website Portofolio Reihan Setya Abida"
        />
        <title>Portofolio Reihan</title>
      </Head>
      <body>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
