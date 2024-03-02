import React from "react";
import { ButtonClick } from "./ButtonClick";
import { ImageModal } from "./ImageModal";

export const BrowserMockup = () => {
  const dataProject = [
    {
      id: "my_modal_1",
      imgUrl: "/images/project-bucket.png",
      url: "https://bucketbylisa.vercel.app/",
      text: {
        year: "2024",
        title: "Bucket by Lisa",
        description: "Bucket List App",
        category: "Web Catalogue",
      },
    },
    {
      id: "my_modal_2",
      imgUrl: "/images/project-jmtm.png",
      url: "https://eproc.jmtm.co.id/",
      text: {
        year: "2024",
        title: "EProcurement JMTM",
        description: "Landing Page for JMTM",
        category: "Landing Page",
      },
    },
  ];

  const handleOpenModal = (id) => {
    const modal = document.getElementById(id).showModal();
  };

  return (
    <div className="container mt-10 flex md:flex-row flex-col justify-around gap-10">
      {dataProject.map((item) => (
        <>
          <ImageModal
            description={item.text.description}
            idImg={item.id}
            imgUrl={item.imgUrl}
          />
          <div className="mockup-browser border border-base-300 shadow shadow-secondary">
            <div className="mockup-browser-toolbar">
              <a
                href={item.url}
                className="input text-blue-500"
                target="_blank"
              >
                {item.url}
              </a>
            </div>
            <div className="flex flex-col justify-center px-4 py-3 bg-base-200">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenModal(item.id);
                }}
                className="contrast-25 hover:contrast-50 duration-100"
              >
                <img src={item.imgUrl} alt="" />
              </a>
              <div className="description pt-3 flex flex-col gap-3">
                <p className="text-slate-300 italic text-sm">
                  {item.text.year}
                </p>
                <p>{item.text.title}</p>
                <p>{item.text.category}</p>
              </div>
              <ButtonClick
                href={"#"}
                className={"w-24 hover:bg-base-100 hover:text-black"}
              >
                Repo
              </ButtonClick>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
