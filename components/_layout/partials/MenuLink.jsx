import Link from "next/link";
import { useEffect, useState } from "react";

export const MenuLink = ({
  link,
  active,
  setActiveMenu,
  isParentActive,
  ...props
}) => {
  const [isActive, setActive] = useState(false);
  useEffect(() => {
    if (!active) {
      setActive(false);
    }
  }, [active, isParentActive]);

  return (
    <li
      className={`relative bg-blue-300 flex border-b-[2px] hover:border-black ${
        isParentActive ? "bg-yellow-400" : isActive ? "bg-green-400" : ""
      }`}
      onClick={(e) => {
        setActive(!isActive);
        setActiveMenu(link?.id);
        // if (!isParentActive) {
        //   setActiveMenu(null);
        //   setActive(false);
        // } else {
        //   setActiveMenu(link?.id);
        //   setActive(true);
        // }
        e.stopPropagation();
      }}
    >
      <Link
        href={link?.url || ""}
        className="px-[20px] border py-[20px]"
        {...props}
      >
        {link?.label}
      </Link>

      {isActive &&
        link?.children?.length > 0 &&
        link.children.map((item, idx) => (
          // <>{item?.label}</>
          <MenuLink
            key={item?.id}
            link={item}
            // active={activeMenu === link?.id}
            setActiveMenu={setActiveMenu}
            isParentActive={isActive}
          />
        ))}

      {/* {children} */}
    </li>
  );
};
