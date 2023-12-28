import ArticlesPage from "@/components/page/ArticlesPage";
import ParentBlock from "@/components/page/ParentBlock";
import VideosPage from "@/components/page/VideosPage";
import { paths, props } from "@/lib/props/page";
export const getStaticPaths = paths;
export const getStaticProps = props;
export default function DynamicPage({ page, blocks }) {
  switch (page?.content?.id) {
    case "articles":
      return <ArticlesPage page={page} />;
    case "videos":
      return <VideosPage page={page} />;
    default:
      return <ParentBlock page={page} blocks={blocks} />;
  }

  // return <ParentBlock page={page} blocks={blocks} />;
}

// export default function DynamicPage({ page, blocks }) {
//   return "Test";
// }
