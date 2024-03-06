import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoxSosmed = ({ href, background, children, ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={`group flex justify-center p-2 rounded-md drop-shadow-xl ${background} from-gray-800 to-black text-white font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]`}
    >
      <FontAwesomeIcon {...props} />

      <span className="pointer-events-none absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
        {children}
      </span>
    </a>
  );
};

export default BoxSosmed;
