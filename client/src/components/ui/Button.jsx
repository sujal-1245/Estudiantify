import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg font-semibold shadow-md transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
