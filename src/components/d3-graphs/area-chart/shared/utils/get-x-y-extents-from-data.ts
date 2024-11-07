import { AreaChartData } from "@/components/d3-graphs/area-chart/AreaChart";
import * as d3 from "d3";

export const getXYExtentsFromData = (data: AreaChartData) => {
  const [xMin = 1, xMax = 1] = d3.extent(data, (d) => d.x);
  const [yMin = 0, yMax = 100] = [
    Math.max(0, d3.min(data, (d) => d.y) ?? 0),
    d3.max(data, (d) => d.y),
  ];

  return [
    [xMin, xMax],
    [yMin, yMax],
  ];
};
