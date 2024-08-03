import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card/Card";
import { ElectionTimelineStopProps } from "@/components/election-timeline/shared/components/ElectionTimelineStop";
import { prettifyElectionDate } from "@/components/election-timeline/shared/utils/prettify-election-date";

export type ElectionTimelineStopCardProps = Pick<
  ElectionTimelineStopProps,
  "election" | "time"
>;

export const ElectionTimelineStopCard = ({
  election,
  time,
}: ElectionTimelineStopCardProps) => {
  const prettifiedElectionDate = prettifyElectionDate(election);

  return time === "passed" ? (
    <p className="text-xs text-neutral-700">{prettifiedElectionDate}</p>
  ) : (
    <Card className="w-[--election-timeline-card-next-width] gap-2">
      <CardHeader className="pb-0">
        <CardTitle className="whitespace-pre-line text-base font-semibold text-neutral-800">
          {prettifiedElectionDate}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>... dans 678 jours</p>
      </CardContent>
    </Card>
  );
};
