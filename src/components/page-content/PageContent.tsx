import { PropsWithChildren } from "react";

export type PageContentProps = PropsWithChildren;

export const PageContent = ({ children }: PageContentProps) => {
  return <div>{children}</div>;
};
