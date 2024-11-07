"use client";

import { useAreaChart } from "@/components/d3-graphs/area-chart/shared/hooks/use-area-chart";
import * as d3 from "d3";
import React from "react";

export const AreaChartXAxis = () => {
  const areaChart = useAreaChart();
  if (areaChart === null) {
    return null;
  }

  const {
    data,
    width,
    extents: {
      x: { min: xMin, max: xMax },
      y: { min: yMin },
    },
    factories: { x, y },
  } = areaChart;

  const ticks = d3
    .scaleLinear()
    .domain([xMin + 1, xMax - 1])
    .range([0, width])
    .ticks(data.length);

  return (
    <g>
      {ticks.map((tick) => (
        <g key={tick}>
          <text
            x={x(tick)}
            y={y(yMin)}
            dy="26px"
            textAnchor="end"
            className="fill-neutral-700 text-[10px]"
          >
            {tick}
          </text>
        </g>
      ))}
    </g>
  );
};
