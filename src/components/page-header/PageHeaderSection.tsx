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
      <div className={cn("m-auto max-w-screen-lg p-2 w-full", className)}>
        {children}
      </div>
    </section>
  );
};
