import { ElectionTimelineStopCard } from "@/components/election-timeline/shared/components/ElectionTimelineStopCard";
import { ElectionTimelineStopCircle } from "@/components/election-timeline/shared/components/ElectionTimelineStopCircle";
import { cn } from "@/lib/utils/cn";
import { Election } from "@/types/election";
import { cva, VariantProps } from "class-variance-authority";

const electionDateVariants = cva("", {
  variants: {
    time: {
      passed:
        "mb-[calc((var(--election-timeline-spot-next-outer-size)-var(--election-timeline-spot-previous-size))/2)] flex w-full max-w-14 flex-col items-center gap-1 text-center",
      coming: "flex w-full max-w-48 flex-col items-center gap-2 text-center",
    },
  },
  defaultVariants: { time: "passed" },
});

export type ElectionTimelineStopProps = VariantProps<
  typeof electionDateVariants
> & {
  election: Election;
};

export const ElectionTimelineStop = ({
  election,
  time,
}: ElectionTimelineStopProps) => {
  return (
    <div className={cn(electionDateVariants({ time }))}>
      <ElectionTimelineStopCard election={election} time={time} />
      <ElectionTimelineStopCircle time={time} />
    </div>
  );
};
