import { LegislativesElectionGroupScore } from "@/components/legislatives-election-group-score/LegislativesElectionGroupScore";
import { calculateGroupParts } from "@/lib/utils/calculate-group-parts";
import { Term } from "@/types/term";

export type LegislativesElectionGroupsScoresGridProps = {
  term: Term;
};

export const LegislativesElectionGroupsScoresGrid = ({
  term,
}: LegislativesElectionGroupsScoresGridProps) => {
  const groupParts = calculateGroupParts(term.mandates);
  const valuesTotal = Object.values(groupParts).reduce(
    (sum, value) => sum + value,
    0,
  );

  return (
    <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
      {term.groups.map((group) => (
        <LegislativesElectionGroupScore
          color={group.color}
          name={group.name}
          shortName={group.shortName}
          value={groupParts[group.id]}
          valuesTotal={valuesTotal}
          key={group.id}
        />
      ))}
    </div>
  );
};
