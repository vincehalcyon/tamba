// import Header from "@/components/_layout/partials/Header";
import Header from "@/layout/partials/Header";
import ArticleDetails from "../partials/ArticleDetails";
import VideoDetails from "../partials/VideosDetails";

export default function VideosPage({ page }) {
  return (
    <>
      <Header meta={page?.metaData || {}} />
      <VideoDetails block={page} page={page} />
    </>
  );
}
