import { useState } from "react";

export default function MenuBurger({ active, onClick, className, ...props }) {
  const [isActive, setActive] = useState(false);

  const menuOpen =
    active !== undefined
      ? active
        ? "rotate-[-45deg]"
        : ""
      : isActive
      ? "rotate-[-45deg]"
      : "";

  return (
    <div
      className={className}
      onClick={(event) => {
        if (onClick) onClick(event);
        setActive(!isActive);
      }}
      {...props}
    >
      <div
        className={`relative w-[25px] h-[17px] cursor-pointer duration-500 ${
          menuOpen ? "rotate-[-45deg]" : ""
        }`}
      >
        <span
          className={`block absolute left-0 w-full h-[2px] bg-white group-hover:bg-cyan duration-500 ${
            menuOpen ? "active-first-child rotate-[-95deg]" : "top-0"
          }`}
        ></span>
        <span
          className={`top-1/2 block absolute left-0 w-full h-[2px] bg-white group-hover:bg-cyan duration-500 ${
            menuOpen ? "scale-x-[.2] opacity-0" : ""
          }`}
        ></span>
        <span
          className={`-mt-[1px] block absolute left-0 w-full h-[2px] bg-white group-hover:bg-cyan duration-500 ${
            menuOpen ? "top-1/2" : "top-full"
          }`}
        ></span>
      </div>
    </div>
  );
}
