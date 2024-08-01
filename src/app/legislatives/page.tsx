import { PageContent } from "@/components/page-content/PageContent";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { DatavizCardsSection } from "@/sections/legislatives/dataviz-cards.section";

export default function LegislativesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderSection className="flex p-8"></PageHeaderSection>
      </PageHeader>
      <PageContent>
        <DatavizCardsSection />
      </PageContent>
    </>
  );
}
