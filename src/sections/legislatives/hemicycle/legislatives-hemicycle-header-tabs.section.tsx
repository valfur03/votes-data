import { FrenchHemicycle } from "@/components/french-hemicycle/FrenchHemicycle";
import { HemicyclePieIcon } from "@/components/icon/HemicyclePie.icon";
import { HemicycleSeatsIcon } from "@/components/icon/HemicycleSeats.icon";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/tabs/Tabs";
import { TERM_0b5c63073d424f4c90cccc17ea29c4dd } from "@/data/legislatives/term/0b5c63073d424f4c90cccc17ea29c4dd";
import {
  LEGISLATIVES_HEMICYCLE_PIE_TAB,
  LEGISLATIVES_HEMICYCLE_SEATS_TAB,
} from "@/sections/legislatives/hemicycle/shared/constants/tabs";

export const LegislativesHemicycleHeaderTabsSection = () => {
  return (
    // TODO change to LEGISLATIVES_HEMICYCLE_PIE_TAB
    <Tabs defaultValue={LEGISLATIVES_HEMICYCLE_SEATS_TAB}>
      <PageHeaderSection className="grid grid-cols-3">
        <TabsList className="col-start-3 ml-auto w-fit">
          <TabsTrigger value={LEGISLATIVES_HEMICYCLE_PIE_TAB} size={"icon"}>
            <HemicyclePieIcon className="size-5" />
          </TabsTrigger>
          <TabsTrigger value={LEGISLATIVES_HEMICYCLE_SEATS_TAB} size={"icon"}>
            <HemicycleSeatsIcon className="size-5" />
          </TabsTrigger>
        </TabsList>
      </PageHeaderSection>
      <PageHeaderSection className="m-auto max-w-screen-lg p-2">
        <TabsContent value={LEGISLATIVES_HEMICYCLE_SEATS_TAB}>
          <FrenchHemicycle term={TERM_0b5c63073d424f4c90cccc17ea29c4dd} />
        </TabsContent>
      </PageHeaderSection>
    </Tabs>
  );
};
