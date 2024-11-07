import { DeputiesGrid } from "@/components/deputies-grid/DeputiesGrid";
import { LegislativesElectionGroupsScoresGrid } from "@/components/legislatives-election-group-score/LegislativesElectionGroupsScoresGrid";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { PageHeaderTitle } from "@/components/page-header/PageHeaderTitle";
import { TAB_INITIAL_VALUE_SP_KEY } from "@/components/query-tabs/shared/constants/tab-initial-value-sp-key";
import { TitleDivider } from "@/components/title-divider/TitleDivider";
import { LEGISLATIVES_HEMICYCLE_PAGE_TITLE } from "@/constant/pages-title";
import { TERM_0b5c63073d424f4c90cccc17ea29c4dd } from "@/data/legislatives/term/0b5c63073d424f4c90cccc17ea29c4dd";
import { LegislativesHemicycleHeaderTabsSection } from "@/sections/legislatives/hemicycle/LegislativesHemicycleHeaderTabs.section";
import { NextPageProps } from "@/types/next-page-props";

export default function LegislativesHemicyclePage({
  searchParams,
}: NextPageProps) {
  const tab = searchParams[TAB_INITIAL_VALUE_SP_KEY];

  return (
    <main>
      <PageHeader>
        <PageHeaderTitle>{LEGISLATIVES_HEMICYCLE_PAGE_TITLE}</PageHeaderTitle>
        <LegislativesHemicycleHeaderTabsSection tab={tab} />
        <PageHeaderSection className="px-2 py-8">
          <LegislativesElectionGroupsScoresGrid
            term={TERM_0b5c63073d424f4c90cccc17ea29c4dd}
          />
        </PageHeaderSection>
      </PageHeader>
      <section className="px-safe">
        <div className="m-auto max-w-screen-lg px-6 py-8">
          <TitleDivider>Liste des députés</TitleDivider>
          <DeputiesGrid term={TERM_0b5c63073d424f4c90cccc17ea29c4dd} />
        </div>
      </section>
    </main>
  );
}
