"use client";

import { AreaChartData } from "@/components/d3-graphs/area-chart/AreaChart";
import {
  AreaChartContext,
  AreaChartContextType,
} from "@/components/d3-graphs/area-chart/shared/contexts/area-chart.context";
import { getXYExtentsFromData } from "@/components/d3-graphs/area-chart/shared/utils/get-x-y-extents-from-data";
import * as d3 from "d3";
import { PropsWithChildren } from "react";

export type AreaChartProviderProps = PropsWithChildren<{
  data: AreaChartData;
  width: number;
  height: number;
}>;

export const AreaChartProvider = ({
  children,
  data,
  width,
  height,
  ...props
}: AreaChartProviderProps) => {
  const [[xMin, xMax], [yMin, yMax]] = getXYExtentsFromData(data);
  const x = d3.scaleLinear().domain([xMin, xMax]).range([0, width]);
  const y = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .range([height - 26, 0]);

  const value: AreaChartContextType = {
    ...props,
    data,
    width,
    height,
    extents: {
      x: {
        min: xMin,
        max: xMax,
      },
      y: {
        min: yMin,
        max: yMax,
      },
    },
    factories: { x, y },
  };

  return (
    <AreaChartContext.Provider value={value}>
      {children}
    </AreaChartContext.Provider>
  );
};
