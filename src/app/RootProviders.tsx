import { TooltipProvider } from "@/components/tooltip/Tooltip";
import { PropsWithChildren } from "react";

export type RootProvidersProps = PropsWithChildren;

export const RootProviders = ({ children }: RootProvidersProps) => {
  return (
    <>
      <TooltipProvider>{children}</TooltipProvider>
    </>
  );
};
