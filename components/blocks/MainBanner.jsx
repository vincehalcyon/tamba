import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainBanner = ({ block }) => {
  const { image, mobile_image, title, description, button_label, button_url } =
    block.main;
  return (
    <div className="page-banner relative text-white overflow-y-visible">
      <div className="overflow-y-visible overflow-x-hidden absolute bg-[url('/background-pattern.webp')] w-[100vw] h-[200vh] bg-center bg-no-repeat opacity-30 rotate-180 mix-blend-soft-light"></div>

      <div className="max-w-[1440px] mx-auto px-[20px] relative min-h-[calc(100vh+20px)] flex items-center">
        <div className="z-[2] w-full xl:w-auto">
          <div className="xl:max-w-[570px] w-full xl:mx-auto flex flex-col justify-center items-center xl:items-stretch xl:justify-start gap-[30px]">
            <div className="flex justify-center items-center xl:hidden relative w-full h-full aspect-[694/600] max-w-[409px] px-[20px]">
              <picture>
                <source
                  media="(min-width: 415px)"
                  srcSet={mobile_image || image || "default-image.webp"}
                />
                <Image
                  src={mobile_image || image || "default-image.webp"}
                  alt="Tamba Main Banner"
                  fill
                  sizes="100vh"
                  className="object-contain object-center"
                  priority
                  loading="eager"
                  blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  placeholder="blur"
                />
              </picture>
            </div>
            <h1 className="w-full font-bold text-[48px] tracking-[4px] leading-tight text-center xl:text-left xl:text-[80px] xl:leading-[90px]">
              <span className="brand-text-gradient">{title}</span>
            </h1>
            <p className="text-[24px] xl:text-[45px] leading-normal text-center xl:text-left">
              {description}
            </p>

            <div className="flex">
              <Link
                href={"#"}
                target={"_self"}
                className="button px-[25px] py-[12px]"
              >
                {button_label}
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex absolute right-0 w-[694px] h-[600px]">
          <picture>
            <source
              media="(min-width: 415px)"
              srcSet={mobile_image || image || "default-image.webp"}
            />
            <Image
              src={mobile_image || image || "default-image.webp"}
              alt="Tamba Main Banner"
              fill
              sizes="100vh"
              className="object-contain object-center"
              priority
              loading="eager"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              placeholder="blur"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
