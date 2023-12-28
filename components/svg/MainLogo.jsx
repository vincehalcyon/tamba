import globalData from "@/lib/preBuildScripts/static/globalData.json";
import Image from "next/image";
import Link from "next/link";

const MainLogo = ({
  className = "relative h-[46px] min-h-[46px] max-h-[46px] min-w-[122px] w-[122px] max-w-[122px]",
  ...props
}) => {
  const { logo } = globalData.tenantDetails.data.main;

  return (
    <div className={className} {...props}>
      <Link prefetch={false} href="/" className="h-full w-full">
        <Image
          src={logo || "/logo.webp"}
          alt="Tamba Logo"
          className="object-contain object-center"
          height={56}
          width={149}
          priority
        />
      </Link>
    </div>
  );
};

export default MainLogo;
