import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { PropsWithChildren } from "react";

export type PageHeaderSubtitleProps = PropsWithChildren;

export const PageHeaderSubtitle = ({ children }: PageHeaderSubtitleProps) => {
  return (
    <PageHeaderSection
      beforeReturn={true}
      className="m-auto max-w-screen-lg px-6 py-2 text-neutral-700"
    >
      <p>{children}</p>
    </PageHeaderSection>
  );
};
