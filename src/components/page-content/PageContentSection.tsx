import { cn } from "@/lib/utils/cn";
import { PropsWithChildren } from "react";

export type PageContentSectionProps = PropsWithChildren<{
  className?: string;
  sectionClassName?: string;
}>;

export const PageContentSection = ({
  children,
  className,
  sectionClassName,
}: PageContentSectionProps) => {
  return (
    <section className={cn("px-safe last:rounded-b-lg", sectionClassName)}>
      <div className={cn("m-auto max-w-screen-lg", className)}>{children}</div>
    </section>
  );
};
