import { ElectionTimeline } from "@/components/election-timeline/ElectionTimeline";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";
import { LEGISLATIVES_ELECTIONS } from "@/data/legislatives/elections";

export const ElectionTimelineSection = () => {
  const [nextElection, previousElection] = LEGISLATIVES_ELECTIONS;

  return (
    <PageHeaderSection className="flex justify-start py-8 sm:px-[--header-section-padding-x]">
      <ElectionTimeline
        nextElection={nextElection}
        previousElection={previousElection}
      />
    </PageHeaderSection>
  );
};
