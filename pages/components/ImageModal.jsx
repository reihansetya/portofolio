import Image from "next/image";
import React from "react";

const ImageModal = ({ idImg, imgUrl, description }) => {
  return (
    <dialog id={idImg} className="modal">
      <div className="modal-box md:w-3/5 w-11/12 max-w-5xl ">
        <Image width={1000} height={1000} src={imgUrl} alt={idImg} />
        <p className="mt-3">{description}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ImageModal;
