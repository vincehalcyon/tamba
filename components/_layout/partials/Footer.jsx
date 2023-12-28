import TitleLine from "@/components/partials/TitleLine";
import FacebookIcon from "@/components/svg/FacebookIcon";
import InstagramIcon from "@/components/svg/InstagramIcon";
import LinkedinIcon from "@/components/svg/LinkedinIcon";
import globalData from "@/lib/preBuildScripts/static/globalData.json";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { footerNodes, tenantDetails } = globalData;

  const footer_logo = tenantDetails?.data?.main?.footer_logo;

  const description = tenantDetails?.data?.main?.description;

  const basic_page = tenantDetails?.data?.main?.basic_page || [];

  const linkedIn_link = tenantDetails?.data?.main?.linkedIn_link;

  const instagram_link = tenantDetails?.data?.main?.instagram_link;

  const facebook_link = tenantDetails?.data?.main?.facebook_link;

  return (
    <>
      <section className="relative">
        <div className="flex">
          <TitleLine />
          <TitleLine reverse />
        </div>

        <div className="absolute top-0 bg-[url('/background-pattern2.webp')] w-screen max-w-full overflow-x-hidden lg:w-[100vw] mx-auto h-full lg:h-[542px] bg-fixed bg-center transition-all duration-primary opacity-50 rotate-0 mix-blend-soft-light"></div>

        <div className="relative">
          <div className="container-primary py-[50px] px-5 2xl:px-0">
            <div className="block lg:hidden pb-[50px]">
              <div className="flex flex-col text-white gap-y-7 text-center lg:text-start">
                <div className="flex flex-col items-center">
                  <div className="relative h-[80px] min-h-[80px] max-h-[80px] min-w-[48px] w-[48px] max-w-[48px]">
                    <Link prefetch={false} href="/" className="h-full w-full">
                      <Image
                        src={footer_logo}
                        alt="Tamba Footer Logo"
                        className="object-contain object-center"
                        sizes="100vh"
                        fill
                        priority
                      />
                    </Link>
                  </div>
                  <div className="flex justify-center lg:justify-start">
                    <div
                      dangerouslySetInnerHTML={{ __html: description }}
                      className="mt-5 text-[16px] max-w-[250px] xl:w-auto"
                    ></div>
                  </div>
                </div>
                {basic_page && (
                  <div className="flex flex-col gap-y-3">
                    {basic_page?.map((item, i) => (
                      <Link
                        prefetch={false}
                        key={i}
                        href={item?.url?.attributes?.route_url || "#"}
                        className="link"
                      >
                        {item?.label}
                      </Link>
                    ))}
                  </div>
                )}
                <div className="flex w-full justify-center lg:justify-start gap-x-5">
                  <Link prefetch={false} href={linkedIn_link || "#"}>
                    <LinkedinIcon className="text-pink" />
                  </Link>
                  <Link prefetch={false} href={instagram_link || "#"}>
                    <InstagramIcon className="text-orange" />
                  </Link>
                  <Link prefetch={false} href={facebook_link || "#"}>
                    <FacebookIcon className="text-cyan" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 space-x-[0px] xl:space-x-[100px] gap-y-7 lg:gap-y-0">
              <div className="hidden lg:block">
                <div className="flex flex-col text-white gap-y-7 text-center lg:text-start">
                  <div className="flex flex-col">
                    <div className="relative h-[80px] min-h-[80px] max-h-[80px] min-w-[48px] w-[48px] max-w-[48px]">
                      <Link prefetch={false} href="/" className="h-full w-full">
                        <Image
                          src={footer_logo}
                          alt="Tamba Footer Logo"
                          className="object-contain object-center"
                          sizes="100vh"
                          fill
                          priority
                        />
                      </Link>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                      <div
                        dangerouslySetInnerHTML={{ __html: description }}
                        className="mt-5 text-[16px] max-w-[250px] xl:w-auto"
                      ></div>
                    </div>
                  </div>
                  {basic_page && (
                    <div className="flex flex-col gap-y-3">
                      {basic_page?.map((item, i) => (
                        <Link
                          prefetch={false}
                          key={i}
                          href={item?.url?.attributes?.route_url || "#"}
                          className="link"
                        >
                          {item?.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  <div className="flex w-full justify-center lg:justify-start gap-x-5">
                    <Link
                      prefetch={false}
                      href={linkedIn_link || "#"}
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="text-pink" />
                    </Link>
                    <Link
                      prefetch={false}
                      href={instagram_link || "#"}
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="text-orange" />
                    </Link>
                    <Link
                      prefetch={false}
                      href={facebook_link || "#"}
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="text-cyan" />
                    </Link>
                  </div>
                </div>
              </div>
              {footerNodes?.map((parent, i) => (
                <div
                  key={i}
                  className="flex flex-col text-white gap-y-3 text-center lg:text-start"
                >
                  <span className="text-cyan font-[600]">{parent?.label}</span>
                  {parent?.children?.map((item, i) => (
                    <div key={i}>
                      <Link prefetch={false} href={item?.url} className="link">
                        {item?.label}
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-[1] text-center py-5 bg-gradient-to-r from-[#0C173E] to-[#1C1C1C] px-5 lg:px-0">
            <p className="text-white text-sm">
              Copyright 2023 © Tamba. Website Developed by{" "}
              <Link
                href="https://halcyonagile.com/"
                target="_blank"
                className="hover:underline duration-primary"
              >
                Halcyon Agile
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
