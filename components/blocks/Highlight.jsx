import Image from "next/image";

const Highlight = ({ block }) => {
  const { title, description, image } = block.main;

  return (
    <section className="text-white mb-[100px] flex flex-col gap-[50px]">
      {image && (
        <div className="relative h-full w-full min-h-[400px] aspect-[1440/520]">
          <picture>
            <source
              media="(min-width: 415px)"
              srcSet={image || "default-image.webp"}
            />
            <Image
              src={image || "default-image.webp"}
              alt="Tamba Highlight Image"
              fill
              sizes="100vh"
              className="object-cover object-center"
              priority
              loading="eager"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              placeholder="blur"
            />
          </picture>
        </div>
      )}

      {title && (
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className={`container-primary px-[40px] lg:px-[115px] [&>*]:leading-normal brand-content-gradient text-center text-[28px] lg:text-[38px] font-[600] leading-[50px]`}
        />
      )}

      {description && (
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className={`container-primary font-secondary px-[20px] text-center sm:text-start text-[16px] font-[400] leading-[24px]`}
        />
      )}
    </section>
  );
};

export default Highlight;
