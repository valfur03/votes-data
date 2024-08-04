import {
  DatavizCard,
  DatavizCardBanner,
  DatavizCardContent,
  DatavizCardFooter,
  DatavizCardHeader,
  DatavizCardTitle,
} from "@/components/dataviz-card/DatavizCard";
import { FrenchHemicyclePie } from "@/components/french-hemicycle-pie/FrenchHemicyclePie";
import { PageContentCardsGridSection } from "@/components/page-content/PageContentCardsGridSection";
import { DATAVIZ_PAGES } from "@/data/legislatives/dataviz/pages";
import { TERM_0b5c63073d424f4c90cccc17ea29c4dd } from "@/data/legislatives/term/0b5c63073d424f4c90cccc17ea29c4dd";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const DatavizCardsSection = () => {
  return (
    <PageContentCardsGridSection>
      {DATAVIZ_PAGES.map(({ title, description, href }) => (
        <Link href={href} key={`${title}-${href}`}>
          <DatavizCard>
            <DatavizCardBanner className="p-6">
              <FrenchHemicyclePie
                term={TERM_0b5c63073d424f4c90cccc17ea29c4dd}
              />
            </DatavizCardBanner>
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
