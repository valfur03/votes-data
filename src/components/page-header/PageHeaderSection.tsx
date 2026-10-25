import {
  PageContentSection,
  PageContentSectionProps,
} from "@/components/page-content/PageContentSection";
import { cn } from "@/lib/utils/cn";

export type PageHeaderSectionProps = PageContentSectionProps & {
  beforeReturn?: boolean;
};

export const PageHeaderSection = ({
  beforeReturn = false,
  children,
  className,
  sectionClassName,
}: PageHeaderSectionProps) => {
  return (
    <PageContentSection
      sectionClassName={cn(
        "border-neutral-300 bg-white last:rounded-b-lg last:border-b last:shadow-xs",
        {
          "before-return": beforeReturn,
        },
        sectionClassName,
      )}
      className={cn(
        "header-section max-w-(--header-section-max-width)",
        className,
      )}
    >
      {children}
    </PageContentSection>
  );
};
