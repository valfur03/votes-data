import { Divider } from "@/components/divider/Divider";
import { PropsWithChildren } from "react";

export type TitleDividerPrpos = PropsWithChildren;

export const TitleDivider = ({ children }: TitleDividerPrpos) => {
  // useless in mobile
  return (
    <header className="mb-8 flex flex-row items-center gap-4 md:mb-12 md:mt-4 lg:mb-16 lg:mt-8 lg:gap-8">
      <Divider className="grow" />
      <h2 className="text-gray-700">{children}</h2>
      <Divider className="grow" />
    </header>
  );
};
