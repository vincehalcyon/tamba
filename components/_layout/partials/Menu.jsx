import { useResize } from "@/components/hooks/useResize";
import MenuBurger from "@/components/partials/MenuBurger";
import Arrow from "@/components/svg/Arrow";
import DropdownArrow from "@/components/svg/DropdownArrow";
import MainLogo from "@/components/svg/MainLogo";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Menu() {
  const { menuNodes } = globalData;

  const router = useRouter();

  const { viewportWidth } = useResize();
  const [activeMenu, setActiveMenu] = useState(null);
  const [showMobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setMobileMenu(false);
    setActiveMenu(null);
  }, [router.asPath]);

  useEffect(() => {
    if (showMobileMenu && viewportWidth < 1024) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMobileMenu, viewportWidth]);

  useEffect(() => {
    setMobileMenu(false);
  }, [viewportWidth]);

  return (
    <header
      id="header"
      className="font-secondary brand-background fixed w-full text-white z-[999]"
    >
      <div className=" top-0 w-full container-primary flex justify-between py-[20px] px-[20px] min-h-[107px]">
        <div className="flex justify-center items-center">
          <MainLogo />
        </div>

        <nav className="hidden lg:flex">
          {menuNodes.map((link, idx) => {
            return (
              <MenuLink
                key={link?.id}
                link={link}
                active={activeMenu === link?.id}
                setActiveMenu={setActiveMenu}
                isParentActive={activeMenu === link?.id}
              />
            );
          })}
        </nav>

        <div className="items-center hidden lg:flex">
          <Link
            href="/contact"
            target={"_self"}
            className="button flex items-center gap-[10px] px-[25px] py-[12px] whitespace-nowrap"
          >
            {`Let's Connect`}
          </Link>
          <Link
            prefetch={false}
            href={"#"}
            target={"_self"}
            className="link flex items-center gap-[10px] px-[40px] py-[12px]"
          >
            {`Login`}
          </Link>
        </div>

        {/* MOBILE */}
        <button
          className="group flex justify-center items-center lg:hidden"
          onClick={() => setMobileMenu(!showMobileMenu)}
          aria-label="Menu Button"
        >
          <MenuBurger
            className="p-[10px]"
            onClick={() => setMobileMenu(!showMobileMenu)}
            active={showMobileMenu}
          />
        </button>
      </div>

      {showMobileMenu && (
        <>
          <nav className="brand-background w-full absolute top-[106px] flex flex-col lg:hidden">
            <div className="flex flex-col gap-[20px] px-[20px] mt-[20px]">
              <Link
                href="/contact"
                target={"_self"}
                className="button flex items-center gap-[10px] px-[25px] py-[12px] whitespace-nowrap"
              >
                {`Let's Connect`}
              </Link>
              <Link
                prefetch={false}
                href={"#"}
                target={"_self"}
                className="rounded-full border-[1px] text-white border-white shadow-[0px_0px_15px_0px_rgba(255,255,255,0.2)] hover:shadow-[0px_0px_15px_0px_rgba(255,255,255,0.3)] transition-all duration-primary flex items-center gap-[10px] px-[25px] py-[12px] whitespace-nowrap"
              >
                {`Login`}
              </Link>
            </div>

            <div className="pt-[20px] pb-[40px] overflow-y-auto max-h-[calc(100vh-107px)]">
              {menuNodes.map((link, idx) => {
                return (
                  <MenuLink
                    key={link?.id}
                    link={link}
                    active={activeMenu === link?.id}
                    setActiveMenu={setActiveMenu}
                    isParentActive={activeMenu === link?.id}
                  />
                );
              })}
            </div>
          </nav>
          <div
            className="flex lg:hidden absolute left-0 top-[106px] z-[-1] h-screen w-screen bg-black/50 backdrop-blur-[5px]"
            onClick={() => setMobileMenu(!showMobileMenu)}
          ></div>
        </>
      )}
    </header>
  );
}

const MenuLink = ({
  link,
  active,
  setActiveMenu,
  isParentActive,
  collapsePosition,
  ...props
}) => {
  const router = useRouter();
  const { viewportWidth } = useResize();
  const [isActive, setActive] = useState(false);

  let hasSubmenus = link?.children?.length > 0;

  useEffect(() => {
    setActive(false);
  }, [router.asPath]);

  return (
    <>
      <div
        className={`flex flex-col lg:flex-row text-white w-full`}
        onMouseEnter={
          viewportWidth >= 1024
            ? (e) => {
                setActive(!isActive);
                setActiveMenu(link?.id);
                e.stopPropagation();
              }
            : null
        }
        onMouseLeave={
          viewportWidth >= 1024
            ? () => {
                setActive(false);
              }
            : null
        }
      >
        {hasSubmenus ? (
          <Link
            prefetch={false}
            href={link?.url || link?.route_url || link?.urls || "#"}
            target={link?.target || "_self"}
            className={`${
              viewportWidth >= 1024 && "group"
            } link px-[20px] py-[20px] flex justify-between lg:justify-start items-center gap-[10px]`}
            {...props}
          >
            {link?.label || "Menu"}
            {hasSubmenus && (
              <button
                className={`${
                  collapsePosition === "row" ? "-rotate-90" : "rotate-0"
                } 
                ${
                  viewportWidth < 1024 &&
                  "group rounded-full hover:border-cyan duration-primary transition-all z-1 border lg:border-none p-2 lg:p-0"
                }`}
                onClick={(e) => {
                  if (isActive) {
                    setActive(false);
                    setActiveMenu(null);
                    e.preventDefault();
                    e.stopPropagation();
                  } else {
                    setActive(!isActive);
                    setActiveMenu(link?.id);
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
                aria-label="Submenu Dropdown Arrow"
              >
                <DropdownArrow
                  className={`stroke-white group-hover:!stroke-cyan ${
                    isActive
                      ? "-rotate-180 lg:rotate-0"
                      : "rotate-0 lg:rotate-0"
                  }`}
                />
              </button>
            )}
          </Link>
        ) : (
          <Link
            prefetch={false}
            href={link?.url || link?.route_url || link?.urls || "#"}
            target={link?.target || "_self"}
            className="group link px-[20px] py-[20px] justify-between lg:justify-start flex items-center gap-[10px]"
            {...props}
          >
            {link?.label || "Menu"}

            <Arrow className="transition-all group-hover:translate-x-1" />
          </Link>
        )}

        {/* DESKTOP SUBMENU */}
        {isActive && (
          <div className={`absolute top-[75%] left-0`}>
            <div className="backdrop-blur-[5px] relative brand-background overflow-hidden flex w-screen rounded-b-[100px]">
              <div className="absolute bg-[url('/background-pattern.webp')] w-[1440px] h-screen bg-no-repeat bg-center bg-contain bg-origin-content transition-all duration-primary opacity-20 mix-blend-soft-light"></div>
              <div
                className={`${
                  !hasSubmenus && "lg:hidden"
                } z-[1] container-primary py-[80px] lg:pr-[50px] hidden lg:flex gap-[40px] lg:gap-[40px] xl:gap-x-[50px] xl:gap-y-[40px] lg:flex-wrap`}
              >
                {hasSubmenus &&
                  link.children.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-center items-center font-bold whitespace-nowrap"
                    >
                      <MenuLink
                        key={item?.id}
                        link={item}
                        active={isParentActive}
                        setActiveMenu={setActiveMenu}
                        isParentActive={isActive}
                        collapsePosition="row"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* BACKDROP */}
            {hasSubmenus && (isActive || showMobileMenu) && (
              <div
                onMouseEnter={
                  viewportWidth >= 1024
                    ? () => {
                        setActive(false);
                      }
                    : null
                }
                className="hidden lg:flex absolute left-0 top-[75%] z-[-1] h-screen w-screen bg-black/20 backdrop-blur-[5px]"
              ></div>
            )}
          </div>
        )}

        {/* MOBILE SUBMENU */}
        {isActive && (
          <div
            className={`${
              !hasSubmenus && "hidden"
            } z-[1] flex lg:hidden flex-col px-[20px]`}
          >
            {hasSubmenus &&
              link.children.map((item, idx) => (
                <div key={idx} className="flex justify-center items-center">
                  <MenuLink
                    key={item?.id}
                    link={item}
                    active={isParentActive}
                    setActiveMenu={setActiveMenu}
                    isParentActive={isActive}
                    collapsePosition="row"
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
