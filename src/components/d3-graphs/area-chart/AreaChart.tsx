import { AreaChartData } from "@/components/d3-graphs/area-chart/shared/components/AreaChartData";
import { AreaChartHorizontalScales } from "@/components/d3-graphs/area-chart/shared/components/AreaChartHorizontalScales";
import { AreaChartXAxis } from "@/components/d3-graphs/area-chart/shared/components/AreaChartXAxis";
import { AreaChartProvider } from "@/components/d3-graphs/area-chart/shared/providers/AreaChartProvider";
import { wrapDataWithStartAndEnd } from "@/components/d3-graphs/area-chart/shared/utils/wrap-data-with-start-and-end";
import React from "react";

export type AreaChartSingleData = {
  x: number;
  y: number;
};
export type AreaChartData = Array<AreaChartSingleData>;

export type AreaChartProps = React.SVGAttributes<SVGSVGElement> & {
  vbWidth?: number;
  vbHeight?: number;
  data: AreaChartData;
};

export const AreaChart = ({
  width: baseWidth,
  height: baseHeight,
  vbWidth = +(baseWidth || 512),
  vbHeight = +(baseHeight || vbWidth / (4 / 3)),
  viewBox = `0 0 ${vbWidth} ${vbHeight}`,
  data,
  ...props
}: AreaChartProps) => {
  const width = vbWidth;
  const height = vbHeight;

  const wrappedData = wrapDataWithStartAndEnd(data);

  return (
    <AreaChartProvider data={wrappedData} width={width} height={height}>
      <svg width={baseWidth} height={baseHeight} viewBox={viewBox} {...props}>
        <AreaChartData />
        <AreaChartHorizontalScales />
        <AreaChartXAxis />
      </svg>
    </AreaChartProvider>
  );
};
