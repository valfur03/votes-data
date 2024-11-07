"use client";

import { useAreaChart } from "@/components/d3-graphs/area-chart/shared/hooks/use-area-chart";
import * as d3 from "d3";
import React from "react";

export const NUMBER_OF_LINES = 5;

export const AreaChartHorizontalScales = () => {
  const areaChart = useAreaChart();
  if (areaChart === null) {
    return null;
  }

  const {
    width,
    extents: {
      y: { min: yMin, max: yMax },
    },
    factories: { x, y },
  } = areaChart;

  const lineBuilder = d3
    .line()
    .x((d) => x(d[0]))
    .y((d) => y(d[1]));
  const yIterator = (yMax - yMin) / (NUMBER_OF_LINES + 1);
  const lines = Array.from({ length: NUMBER_OF_LINES }).map((_, i) => {
    const y = yMin + (i + 1) * yIterator;
    return {
      y,
      path: lineBuilder([
        [1, y],
        [width, y],
      ]),
    };
  });

  return (
    <g>
      {lines.map((line) => {
        if (line.path !== null) {
          return (
            <g key={line.path}>
              <text
                x={28}
                y={y(line.y)}
                dy="0.4em"
                textAnchor="end"
                className="fill-neutral-100 text-xs"
              >
                {Math.round(line.y)}
              </text>
              <path
                d={line.path}
                strokeDasharray="8 8"
                className="stroke-neutral-300 stroke-1"
              />
            </g>
          );
        }
      })}
    </g>
  );
};
