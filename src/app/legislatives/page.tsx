import { PageContent } from "@/components/page-content/PageContent";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderTitle } from "@/components/page-header/PageHeaderTitle";
import { LEGISLATIVES_PAGE_TITLE } from "@/constant/pages-title";
import { DATAVIZ_PAGES } from "@/data/legislatives/dataviz/pages";
import { ElectionTimelineSection } from "@/sections/legislatives/election-timeline.section";
import { DatavizCardsSection } from "@/sections/shared/dataviz-cards/dataviz-cards.section";

export default function LegislativesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle>{LEGISLATIVES_PAGE_TITLE}</PageHeaderTitle>
        <ElectionTimelineSection />
      </PageHeader>
      <PageContent>
        <DatavizCardsSection pages={DATAVIZ_PAGES} />
      </PageContent>
    </>
  );
}
