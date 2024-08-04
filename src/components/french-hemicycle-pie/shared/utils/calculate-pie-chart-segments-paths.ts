import { FrenchHemicyclePiePathsProps } from "@/components/french-hemicycle-pie/shared/components/FrenchHemicyclePiePaths";
import { degreesToRadian } from "@/lib/utils/degrees-to-radian";

export type SegmentsAccumulatorInPieChart = {
  startAngle: number;
  paths: Array<{ id: string; d: string; fill: string }>;
};

export const calculateSegmentSvgStartCommand = (
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
) => {
  const start = {
    x: cx + r * Math.cos(startAngle),
    y: cy + r * Math.sin(startAngle),
  };

  return `M ${start.x} ${start.y}`;
};

export const calculateSegmentSvgArcCommand = (
  cx: number,
  cy: number,
  r: number,
  endAngle: number,
  isOuter: boolean,
) => {
  const end = {
    x: cx + r * Math.cos(endAngle),
    y: cy + r * Math.sin(endAngle),
  };

  return `A ${r} ${r} 0 0 ${isOuter ? 1 : 0} ${end.x} ${end.y}`;
};

export const calculateSegmentPathBetweenTwoAngles = (
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number,
) => {
  const startCommand = calculateSegmentSvgStartCommand(
    cx,
    cy,
    outerR,
    startAngle,
  );
  const outerArcCommand = calculateSegmentSvgArcCommand(
    cx,
    cy,
    outerR,
    endAngle,
    true,
  );
  const lineCommand = `L ${cx + innerR * Math.cos(endAngle)} ${cy + innerR * Math.sin(endAngle)}`;
  const innerArcCommand = calculateSegmentSvgArcCommand(
    cx,
    cy,
    innerR,
    startAngle,
    false,
  );

  return startCommand + outerArcCommand + lineCommand + innerArcCommand + "Z";
};

export const calculateSegmentPathWithAccumulator =
  (
    cx: number,
    cy: number,
    outerR: number,
    innerR: number,
    valuesTotal: number,
    maxAngle: number,
  ) =>
  (
    { startAngle, paths }: SegmentsAccumulatorInPieChart,
    segment: FrenchHemicyclePiePathsProps["groups"][number],
  ): {
    startAngle: number;
    paths: SegmentsAccumulatorInPieChart["paths"];
  } => {
    const endAngle = startAngle + (segment.value / valuesTotal) * maxAngle;
    const segmentPath = calculateSegmentPathBetweenTwoAngles(
      cx,
      cy,
      outerR,
      innerR,
      startAngle,
      endAngle,
    );

    return {
      startAngle: endAngle,
      paths: [
        { id: segment.id, d: segmentPath, fill: segment.color },
        ...paths,
      ],
    };
  };

export const calculatePieChartSegmentsPaths = (
  data: FrenchHemicyclePiePathsProps["groups"],
  width: number,
) => {
  const anglesOffset = 6.2;
  const cx = width / 2; // Center x
  const cy = width / 2; // Center y
  const outerR = width / 2; // Outer radius
  const innerR = outerR * 0.4; // Inner radius
  const maxAngle = Math.PI + degreesToRadian(anglesOffset) * 2;

  const valuesTotal = data.reduce((sum, { value }) => sum + value, 0);

  return data.reduce(
    calculateSegmentPathWithAccumulator(
      cx,
      cy,
      outerR,
      innerR,
      valuesTotal,
      maxAngle,
    ),
    {
      startAngle: -Math.PI - degreesToRadian(anglesOffset),
      paths: [],
    },
  )["paths"];
};
