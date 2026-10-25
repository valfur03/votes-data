import Image from "next/image";
import Link from "next/link";

import LogoTextImage from "../../../public/assets/image/logo/logo-text.png";

export const Topbar = () => {
  return (
    <div className="flex h-20 justify-center bg-white py-4 px-safe">
      <div className="flex size-full max-w-(--breakpoint-lg) items-center px-6">
        <Link href="/">
          <Image
            src={LogoTextImage}
            alt="Logo de votes-data"
            className="h-8 w-auto"
          />
        </Link>
      </div>
    </div>
  );
};
