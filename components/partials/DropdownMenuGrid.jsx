import Link from "next/link";
import React from "react";
import MenuIcon from "../svg/MenuIcon";
import TitleLine from "./TitleLine";

const DropdownMenuGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-[50px]">
      {submenus.map((menu, idx) => (
        <Link
          href="#"
          key={idx}
          className="group hover:text-cyan duration-primary transition-all flex gap-[20px]"
        >
          <div>
            <MenuIcon />
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="font-bold">{menu?.label}</p>
            <TitleLine className="group-hover:bg-line-cyan" reverse />
            <p className="line-clamp-2">{menu?.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenuGrid;
