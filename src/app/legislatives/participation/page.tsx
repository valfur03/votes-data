import { DistrictsList } from "@/components/districts-grid/DistrictsList";
import { LegislativesParticipationRateGraph } from "@/components/legislatives-participation-rate-graph/LegislativesParticipationRateGraph";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { PageHeaderTitle } from "@/components/page-header/PageHeaderTitle";
import { TitleDivider } from "@/components/title-divider/TitleDivider";
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
      <section className="px-safe">
        {/*TODO component*/}
        <div className="m-auto max-w-screen-lg p-8">
          <TitleDivider>Liste des circonscriptions</TitleDivider>
          <DistrictsList />
        </div>
      </section>
    </main>
  );
}
