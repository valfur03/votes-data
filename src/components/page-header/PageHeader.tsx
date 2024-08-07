import { Button } from "@/components/button/Button";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PropsWithChildren } from "react";

export type PageHeaderProps = PropsWithChildren<{
  className?: string;
  hasReturnButton?: boolean;
}>;

export const PageHeader = ({
  children,
  hasReturnButton = true,
}: PageHeaderProps) => {
  return (
    <header className="page-header flex flex-col [&>*]:order-1">
      {hasReturnButton && (
        <PageHeaderSection
          sectionClassName="order-1"
          className="max-w-screen-lg px-6 py-2"
        >
          <Button variant="link" asChild>
            <Link href=".">
              <ArrowLeftIcon />
              retour
            </Link>
          </Button>
        </PageHeaderSection>
      )}
      {children}
    </header>
  );
};
