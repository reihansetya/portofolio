import React from "react";
import { ButtonClick } from "./ButtonClick";
import { ImageModal } from "./ImageModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

export const BrowserMockup = ({ dataProject }) => {
  const content = {
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 1.4 },
    },
  };

  const project = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };
  const handleOpenModal = (id) => {
    const modal = document.getElementById(id).showModal();
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={content}
      className="container mt-10 flex md:flex-row flex-col justify-around gap-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {dataProject.map((item) => (
          <motion.div key={item.id} variants={project}>
            <ImageModal
              description={item.text.description}
              idImg={item.id}
              imgUrl={item.imgUrl}
            />
            <div className="mockup-browser border bg-neutral border-base-300 shadow shadow-gray-200">
              <div className="mockup-browser-toolbar">
                <a
                  href={item.url}
                  className="input text-blue-500"
                  target="_blank"
                >
                  {item.url}
                </a>
              </div>
              <div className="flex flex-col justify-center px-4 py-3 bg-base-300 ">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenModal(item.id);
                  }}
                  className="hover:contrast-50 duration-100"
                >
                  <Image width={1000} height={1000} src={item.imgUrl} alt="" />
                </a>
                <div className="description py-3 flex flex-row justify-between gap-3">
                  <div>
                    <p className="text-slate-300 italic text-sm">
                      {item.text.year}
                    </p>
                    <p>{item.text.title}</p>
                    <p>{item.text.category}</p>
                  </div>
                  <div>
                    {item.repo && (
                      <ButtonClick
                        href={item.repo}
                        target={"_blank"}
                        className={
                          "btn btn-ghost mt-4 w-32 bg-neutral text-base-content font-semibold text-sm hover:opacity-0.1 hover:transition-all hover:duration-200"
                        }
                      >
                        <FontAwesomeIcon icon={"fa-brands fa-github"} />
                        Repo
                      </ButtonClick>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
