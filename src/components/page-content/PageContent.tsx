import { cn } from "@/lib/utils/cn";
import { PropsWithChildren } from "react";

export type PageContentProps = PropsWithChildren<{
  className?: string;
}>;

export const PageContent = ({ children, className }: PageContentProps) => {
  return <div className={cn(className)}>{children}</div>;
};
