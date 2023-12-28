import "tw-elements/dist/css/tw-elements.min.css";
import "@/styles/globals.css";
import "@/styles/customs.css";
import DefaultLayout from "@/components/_layout/DefaultLayout";
import globalState from "@/lib/store/globalState";
import persistentStore from "@/lib/store/persistentStore";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {
  const { page } = pageProps;
  useEffect(() => {
    const locale = page?.locale;
    if (locale) persistentStore.setState({ locale });
  }, [page]);

  useEffect(() => {
    globalState.setState({ ready: true });

    const handleInteraction = () => {
      globalState.setState({
        showLazy: true,
      });
    };

    const removeInteractionListeners = () => {
      document.removeEventListener("scroll", handleInteraction, {
        passive: true,
      });
      document.addEventListener("click", handleInteraction, { passive: true });
      document.removeEventListener("mousemove", handleInteraction, {
        passive: true,
      });
      document.removeEventListener("touchstart", handleInteraction, {
        passive: true,
      });
    };

    const mainContentSpace = () => {
      if (window.location !== "/") {
        const header = document.getElementById("header");
        const mainContent = document.getElementById("main-content");

        mainContent.style.paddingTop = `${header.offsetHeight}px`;
      }
    };

    document.addEventListener("DOMContentLoaded", mainContentSpace);
    document.addEventListener("resize", mainContentSpace);

    document.addEventListener("scroll", handleInteraction, { passive: true });
    document.addEventListener("click", handleInteraction, { passive: true });
    document.addEventListener("mousemove", handleInteraction, {
      passive: true,
    });
    document.addEventListener("touchstart", handleInteraction, {
      passive: true,
    });

    return removeInteractionListeners;
  }, []);
  return (
    <div className="text-dim-black font-primary brand-background overflow-hidden">
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </div>
  );
}
