import { PageContentSection } from "@/components/page-content/PageContentSection";
import { cn } from "@/lib/utils/cn";
import { PropsWithChildren } from "react";

export type PageContentCardsGridSectionProps = PropsWithChildren<{
  className?: string;
}>;

export const PageContentCardsGridSection = ({
  children,
  className,
}: PageContentCardsGridSectionProps) => {
  return (
    <PageContentSection
      className={cn(
        "grid w-fit grid-cols-1 gap-8 p-8 lg:grid-cols-[repeat(2,448px)]",
        className,
      )}
    >
      {children}
    </PageContentSection>
  );
};
