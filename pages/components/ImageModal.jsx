import React from "react";
import { motion } from "framer-motion";

export const ImageModal = ({ idImg, imgUrl, description }) => {
  return (
    <dialog id={idImg} className="modal">
      <div className="modal-box w-11/12 max-w-5xl ">
        <img src={imgUrl} alt={idImg} />
        <p className="mt-4">{description}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
