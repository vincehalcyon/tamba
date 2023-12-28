import React from "react";

const TitleLine = ({ reverse, direction, className, ...props }) => {
  return (
    <div
      className={`bg-line-white duration-primary transition-all w-full h-[2px] ${
        reverse || direction === "left" ? "rotate-180" : ""
      } ${className}`}
      {...props}
    />
  );
};

export default TitleLine;
