import dynamic from "next/dynamic";

export const components = {
  MainBanner: dynamic(() =>
    import("@/components/blocks/MainBanner").then((module) => module.default)
  ),
  PageBanner: dynamic(() =>
    import("@/components/blocks/PageBanner").then((module) => module.default)
  ),
  Platforms: dynamic(() =>
    import("@/components/blocks/Platforms").then((module) => module.default)
  ),
  SectionBanner: dynamic(() =>
    import("@/components/blocks/SectionBanner").then((module) => module.default)
  ),
  Features: dynamic(() =>
    import("@/components/blocks/Features").then((module) => module.default)
  ),
  Companies: dynamic(() =>
    import("@/components/blocks/Companies").then((module) => module.default)
  ),
  PageBanner: dynamic(() =>
    import("@/components/blocks/PageBanner").then((module) => module.default)
  ),
  ArticleGrid: dynamic(() =>
    import("@/components/blocks/ArticleGrid").then((module) => module.default)
  ),
  VideoGrid: dynamic(() =>
    import("@/components/blocks/VideoGrid").then((module) => module.default)
  ),
  Contact: dynamic(() =>
    import("@/components/blocks/Contact").then((module) => module.default)
  ),
  BlockImage: dynamic(() =>
    import("@/components/blocks/BlockImage").then((module) => module.default)
  ),
  Highlight: dynamic(() =>
    import("@/components/blocks/Highlight").then((module) => module.default)
  ),
};
