import Image from "next/image";
import Link from "next/link";
import TitleLine from "../partials/TitleLine";
import DropdownArrow from "../svg/DropdownArrow";

const Platforms = ({ block }) => {
  const { title, design_style } = block.main;
  const platforms = block?.main?.platforms || [];

  return (
    <section className="relative my-[80px]">
      <div className="container-primary px-[20px]">
        <div>
          {title && (
            <div className="flex flex-col text-center pb-[30px] tracking-[2px]">
              <div className="flex w-full items-center text-center justify-center gap-[20px]">
                <TitleLine />
                <h2 className="whitespace-nowrap text-[20px] uppercase text-white">
                  {title}
                </h2>
                <TitleLine reverse />
              </div>
            </div>
          )}
          <div
            className={`gap-[80px] lg:gap-[50px]  ${
              design_style === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "flex flex-wrap justify-center items-center lg:justify-between"
            }`}
          >
            {platforms?.length > 0 &&
              platforms?.map((item, idx) => (
                <div key={idx} className="mx-auto h-full">
                  <Link
                    href={item?.button_url?.attributes?.route_url || "#"}
                    className={`group text-white overflow-hidden flex flex-col text-center justify-between h-full gap-[20px] ${
                      design_style === "grid"
                        ? "w-full min-w-[250px] max-w-[250px] px-[20px] pt-[20px] pb-[35px] border rounded-[30px] border-[rgba(84,147,252,0.50)] custom-card transition-all duration-500"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col justify-center items-center gap-[30px] h-full">
                      <div
                        className={`${
                          design_style === "grid"
                            ? ""
                            : "min-h-[160px] h-full max-h-[160px] w-full"
                        } min-w-[140px] max-w-[167px] w-full`}
                      >
                        <Image
                          src={item?.image || "#"}
                          alt={item?.title || "Platform Image"}
                          className="object-contain object-center"
                          loading="lazy"
                          height={1000}
                          width={1000}
                        />
                      </div>
                      <span className="text-[20px] font-semibold leading-[30px]">
                        {item?.title}
                      </span>
                    </div>

                    {item?.button_label && (
                      <div
                        className={`flex justify-center items-center gap-[20px] mb-auto`}
                      >
                        {item?.button_label && (
                          <div className="flex gap-[10px] items-center justify-center leading-none transition-all duration-primary group-hover:text-cyan">
                            {item?.button_label}
                            <DropdownArrow className="-rotate-90 transition-all group-hover:translate-x-1" />
                          </div>
                        )}
                      </div>
                    )}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
