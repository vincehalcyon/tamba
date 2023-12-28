import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleDetails = ({ block, page }) => {
  const { title, taxonomyTerms } = block;
  const { content, image, subtitle } = block.data.main;
  return (
    <>
      <section className="mt-[150px] pb-[50px]">
        <div className="container-primary text-white ">
          <div className="flex flex-col justify-center  items-center w-full">
            <div className="flex justify-center items-center  relative w-full h-full aspect-[800/450] max-w-[800px] px-[20px]">
              <picture>
                <source
                  media="(min-width: 415px)"
                  srcSet={image || "default-banner.webp"}
                />
                <Image
                  src={image || "default-banner.webp"}
                  alt={title?.replace(/(<([^>]+)>)/gi, "") || `Article Image`}
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
            <div className="flex flex-col px-[20px] 2xl:px-0 py-[50px] gap-y-5">
              {title && (
                <h1 className="brand-content-gradient-v2 text-[67px] leading-normal font-[600] text-center tracking-[3px]">
                  {title}
                </h1>
              )}
              {subtitle && (
                <div
                  className="text-[30px] [&>*]:leading-normal text-white font-[600] text-center"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
              )}
              {content && (
                <div
                  className="text-[16px] font-secondary"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href={block?.taxonomyTerms[0]?.id || "#"}
            target={"_self"}
            className="button flex items-center px-[25px] py-[12px]"
          >
            Back to {block?.taxonomyTerms[0]?.name || "Contents"}
          </Link>
        </div>
      </section>
    </>
  );
};

export default ArticleDetails;
