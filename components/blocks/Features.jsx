import Image from "next/image";
import Link from "next/link";
import TitleLine from "../partials/TitleLine";
export default function Block({ block }) {
  const { title, feature, background } = block?.main;

  return (
    <div
      className={`${
        background === "white"
          ? "bg-white"
          : background === "dark"
          ? "bg-gradient"
          : "bg-transparent"
      } z-10 rounded-[100px]`}
    >
      <div>
        {title && (
          <h2 className="pt-[80px] container-primary text-[#1C1C1C] text-center text-[45px] font-[600] leading-normal">
            {title}
          </h2>
        )}
        <div className="w-full flex flex-col">
          {feature?.map((item, index) => (
            <div
              key={index}
              className={`${
                background === "dark" &&
                index < feature?.length - 1 &&
                "border-b-[1px] border-[rgba(84,147,252,0.50)]"
              } py-[80px]`}
            >
              <div className="px-[20px] container-primary relative w-full flex flex-col lg:flex-row items-center justify-between gap-y-[80px]">
                <div
                  className={`lazy ${
                    item?.image_position === "right" && "lg:order-last"
                  }`}
                >
                  <Image
                    src={item?.image || "/default-image.webp"}
                    alt={
                      item?.title?.replace(/(<([^>]+)>)/gi, "") ||
                      `Feature Image ${index + 1}`
                    }
                    width={100}
                    height={100}
                    className="lazy w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full sm:w-[80%] lg:w-[50%] flex flex-col gap-y-[30px]">
                  {item?.subtitle && (
                    <div className="flex flex-row items-center gap-x-[10px]">
                      <h3
                        className={`${
                          background === "white"
                            ? "text-[#1C1C1C]"
                            : background === "dark"
                            ? "text-white"
                            : "bg-transparent"
                        } text-center sm:text-start text-[20px] font-[400] leading-normal tracking-[2px] uppercase whitespace-nowrap`}
                      >
                        {item?.subtitle}
                      </h3>
                      <TitleLine reverse />
                    </div>
                  )}
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                    className={`${
                      background === "white"
                        ? "text-[#1C1C1C]"
                        : background === "dark"
                        ? "text-white"
                        : "bg-transparent"
                    } feature [&>*]:leading-normal brand-content-gradient text-center sm:text-start text-[38px] font-[600] leading-[50px]`}
                  ></div>
                  {item?.description && (
                    <div
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                      className={`${
                        background === "white"
                          ? "text-[#333333]"
                          : background === "dark"
                          ? "text-white"
                          : "bg-transparent"
                      } text-center sm:text-start text-[16px] font-[400] leading-[24px]`}
                    ></div>
                  )}
                  {item?.button_url && item?.button_label && (
                    <div className="flex justify-center sm:justify-start mt-4">
                      <div>
                        <Link
                          href={item?.button_url || "#"}
                          className="button py-[12px] px-[25px]"
                          aria-label={
                            item?.title.replace(/(<([^>]+)>)/gi, "") + " Link"
                          }
                        >
                          {item?.button_label}
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
