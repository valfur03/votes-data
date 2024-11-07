"use client";

import { AreaChartContext } from "@/components/d3-graphs/area-chart/shared/contexts/area-chart.context";
import { useContext } from "react";

export const useAreaChart = () => {
  return useContext(AreaChartContext);
};
