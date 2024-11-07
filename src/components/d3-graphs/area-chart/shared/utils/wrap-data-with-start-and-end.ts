import { AreaChartData } from "@/components/d3-graphs/area-chart/AreaChart";
import * as d3 from "d3";

export type wrapDataWithStartAndEndOptions = {
  yOffset?: number;
};

export const wrapDataWithStartAndEnd = (
  data: AreaChartData,
  options: wrapDataWithStartAndEndOptions = {},
) => {
  const { yOffset = 15 } = options;

  if (data.length === 0) {
    return data;
  }

  return [
    {
      ...data[0],
      x: data[0].x - 1,
    },
    ...data,
    {
      x: data[data.length - 1].x + 1,
      y: (d3.min(data, (d) => d.y) ?? 0) - yOffset,
    },
  ];
};
