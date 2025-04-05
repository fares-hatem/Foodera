import React from "react";
import "./CustomButton.css";

const CustomButton = ({ className, text, link, type, children }) => {
  return (
    <button  href={link} className={`custom-btn ${className}`} type={type}>
      {text} {children}
    </button>
  );
};

export default CustomButton;

