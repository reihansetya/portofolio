import React from "react";
import Link from "next/link";

const ButtonClick = ({ text, href, className, children, ...props }) => {
  return (
    <Link href={href} className={`btn ${className}`} {...props}>
      {text || children}
    </Link>
  );
};

export default ButtonClick;
