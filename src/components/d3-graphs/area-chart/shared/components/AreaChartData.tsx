"use client";

import { AreaChartSingleData } from "@/components/d3-graphs/area-chart/AreaChart";
import { useAreaChart } from "@/components/d3-graphs/area-chart/shared/hooks/use-area-chart";
import * as d3 from "d3";
import React from "react";

export const AreaChartData = () => {
  const areaChart = useAreaChart();
  if (areaChart === null) {
    return null;
  }

  const {
    data,
    extents: {
      y: { min: yMin },
    },
    factories: { x, y },
  } = areaChart;

  const areaBuilder = d3
    .area<AreaChartSingleData>()
    .x(function (d) {
      return x(d.x);
    })
    .y0(y(yMin))
    .y1(function (d) {
      return y(d.y);
    })
    .curve(d3.curveBasis);
  const areaPath = areaBuilder(data);

  if (areaPath === null) {
    return null;
  }

  return (
    <g>
      <path d={areaPath} className="fill-blue-france" />
    </g>
  );
};
