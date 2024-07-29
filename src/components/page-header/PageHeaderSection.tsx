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
      sectionClassName={cn("bg-white last:rounded-b-lg", sectionClassName)}
      className={cn("max-w-4xl", className)}
    >
      {children}
    </PageContentSection>
  );
};
