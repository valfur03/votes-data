import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card/Card";
import { prettifyElectionDate } from "@/components/election-timeline/shared/utils/prettify-election-date";
import { LEGISLATIVES_ELECTIONS } from "@/data/legislatives/elections";

export const ElectionTimeline = () => {
  const [nextElection, previousElection] = LEGISLATIVES_ELECTIONS;

  return (
    <div className="election-timeline relative w-full max-w-[--election-timeline-max-width]">
      <div className="relative z-10 flex flex-row items-end justify-between pl-[calc(var(--election-timeline-xs-spots-padding-x)+env(safe-area-inset-left))] pr-[--election-timeline-xs-spots-padding-x] sm:px-[--election-timeline-sm-spots-padding-x]">
        <div className="mb-[calc((var(--election-timeline-spot-next-outer-size)-var(--election-timeline-spot-previous-size))/2)] flex w-full max-w-14 flex-col items-center gap-1 text-center">
          <div className="w-full">
            <p className="text-xs text-neutral-700">
              {prettifyElectionDate(previousElection)}
            </p>
          </div>
          <div className="size-[--election-timeline-spot-previous-size] shrink-0 rounded-full bg-indigo-100" />
        </div>
        <div className="flex w-full max-w-48 flex-col items-center gap-2 text-center">
          <Card className="w-[--election-timeline-card-next-width] gap-2">
            <CardHeader className="pb-0">
              <CardTitle className="whitespace-pre-line text-base font-semibold text-neutral-800">
                {prettifyElectionDate(nextElection)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>... dans 678 jours</p>
            </CardContent>
          </Card>
          <div className="box-border flex size-[--election-timeline-spot-next-outer-size] shrink-0 items-center justify-center rounded-full border-4 border-blue-france bg-white">
            <div className="size-[--election-timeline-spot-next-inner-size] rounded-full bg-blue-france" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[calc(var(--election-timeline-spot-next-outer-size)/2-var(--election-timeline-line-height)/2)] h-[--election-timeline-line-height] w-[calc(100%-var(--election-timeline-xs-spots-padding-x)-var(--election-timeline-card-next-width)/2)] rounded-full bg-gradient-to-r from-transparent via-indigo-100 via-[calc(var(--election-timeline-xs-spots-padding-x)*2)] to-blue-france to-[calc(100%-var(--election-timeline-xs-spots-padding-x)*2)] sm:w-[calc(100%-var(--election-timeline-sm-spots-padding-x)-var(--election-timeline-card-next-width)/2)] sm:via-[calc(var(--election-timeline-sm-spots-padding-x)*2)] sm:to-[calc(100%-var(--election-timeline-sm-spots-padding-x)*2)]" />
    </div>
  );
};
