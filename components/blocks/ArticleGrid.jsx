import CONTENTAPI from "@/lib/api/content/request";
import Jsona from "jsona";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const dataFormatter = new Jsona();

export const STLYED_BACKGROUND =
  "border rounded-[100px] border-[rgba(84,147,252,0.30)] bg-gradient-to-t from-[#17234C] to-[rgba(53, 68, 116, 0.00)]";

const ArticleGrid = ({ block }) => {
  const {
    title,
    initial_background,
    button_label,
    button_url,
    limit,
    taxonomy,
    collection,
  } = block.main;

  const [articles, setArticles] = useState(null);

  const taxonomyTerm = "article-categories";

  const { error, isValidating } = CONTENTAPI.getContentsSwr(
    `/${collection?.id}/entries?page[size]=${limit}&filter[taxonomies][${taxonomyTerm}]=${taxonomy?.id}`,
    {
      render: collection?.id && taxonomy?.id,
      revalidateOnFocus: false,
      onSuccess: (res) => {
        if (res) {
          setArticles(dataFormatter.deserialize(res.data));
        }
      },
    }
  );

  let newArticles = articles?.reduce((groups, item, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!groups[groupIndex]) {
      groups[groupIndex] = [];
    }
    groups[groupIndex].push(item);

    return groups;
  }, []);

  const evenClass = initial_background === "dark" ? STLYED_BACKGROUND : "";
  const oddClass = initial_background === "dark" ? "" : STLYED_BACKGROUND;

  return (
    <>
      <section className={`w-full`}>
        <div className="px-[20px] 2xl:px-0">
          <div className="flex flex-col">
            <div className={`relative `}>
              {newArticles?.map((group, index) => (
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
                    className={`container-primary px-[20px] grid grid-cols-1 1sm:grid-cols-2 md:grid-cols-3 gap-[40px] py-[40px]`}
                  >
                    {group?.map((item, idx) => (
                      <Link
                        key={idx}
                        href={`${item?.route_url}`}
                        className="custom-card transition-all duration-1000 rounded-[20px]"
                      >
                        <div className="flex flex-col border p-5 text-white rounded-[20px] gap-y-3">
                          <div className="relative h-[200px] w-full ">
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
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.data?.main?.content,
                            }}
                            className="[&>p]:text-ellipsis [&>p]:line-clamp-3 [&>p]:text-[14px]"
                          ></div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  {index == newArticles.length - 1 && (
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
                          aria-label="Articles Redirect"
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

export default ArticleGrid;
