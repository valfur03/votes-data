import { cn } from "@/lib/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const electionTimelineStopInnerCircleVariants = cva("", {
  variants: {
    time: {
      coming:
        "size-[--election-timeline-spot-next-inner-size] rounded-full bg-blue-france",
    },
  },
  defaultVariants: { time: "coming" },
});
const electionTimelineStopCircleVariants = cva("", {
  variants: {
    time: {
      passed:
        "size-[--election-timeline-spot-previous-size] shrink-0 rounded-full bg-indigo-100",
      coming:
        "box-border flex size-[--election-timeline-spot-next-outer-size] shrink-0 items-center justify-center rounded-full border-4 border-blue-france bg-white",
    },
  },
  defaultVariants: { time: "passed" },
});

export type ElectionTimelineStopCircle = VariantProps<
  typeof electionTimelineStopCircleVariants
>;

export const ElectionTimelineStopCircle = ({
  time,
}: ElectionTimelineStopCircle) => {
  return (
    <div className={cn(electionTimelineStopCircleVariants({ time }))}>
      {time === "coming" && (
        <div
          className={cn(electionTimelineStopInnerCircleVariants({ time }))}
        />
      )}
    </div>
  );
};
