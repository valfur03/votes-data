import { FrenchHemicyclePie } from "@/components/french-hemicycle-pie/FrenchHemicyclePie";
import { FrenchHemicycleSeats } from "@/components/french-hemicycle/FrenchHemicycleSeats";
import { HemicyclePieIcon } from "@/components/icon/HemicyclePie.icon";
import { HemicycleSeatsIcon } from "@/components/icon/HemicycleSeats.icon";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { QueryTabs } from "@/components/query-tabs/QueryTabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/tabs/Tabs";
import { TERM_0b5c63073d424f4c90cccc17ea29c4dd } from "@/data/legislatives/term/0b5c63073d424f4c90cccc17ea29c4dd";
import {
  LEGISLATIVES_HEMICYCLE_PIE_TAB,
  LEGISLATIVES_HEMICYCLE_SEATS_TAB,
} from "@/sections/legislatives/hemicycle/shared/constants/tabs";
import { NextPageProps } from "@/types/next-page-props";

export type LegislativesHemicycleHeaderTabsSectionProps = {
  tab: NextPageProps["searchParams"][number];
};

export const LegislativesHemicycleHeaderTabsSection = ({
  tab,
}: LegislativesHemicycleHeaderTabsSectionProps) => {
  const selectedTab = Array.isArray(tab) ? tab[-1] : tab;

  return (
    // TODO change to LEGISLATIVES_HEMICYCLE_PIE_TAB
    <QueryTabs value={selectedTab || LEGISLATIVES_HEMICYCLE_SEATS_TAB} asChild>
      <PageHeaderSection>
        <div className="grid grid-cols-3 px-6">
          <TabsList className="col-start-3 ml-auto w-fit">
            <TabsTrigger value={LEGISLATIVES_HEMICYCLE_PIE_TAB} size={"icon"}>
              <HemicyclePieIcon className="size-5" />
            </TabsTrigger>
            <TabsTrigger value={LEGISLATIVES_HEMICYCLE_SEATS_TAB} size={"icon"}>
              <HemicycleSeatsIcon className="size-5" />
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="m-auto max-w-screen-lg p-2">
          <TabsContent value={LEGISLATIVES_HEMICYCLE_SEATS_TAB}>
            <FrenchHemicycleSeats
              term={TERM_0b5c63073d424f4c90cccc17ea29c4dd}
            />
          </TabsContent>
          <TabsContent value={LEGISLATIVES_HEMICYCLE_PIE_TAB}>
            <FrenchHemicyclePie term={TERM_0b5c63073d424f4c90cccc17ea29c4dd} />
          </TabsContent>
        </div>
      </PageHeaderSection>
    </QueryTabs>
  );
};
