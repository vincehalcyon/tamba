import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionBanner = ({ block }) => {
  const { image, title, description, button_label, button_url } = block?.main;

  return (
    <>
      <section className="bg-gradient-to-r from-[#1C1C1C] via-[#0C173E] to-[#1C1C1C] py-[50px] px-[20px]">
        <div className="container-primary border border-[#D9D9D9] rounded-[30px] transition-all duration-300">
          <div className="flex flex-col-reverse lg:flex-row gap-x-5">
            <div className="flex flex-col w-full lg:w-1/2 items-center text-center lg:text-start justify-center py-[20px] lg:py-[50px] lg:pl-[50px] px-[20px] lg:px-0 lg:pr-[0px]">
              <div className="flex flex-col gap-y-7 ">
                <div
                  className="brand-content-gradient text-[25px] sm:text-[35px] lg:text-[45px] [&>*]:leading-normal text-white font-[600]"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <div
                  className="text-white"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
                {button_label && button_url && (
                  <div className="flex justify-center lg:justify-start">
                    <Link
                      href={button_url || "#"}
                      target={"_self"}
                      className="button flex items-center px-[25px] py-[12px]"
                    >
                      {button_label}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end w-full lg:w-1/2 lg:py-[50px] pr-[0px] ">
              <div className="relative max-w-[490px] w-full md:min-w-[490px]  max-h-[381px] min-h-[381px] h-[381px]">
                <Image
                  src={image}
                  alt={title?.replace(/(<([^>]+)>)/gi, "") || `Section Image`}
                  fill
                  sizes="100vh"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionBanner;
