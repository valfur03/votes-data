import { ElectionTimelineStop } from "@/components/election-timeline/shared/components/ElectionTimelineStop";
import { Election } from "@/types/election";

export type ElectionTimelineProps = {
  nextElection: Election;
  previousElection: Election;
};

export const ElectionTimeline = ({
  nextElection,
  previousElection,
}: ElectionTimelineProps) => {
  return (
    <div className="election-timeline relative w-full max-w-[--election-timeline-max-width]">
      <div className="relative z-10 flex flex-row items-end justify-between pl-[calc(var(--election-timeline-xs-spots-padding-x)+env(safe-area-inset-left))] pr-[--election-timeline-xs-spots-padding-x] sm:px-[--election-timeline-sm-spots-padding-x]">
        <ElectionTimelineStop election={previousElection} time={"passed"} />
        <ElectionTimelineStop election={nextElection} time={"coming"} />
      </div>
      <div className="absolute bottom-[calc(var(--election-timeline-spot-next-outer-size)/2-var(--election-timeline-line-height)/2)] h-[--election-timeline-line-height] w-[calc(100%-var(--election-timeline-xs-spots-padding-x)-var(--election-timeline-card-next-width)/2)] rounded-full bg-gradient-to-r from-transparent via-indigo-100 via-[calc(var(--election-timeline-xs-spots-padding-x)*2)] to-blue-france to-[calc(100%-var(--election-timeline-xs-spots-padding-x)*2)] sm:w-[calc(100%-var(--election-timeline-sm-spots-padding-x)-var(--election-timeline-card-next-width)/2)] sm:via-[calc(var(--election-timeline-sm-spots-padding-x)*2)] sm:to-[calc(100%-var(--election-timeline-sm-spots-padding-x)*2)]" />
    </div>
  );
};
