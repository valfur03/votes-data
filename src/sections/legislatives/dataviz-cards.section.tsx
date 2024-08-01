import {
  DatavizCard,
  DatavizCardContent,
  DatavizCardFooter,
  DatavizCardHeader,
  DatavizCardTitle,
} from "@/components/dataviz-card/DatavizCard";
import { PageContentCardsGridSection } from "@/components/page-content/PageContentCardsGridSection";
import { DATAVIZ_PAGES } from "@/data/legislatives/dataviz/pages";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const DatavizCardsSection = () => {
  return (
    <PageContentCardsGridSection>
      {DATAVIZ_PAGES.map(({ title, description, href }) => (
        <Link href={href} key={`${title}-${href}`}>
          <DatavizCard>
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
