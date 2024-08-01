import {
  DatavizCard,
  DatavizCardContent,
  DatavizCardFooter,
  DatavizCardHeader,
  DatavizCardTitle,
} from "@/components/dataviz-card/DatavizCard";
import { PageContentCardsGridSection } from "@/components/page-content/PageContentCardsGridSection";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const LegislativesPageDatavizCardsSection = () => {
  return (
    <PageContentCardsGridSection>
      <Link href="/legislatives/hemicycle">
        <DatavizCard>
          <DatavizCardHeader>
            <DatavizCardTitle>Composition de l&apos;hémicycle</DatavizCardTitle>
          </DatavizCardHeader>
          <DatavizCardContent>
            <p>
              Repérez le siège de vos députés et visualisez la composition de
              l&apos;assemblée par groupe.
            </p>
          </DatavizCardContent>
          <DatavizCardFooter>
            <ArrowRightIcon className="size-6" />
          </DatavizCardFooter>
        </DatavizCard>
      </Link>
    </PageContentCardsGridSection>
  );
};
