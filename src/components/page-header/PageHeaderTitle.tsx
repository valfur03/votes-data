import { PropsWithChildren } from "react";

import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";

export type PageHeaderTitleProps = PropsWithChildren;

export const PageHeaderTitle = ({ children }: PageHeaderTitleProps) => {
  return (
    <PageHeaderSection
      beforeReturn={true}
      className="m-auto max-w-screen-lg p-6 pb-0"
    >
      <h1>{children}</h1>
    </PageHeaderSection>
  );
};
