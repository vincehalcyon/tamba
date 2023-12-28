import Image from "next/image";
import React from "react";

const BlockImage = ({ block }) => {
  const { image } = block.main;
  return (
    <section className="bg-gradient-to-t from-[#17234C] to-[rgba(53, 68, 116, 0.00)] border rounded-[100px] border-[rgba(84,147,252,0.50)]">
      <div className="mx-auto px-[20px] my-[80px] relative w-full h-full max-h-[500px] max-w-[579px] min-h-[500px]">
        <Image
          src={image || "/default_banner"}
          alt="Tamba Banner"
          fill
          className="object-contain object-center px-[20px]"
          priority
          loading="eager"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default BlockImage;
