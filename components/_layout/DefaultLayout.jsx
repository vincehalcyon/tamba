import Menu from "@/layout/partials/Menu";
import dynamic from "next/dynamic";
import globalState from "@/lib/store/globalState";

const Footer = () => {
  const Component = dynamic(() => import("@/layout/partials/Footer"));
  return <Component />;
};

export default function DefaultLayout(props) {
  const showLazy = globalState((state) => state.showLazy);

  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <Menu />
        <div id="main-content" className="flex-grow overflow-hidden">
          {props.children}
        </div>
        {showLazy && <Footer />}
      </div>
    </>
  );
}
