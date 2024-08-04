import { calculatePieChartSegmentsPaths } from "@/components/french-hemicycle-pie/shared/utils/calculate-pie-chart-segments-paths";

export type FrenchHemicyclePiePathsProps = {
  groups: Array<{ id: string; value: number; color: string }>;
  vbWidth: number;
};

export const FrenchHemicyclePiePaths = ({
  groups,
  vbWidth,
}: FrenchHemicyclePiePathsProps) => {
  const paths = calculatePieChartSegmentsPaths(groups, vbWidth);

  return (
    <>
      {paths.map((segment) => (
        <path d={segment.d} fill={segment.fill} key={segment.id} />
      ))}
    </>
  );
};
