import { ElectionTimeline } from "@/components/election-timeline/ElectionTimeline";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";

export const ElectionTimelineSection = () => {
  return (
    <PageHeaderSection className="flex justify-center p-8 sm:justify-start">
      <ElectionTimeline />
    </PageHeaderSection>
  );
};
