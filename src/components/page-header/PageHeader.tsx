import {
  PageContent,
  PageContentProps,
} from "@/components/page-content/PageContent";

export type PageHeaderProps = PageContentProps;

export const PageHeader = ({ children }: PageHeaderProps) => {
  return <PageContent>{children}</PageContent>;
};
