import { PageContent } from "@/components/page-content/PageContent";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { DatavizCardsSection } from "@/sections/legislatives/dataviz-cards.section";
import { ElectionTimelineSection } from "@/sections/legislatives/election-timeline.section";

export default function LegislativesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderSection
          beforeReturn={true}
          className="m-auto max-w-screen-lg p-6 pb-0"
        >
          <h1>Élections législatives</h1>
        </PageHeaderSection>
        <ElectionTimelineSection />
      </PageHeader>
      <PageContent>
        <DatavizCardsSection />
      </PageContent>
    </>
  );
}
