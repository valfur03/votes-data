import { cn } from "@/lib/utils/cn";
import { PropsWithChildren } from "react";

export type PageHeaderSectionProps = PropsWithChildren<{
  className?: string;
}>;

export const PageHeaderSection = ({
  children,
  className,
}: PageHeaderSectionProps) => {
  return (
    <section className="px-safe bg-white last:rounded-b-lg">
      <div className={cn("m-auto max-w-4xl", className)}>{children}</div>
    </section>
  );
};
