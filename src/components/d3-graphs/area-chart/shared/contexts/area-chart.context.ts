"use client";

import { AreaChartData } from "@/components/d3-graphs/area-chart/AreaChart";
import { ScaleLinear } from "d3";
import { createContext } from "react";

export type Extents = { min: number; max: number };

export type AreaChartContextType = {
  data: AreaChartData;
  width: number;
  height: number;
  extents: {
    x: Extents;
    y: Extents;
  };
  factories: {
    x: ScaleLinear<number, number>;
    y: ScaleLinear<number, number>;
  };
};

export const AreaChartContext = createContext<AreaChartContextType | null>(
  null,
);
