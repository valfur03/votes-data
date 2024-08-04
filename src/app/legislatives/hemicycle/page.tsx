import { DeputiesGrid } from "@/components/deputies-grid/DeputiesGrid";
import { PageHeader } from "@/components/page-header/PageHeader";
import { PageHeaderTitle } from "@/components/page-header/PageHeaderTitle";
import { TAB_INITIAL_VALUE_SP_KEY } from "@/components/query-tabs/QueryTabs";
import { LEGISLATIVES_HEMICYCLE_PAGE_TITLE } from "@/constant/pages-title";
import { TERM_0b5c63073d424f4c90cccc17ea29c4dd } from "@/data/legislatives/term/0b5c63073d424f4c90cccc17ea29c4dd";
import { LegislativesHemicycleHeaderTabsSection } from "@/sections/legislatives/hemicycle/legislatives-hemicycle-header-tabs.section";
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
      </PageHeader>
      <section className="px-safe">
        <div className="m-auto max-w-screen-lg px-6 py-8">
          <header className="mb-8 flex flex-row items-center gap-4 md:mb-12 md:mt-4 lg:mb-16 lg:mt-8 lg:gap-8">
            <hr className="grow border-gray-400" />
            <h2 className="text-gray-700">Liste des députés</h2>
            <hr className="grow border-gray-400" />
          </header>
          <DeputiesGrid term={TERM_0b5c63073d424f4c90cccc17ea29c4dd} />
        </div>
      </section>
    </main>
  );
}
