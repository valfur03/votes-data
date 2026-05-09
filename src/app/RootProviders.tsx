import { PropsWithChildren } from "react";

import { TooltipProvider } from "@/components/tooltip/Tooltip";

export type RootProvidersProps = PropsWithChildren;

export const RootProviders = ({ children }: RootProvidersProps) => {
  return (
    <>
      <TooltipProvider>{children}</TooltipProvider>
    </>
  );
};
