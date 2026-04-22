"use client";

import { useContext } from "react";

import { AreaChartContext } from "@/components/d3-graphs/area-chart/shared/contexts/area-chart.context";

export const useAreaChart = () => {
  return useContext(AreaChartContext);
};
