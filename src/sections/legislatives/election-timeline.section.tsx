import { ElectionTimeline } from "@/components/election-timeline/ElectionTimeline";
import { PageHeaderSection } from "@/components/page-header/PageHeaderSection";

export const ElectionTimelineSection = () => {
  return (
    <PageHeaderSection className="flex p-8">
      <ElectionTimeline />
    </PageHeaderSection>
  );
};
