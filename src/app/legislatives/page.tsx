import {
  DatavizCard,
  DatavizCardContent,
  DatavizCardFooter,
  DatavizCardHeader,
  DatavizCardTitle,
} from "@/components/dataviz-card/DatavizCard";
import { PageContent } from "@/components/page-content/PageContent";
import { PageContentCardsGridSection } from "@/components/page-content/PageContentCardsGridSection";
import { PageContentSection } from "@/components/page-content/PageContentSection";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function LegislativesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderSection className="flex p-8"></PageHeaderSection>
      </PageHeader>
      <PageContent>
        <PageContentCardsGridSection>
          <Link href="/legislatives/hemicycle">
            <DatavizCard>
              <DatavizCardHeader>
                <DatavizCardTitle>
                  Composition de l&apos;hémicycle
                </DatavizCardTitle>
              </DatavizCardHeader>
              <DatavizCardContent>
                <p>
                  Repérez le siège de vos députés et visualisez la composition
                  de l&apos;assemblée par groupe.
                </p>
              </DatavizCardContent>
              <DatavizCardFooter>
                <ArrowRightIcon className="size-6" />
              </DatavizCardFooter>
            </DatavizCard>
          </Link>
        </PageContentCardsGridSection>
      </PageContent>
    </>
  );
}
