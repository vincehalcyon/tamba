import Header from "@/components/_layout/partials/Header";
import globalState from "@/lib/store/globalState";
import { components } from "@/lib/services/componentService";
import { useEffect, useState } from "react";
export default function ParentBlock({ page, blocks = [] }) {
  const [customInitialBlocks, setCustomInitialBlocks] = useState(1);

  useEffect(() => {
    const elementsWithClassPageBanner =
      document.querySelectorAll(".page-banner");

    if (elementsWithClassPageBanner.length === 0) {
      setCustomInitialBlocks(3);
    }
  }, []);

  const showLazy = globalState((state) => state.showLazy);
  const activeBlocks = blocks.slice(0, customInitialBlocks);
  const lazyBlocks = blocks.slice(customInitialBlocks);

  return (
    <>
      {activeBlocks.map((block) => {
        const Component = components[block.key];
        return (
          <Component
            key={block.key + block?.order?.toString()}
            block={block.data}
            page={page}
            index={block?.order}
          />
        );
      })}

      {showLazy && (
        <>
          {lazyBlocks.map((block) => {
            const Component = components[block.key];
            return (
              <Component
                key={block.key + block?.order?.toString()}
                block={block.data}
                page={page}
                index={block?.order}
              />
            );
          })}
        </>
      )}
      <Header meta={page?.metaData || {}} />
    </>
  );
}
