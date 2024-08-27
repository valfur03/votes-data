import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { PageHeaderSubtitle } from "@/components/page-header/PageHeadersubtitle";
import { PageHeaderTitle } from "@/components/page-header/PageHeaderTitle";
import { ParticipationRateStackedAreas } from "@/components/participation-rate-stacked-areas/ParticipationRateStackedAreas";

export default function LegislativesParticipationPage() {
  return (
    <main>
      <PageHeader>
        <PageHeaderTitle>Taux de participation</PageHeaderTitle>
        <PageHeaderSubtitle>Élections législatives</PageHeaderSubtitle>
        <PageHeaderSection>
          <ParticipationRateStackedAreas />
        </PageHeaderSection>
      </PageHeader>
    </main>
  );
}
