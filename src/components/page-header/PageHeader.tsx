import { PropsWithChildren } from "react";

export type PageHeaderProps = PropsWithChildren;

export const PageHeader = ({ children }: PageHeaderProps) => {
  return <div>{children}</div>;
};
