// import Header from "@/components/_layout/partials/Header";
import Header from "@/layout/partials/Header";
import ArticleDetails from "../partials/ArticleDetails";

export default function ArticlesPage({ page }) {
  return (
    <>
      <Header meta={page?.metaData || {}} />
      <ArticleDetails block={page} page={page} />
    </>
  );
}
