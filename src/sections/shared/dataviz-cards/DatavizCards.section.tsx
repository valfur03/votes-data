import {
  DatavizCard,
  DatavizCardBanner,
  DatavizCardContent,
  DatavizCardFooter,
  DatavizCardHeader,
  DatavizCardTitle,
} from "@/components/dataviz-card/DatavizCard";
import { PageContentCardsGridSection } from "@/components/page-content/PageContentCardsGridSection";
import { EmptyDatavizCardsSection } from "@/sections/shared/dataviz-cards/EmptyDatavizCards.section";
import { DatavizCardLink } from "@/types/dataviz-card-link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export type DatavizCardsSectionProps = {
  pages: Array<DatavizCardLink>;
};

export const DatavizCardsSection = ({ pages }: DatavizCardsSectionProps) => {
  if (pages.length === 0) {
    return <EmptyDatavizCardsSection />;
  }

  return (
    <PageContentCardsGridSection>
      {pages.map(({ banner, title, description, href }) => (
        <Link href={href} key={`${title}-${href}`}>
          <DatavizCard>
            <DatavizCardBanner className="p-6">{banner}</DatavizCardBanner>
            <DatavizCardHeader>
              <DatavizCardTitle>{title}</DatavizCardTitle>
            </DatavizCardHeader>
            <DatavizCardContent>
              <p>{description}</p>
            </DatavizCardContent>
            <DatavizCardFooter>
              <ArrowRightIcon className="size-6" />
            </DatavizCardFooter>
          </DatavizCard>
        </Link>
      ))}
    </PageContentCardsGridSection>
  );
};
