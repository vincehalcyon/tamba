import ContactForm from "@/components/partials/forms/ContactForm";
import Image from "next/image";
import CheckCircle from "../svg/CheckCircle";
export default function Contact({ block }) {
  const { image, title, description, list } = block?.main;
  const form_title = "Request a demo";

  return (
    <div className="py-[50px] px-[20px] mt-[80px]">
      <div className="container-primary flex flex-col lg:flex-row items-center gap-[40px]">
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col items-center justify-center gap-y-[30px] xl:px-[20px]">
          {image && (
            <div className="relative h-[200px] w-[247px] 3sm:h-[300px] 3sm:w-[347px] ">
              <Image
                src={image}
                alt="Tamba Contact Image"
                fill
                className="object-contain object-center"
                priority
                loading="eager"
                blurDataURL="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                placeholder="blur"
              />
            </div>
          )}
          {title && (
            <h2 className="brand-text-gradient text-[62px] text-center font-[700] leading-[75px] tracking-[3.1px]">
              {title}
            </h2>
          )}
          {description && (
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="text-white text-[30px] text-center font-[400] [&>*]:leading-[37px]"
            />
          )}
          <div className="flex flex-col gap-y-[20px]">
            {list.map((item, index) => (
              <div key={index} className="flex items-center gap-x-[10px]">
                <div>
                  <CheckCircle />
                </div>
                <p className="text-white text-[18px] font-[400] leading-[25px]">
                  {item?.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] bg-gradient-to-b from-[#17234C] via-transparent to-transparent border-[1px] border-[#2F3A63] rounded-[20px] p-[30px]">
          <h3 className="text-white text-[30px] text-center sm:text-start font-[700] leading-normal">
            {form_title}
          </h3>
          <ContactForm form={block?.main?.form} />
        </div>
      </div>
    </div>
  );
}
