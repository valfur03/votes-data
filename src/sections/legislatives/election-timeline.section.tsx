import { ElectionTimeline } from "@/components/election-timeline/ElectionTimeline";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";

export const ElectionTimelineSection = () => {
  return (
    <PageHeaderSection className="flex justify-start py-8 sm:p-8">
      <ElectionTimeline />
    </PageHeaderSection>
  );
};
