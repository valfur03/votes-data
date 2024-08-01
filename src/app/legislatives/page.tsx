import { LegislativesPageDatavizCardsSection } from "@/components/legislatives-page-dataviz-cards-section/LegislativesPageDatavizCardsSection";
import { PageContent } from "@/components/page-content/PageContent";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";

export default function LegislativesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderSection className="flex p-8"></PageHeaderSection>
      </PageHeader>
      <PageContent>
        <LegislativesPageDatavizCardsSection />
      </PageContent>
    </>
  );
}
