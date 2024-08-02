import {
  PageContentSection,
  PageContentSectionProps,
} from "@/components/page-content/PageContentSection";
import { cn } from "@/lib/utils/cn";

export type PageHeaderSectionProps = PageContentSectionProps;

export const PageHeaderSection = ({
  children,
  className,
  sectionClassName,
}: PageHeaderSectionProps) => {
  return (
    <PageContentSection
      sectionClassName={cn(
        "bg-white last:shadow-sm last:border-b border-neutral-300 last:rounded-b-lg",
        sectionClassName,
      )}
      className={cn(
        "header-section max-w-[--header-section-max-width]",
        className,
      )}
    >
      {children}
    </PageContentSection>
  );
};
