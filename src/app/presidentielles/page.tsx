import { PageContent } from "@/components/page-content/PageContent";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderTitle } from "@/components/page-header/PageHeaderTitle";
import { PRESIDENTIELLES_PAGE_TITLE } from "@/constant/pages-title";
import { DatavizCardsSection } from "@/sections/presidentielles/dataviz-cards.section";
import { ElectionTimelineSection } from "@/sections/presidentielles/election-timeline.section";

export default function PresidentiellesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle>{PRESIDENTIELLES_PAGE_TITLE}</PageHeaderTitle>
        <ElectionTimelineSection />
      </PageHeader>
      <PageContent>
        <DatavizCardsSection />
      </PageContent>
    </>
  );
}
