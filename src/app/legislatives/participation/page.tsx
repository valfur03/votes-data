import { LegislativesParticipationRateGraph } from "@/components/legislatives-participation-rate-graph/LegislativesParticipationRateGraph";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { PageHeaderTitle } from "@/components/page-header/PageHeaderTitle";
import { LEGISLATIVES_PARTICIPATION_PAGE_TITLE } from "@/constant/pages-title";

export default function LegislativesParticipationPage() {
  return (
    <main>
      <PageHeader>
        <PageHeaderTitle>
          {LEGISLATIVES_PARTICIPATION_PAGE_TITLE}
        </PageHeaderTitle>
        <PageHeaderSection className="px-2 py-8">
          <LegislativesParticipationRateGraph />
        </PageHeaderSection>
      </PageHeader>
    </main>
  );
}
