import { FrenchHemicyclePiePaths } from "@/components/french-hemicycle-pie/shared/components/FrenchHemicyclePiePaths";
import { cn } from "@/lib/utils/cn";
import { Term } from "@/types/term";

export type FrenchHemicyclePieProps = {
  className?: string;
  term: Term;
  vbHeight?: number;
  vbWidth?: number;
};

export const FrenchHemicyclePie = ({
  className,
  term,
  vbHeight = 139,
  vbWidth = 237,
}: FrenchHemicyclePieProps) => {
  const groupParts = term.mandates.reduce<Record<string, number>>(
    (acc, mandate) => {
      const groupId = mandate.group.id;

      return {
        ...acc,
        [groupId]: acc[groupId] !== undefined ? acc[groupId] + 1 : 0,
      };
    },
    {},
  );

  const orderedGroupParts = term.groups.map((group) => {
    return {
      id: group.id,
      value: groupParts[group.id],
      name: group.name,
      shortName: group.shortName,
      color: group.color,
    };
  });

  return (
    <svg
      viewBox={`0 0 ${vbWidth} ${vbHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g>
        <FrenchHemicyclePiePaths groups={orderedGroupParts} vbWidth={vbWidth} />
      </g>
    </svg>
  );
};
