import Link from "next/link";
import MenuIcon from "../svg/MenuIcon";
import TitleLine from "./TitleLine";

const DropdownFlex = () => {
  const submenus = [
    {
      label: "Central Platform",
      description: "Short description goes here. Max 2 lines only.",
    },
    {
      label: "Broker Platform",
      description: "Short description goes here. Max 2 lines only.",
    },
    {
      label: "Customer Platform",
      description: "Short description goes here. Max 2 lines only.",
    },
    {
      label: "Insurer Platform",
      description: "Short description goes here. Max 2 lines only.",
    },
    {
      label: "Claims Platform",
      description: "Short description goes here. Max 2 lines only.",
    },
  ];

  return (
    <div className="flex flex-wrap xl:flex-nowrap justify-center gap-[40px]">
      {submenus.map((menu, idx) => (
        <Link
          href="#"
          key={idx}
          className="group hover:text-cyan duration-primary transition-all flex flex-col justify-center items-center gap-[20px]"
        >
          <MenuIcon className="h-[150px] w-[200px]" />
          <div className="flex flex-col justify-center items-center gap-[10px] text-center">
            <p className="font-bold">{menu?.label}</p>
            <div className="flex w-full">
              <TitleLine className="group-hover:bg-line-cyan" />
              <TitleLine className="group-hover:bg-line-cyan" reverse />
            </div>
            <p className="line-clamp-2">{menu?.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DropdownFlex;
