import React from "react";
import Link from "next/link";

export const ButtonClick = ({ text, href, className, children, ...props }) => {
  return (
    <Link href={href} className={`btn ${className}`} {...props}>
      {text || children}
    </Link>
  );
};
