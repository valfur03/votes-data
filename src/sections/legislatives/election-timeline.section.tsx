import { ElectionTimeline } from "@/components/election-timeline/ElectionTimeline";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";

export const ElectionTimelineSection = () => {
  return (
    <PageHeaderSection className="flex justify-start py-8 sm:p-[--header-section-padding-x]">
      <ElectionTimeline />
    </PageHeaderSection>
  );
};
