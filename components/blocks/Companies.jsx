import Image from "next/image";
import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleLine from "../partials/TitleLine";
import DropdownArrow from "../svg/DropdownArrow";

const Companies = ({ block }) => {
  const { title } = block.main;
  const companies = block?.main?.images || [];

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    fade: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <section className="bg-gradient-to-r from-[#1C1C1C] via-[#0C173E] to-[#1C1C1C] py-[50px] sm:py-[100px]">
        <div className="flex flex-col container-primary px-[20px]">
          <div className="flex w-full items-center text-center justify-center gap-[20px] pb-[50px]">
            <TitleLine />
            <h2 className="whitespace-nowrap text-[20px] uppercase text-white">
              {title}
            </h2>
            <TitleLine reverse />
          </div>
          <div className="relative px-[20px] items-start justify-start w-full">
            <div className="absolute flex items-center justify-center w-full h-full container-primary ">
              <div
                onClick={handlePrev}
                className="rotate-180 w-fit absolute text-white left-[-25px] cursor-pointer"
              >
                <DropdownArrow className="-rotate-90 transition-all group-hover:translate-x-1" />
              </div>
              <div
                onClick={handleNext}
                className="rotate-0 w-fit absolute text-white right-[15px] cursor-pointer "
              >
                <DropdownArrow className="-rotate-90 transition-all group-hover:translate-x-1 cursor-pointer -z-10" />
              </div>
            </div>
            <Slider className="" ref={sliderRef} {...settings}>
              {[...companies, ...companies].map((company, i) => (
                <div key={i}>
                  <div className="relative h-[35px] min-h-[35px] max-h-[35px] w-full">
                    <Image
                      src={company}
                      alt={`Company ${i + 1}`}
                      className="object-contain object-center"
                      loading="lazy"
                      sizes="100vh"
                      fill
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
