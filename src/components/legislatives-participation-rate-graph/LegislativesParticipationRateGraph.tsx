import { AreaChart } from "@/components/d3-graphs/area-chart/AreaChart";

export const LegislativesParticipationRateGraph = () => {
  // x -> legislature; y -> participation rate of second round
  const data = [
    { x: 1, y: 76.32 },
    { x: 2, y: 72 },
    { x: 3, y: 79.73 },
    { x: 4, y: 77.82 },
    { x: 5, y: 81.89 },
    { x: 6, y: 84.66 },
    { x: 7, y: 74.46 },
    { x: 8, y: 78.5 },
    { x: 9, y: 69.89 },
    { x: 10, y: 67.38 },
    { x: 11, y: 71.08 },
    { x: 12, y: 60.32 },
    { x: 13, y: 59.99 },
    { x: 14, y: 55.4 },
    { x: 15, y: 42.64 },
    { x: 16, y: 46.23 },
    { x: 17, y: 66.63 },
  ];

  return <AreaChart vbWidth={712} vbHeight={316} data={data} />;
};
