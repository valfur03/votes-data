import { PageContent } from "@/components/page-content/PageContent";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderTitle } from "@/components/page-header/PageHeaderTitle";
import { LEGISLATIVES_PAGE_TITLE } from "@/constant/pages-title";
import { DatavizCardsSection } from "@/sections/legislatives/dataviz-cards.section";
import { ElectionTimelineSection } from "@/sections/legislatives/election-timeline.section";

export default function LegislativesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle>{LEGISLATIVES_PAGE_TITLE}</PageHeaderTitle>
        <ElectionTimelineSection />
      </PageHeader>
      <PageContent>
        <DatavizCardsSection />
      </PageContent>
    </>
  );
}
