import Image from "next/image";
import React from "react";

const ImageModal = ({ idImg, imgUrl, description, type }) => {
  return (
    <dialog id={idImg} className="modal">
      <div className="modal-box md:w-3/5 w-11/12 max-w-5xl flex flex-col items-center">
        <Image
          width={1000}
          height={1000}
          src={imgUrl}
          alt={idImg}
          className={
            type === "Salesforce"
              ? "w-1/2 mx-auto object-contain max-h-96 bg-white rounded-xl p-5"
              : "w-full h-auto"
          }
        />
        <p className="mt-5 text-center w-full">{description}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ImageModal;
