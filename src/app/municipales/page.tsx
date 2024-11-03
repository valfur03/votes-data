import { PageContent } from "@/components/page-content/PageContent";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderTitle } from "@/components/page-header/PageHeaderTitle";
import { MUNICIPALES_PAGE_TITLE } from "@/constant/pages-title";
import { ElectionTimelineSection } from "@/sections/municipales/ElectionTimeline.section";
import { EmptyDatavizCardsSection } from "@/sections/shared/dataviz-cards/EmptyDatavizCards.section";

export default function MunicipalesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderTitle>{MUNICIPALES_PAGE_TITLE}</PageHeaderTitle>
        <ElectionTimelineSection />
      </PageHeader>
      <PageContent>
        <EmptyDatavizCardsSection />
      </PageContent>
    </>
  );
}
