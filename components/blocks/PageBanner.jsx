import Image from "next/image";

export default function Block({ block }) {
  const { desktop_image, mobile_image, title, description, background_style } =
    block?.main;

  return (
    <section
      className={`page-banner relative w-full ${
        background_style === "background_gradient"
          ? ""
          : "bg-gradient-to-t from-[#17234C] to-[rgba(53, 68, 116, 0.00)] rounded-b-[100px] overflow-hidden"
      }`}
    >
      <div className="absolute top-0 bg-[url('/background-pattern.webp')] w-screen max-w-full lg:w-[100vw] mx-auto h-[100vh] bg-center bg-no-repeat transition-all duration-primary opacity-20 mix-blend-soft-light"></div>

      {/* ${
          desktop_image && description
            ? "min-h-screen "
            : "py-[80px] mt-[107px]"
        } */}
      <div
        className={`relative container-primary flex flex-col items-center gap-y-9 px-[20px] justify-center min-h-[calc(100vh+20px)]`}
      >
        {desktop_image && (
          <div className="flex justify-center items-center relative w-full h-full aspect-[694/600] max-w-[409px] px-[20px]">
            <picture>
              <source
                media="(min-width: 415px)"
                srcSet={desktop_image || mobile_image || "default-image.webp"}
              />
              <Image
                src={mobile_image || desktop_image || "default-image.webp"}
                alt="Tamba Main Banner"
                width={375}
                height={380}
                className="object-contain object-center"
                priority
                loading="eager"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                placeholder="blur"
              />
            </picture>
          </div>
        )}
        <h1 className="w-full font-semibold text-[35px] sm:text-[48px] leading-tight text-center xl:text-[62px] xl:leading-[90px] tracking-[4px]">
          <span className="brand-text-gradient">{title}</span>
        </h1>
        {description && (
          <p className="text-white text-center text-[18px] sm:text-[24px] font-[400] leading-[40px]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
