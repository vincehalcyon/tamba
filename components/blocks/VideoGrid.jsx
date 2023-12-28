import Image from "next/image";
import Link from "next/link";
import { STLYED_BACKGROUND } from "./ArticleGrid";

const VideoGrid = ({ block }) => {
  const {
    title,
    initial_background,
    button_label,
    button_url,
    collection,
    design_variant,
  } = block.main;

  const evenClass = initial_background === "dark" ? STLYED_BACKGROUND : "";
  const oddClass = initial_background === "dark" ? "" : STLYED_BACKGROUND;
  const videoPerRow = design_variant === "first" ? 2 : 3;

  let videos = collection.contents;

  let newVideos = videos?.reduce((groups, item, index) => {
    const groupIndex = Math.floor(index / videoPerRow);
    if (!groups[groupIndex]) {
      groups[groupIndex] = [];
    }
    groups[groupIndex].push(item);

    return groups;
  }, []);

  return (
    <>
      <section className={`w-full`}>
        <div className="px-[20px] 2xl:px-0">
          <div className="flex flex-col">
            <div className={`relative`}>
              {newVideos?.map((group, index) => (
                <div
                  key={index}
                  className={`${index % 2 === 0 ? evenClass : oddClass}`}
                >
                  {index === 0 && title && (
                    <h1 className="text-center text-[45px] font-[600] text-white mt-[40px]">
                      {title}
                    </h1>
                  )}
                  <div
                    className={`container-primary px-[20px] grid ${
                      design_variant === "first"
                        ? "grid-cols-1 1sm:grid-cols-2 md:grid-cols-2"
                        : "grid-cols-1 1sm:grid-cols-2 md:grid-cols-3"
                    } gap-[40px] py-[40px]`}
                  >
                    {group?.map((item, idx) => (
                      <Link
                        key={idx}
                        href={`${item?.route_url}`}
                        className="custom-card transition-all duration-1000 rounded-[20px]"
                      >
                        <div className="flex flex-col border p-5 text-white rounded-[20px] gap-y-3">
                          <div
                            className={`relative w-full ${
                              design_variant === "first"
                                ? "h-[285px]"
                                : "h-[200px]"
                            }`}
                          >
                            <Image
                              src={
                                item?.data?.main?.thumbnail ||
                                "/article_thumbnail.webp"
                              }
                              alt={
                                item?.title?.replace(/(<([^>]+)>)/gi, "") ||
                                `Video Image ${index + 1}`
                              }
                              fill
                              className="object-cover"
                              loading="lazy"
                            />
                          </div>
                          <span className="font-[600]">{item?.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {index == newVideos.length - 1 && (
                    <div
                      className={`pb-[40px] flex justify-center ${
                        button_label ? "" : "hidden"
                      }`}
                    >
                      {button_label && (
                        <Link
                          href={`${button_url?.attributes?.route_url}`}
                          target={"_self"}
                          className="button flex items-center px-[25px] py-[12px]"
                          aria-label="Videos Redirect"
                        >
                          {button_label}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoGrid;
