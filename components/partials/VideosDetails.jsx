import Link from "next/link";
import { useEffect, useState } from "react";

const VideoDetails = ({ block, page }) => {
  const { title, taxonomyTerms } = block;

  const { description, thumbnail, video, video_type } = block.data.main;

  const [videoData, setVideoData] = useState({
    videoId: "",
    videoSrc: "",
    videoThumb: "",
  });

  useEffect(() => {
    const processVideo = () => {
      let videoId;
      let videoSrc;
      let videoThumb;

      switch (video_type) {
        case "youtube":
          videoId = getYouTubeVideoId(video);
          videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
          videoThumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          setVideoData({
            ...videoData,
            videoId: videoId,
            videoSrc: videoSrc,
            videoThumb: videoThumb,
          });
          break;
        case "vimeo":
          videoId = getVimeoVideoId(video);
          videoSrc = `https://player.vimeo.com/video/${videoId}?badge=0&quality_selector=1&player_id=0&app_id=58479&autoplay=1`;
          videoThumb = `https://vumbnail.com/${videoId}.jpg` || thumbnail;

          setVideoData({
            ...videoData,
            videoId: videoId,
            videoSrc: videoSrc,
            videoThumb: videoThumb,
          });
          break;
        default:
          return;
      }
    };

    processVideo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video, video_type]);

  function getVimeoVideoId(url) {
    const regexPattern = /(?:vimeo.com\/)(\d+)/;
    const match = url.match(regexPattern);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }

  function getYouTubeVideoId(url) {
    const regexPattern =
      /(?:\?v=|\/embed\/|\/\d{1,2}\/|\/vi?\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regexPattern);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }

  return (
    <>
      <section className="mt-[150px] pb-[50px]">
        <div className="container-primary text-white ">
          <div className="flex flex-col justify-center  items-center w-full">
            <div className="flex justify-center items-center  relative w-full h-full aspect-[800/450] max-w-[800px] px-[20px] shadow-[0px_10px_50px_3px_rgba(94,113,184,0.50);]">
              <iframe
                aria-label="Video IFrame"
                className="absolute top-0 left-0 object-cover w-full h-full mx-auto border-0"
                src={videoData?.videoSrc}
                srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${videoData?.videoSrc}><img src=${videoData?.videoThumb} alt='Mimosa Plus Golf Course'><span>▶</span></a>`}
                title="Mimosa"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex flex-col px-[20px] 2xl:px-0 py-[50px] gap-y-5">
              <h1 className="brand-content-gradient-v2 text-[67px] leading-normal font-[600] text-center tracking-[3px]">
                {title}
              </h1>
              {description && (
                <div
                  className=" text-[16px] font-secondary"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href={block?.content?.prefix || "#"}
            target={"_self"}
            className="button flex items-center px-[25px] py-[12px]"
          >
            Back to {block?.content?.name}
          </Link>
        </div>
      </section>
    </>
  );
};

export default VideoDetails;
