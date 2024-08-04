import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/tooltip/Tooltip";
import { cn } from "@/lib/utils/cn";
import React from "react";

export type LegislativeElectionGroupScoreProps = {
  color: string;
  name?: string;
  shortName: string;
  valuesTotal?: number;
  value: number;
};

// TODO move out
export const getContrastedForegroundColor = (
  color: string,
  { dark, light }: { dark: string; light: string },
) => {
  const colorAsNumber = Number(`0x${color.replace(/^#/, "")}`);
  const red = (colorAsNumber >> 16) & 255;
  const green = (colorAsNumber >> 8) & 255;
  const blue = (colorAsNumber >> 8) & 255;

  return red * 0.299 + green * 0.587 + blue * 0.114 > 150 ? dark : light;
};

export const LegislativesElectionGroupScore = ({
  color,
  name,
  shortName,
  valuesTotal,
  value,
}: LegislativeElectionGroupScoreProps) => {
  const textColor = getContrastedForegroundColor(color, {
    dark: "text-neutral-800",
    light: "text-white",
  });

  return (
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <div
          className="flex items-center gap-2"
          style={{ "--party-color": color } as React.CSSProperties}
        >
          <span
            className={cn(
              "min-w-12 rounded bg-[--party-color] px-2 py-1 text-center text-sm",
              textColor,
            )}
          >
            {shortName}
          </span>
          <div className="flex flex-col text-sm">
            <span className="text-neutral-800">
              {value} siège{value > 0 ? "s" : ""}
            </span>
            {valuesTotal !== undefined && valuesTotal !== 0 && (
              <span className="text-neutral-700">
                {((value / valuesTotal) * 100).toFixed(1)}%
              </span>
            )}
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  );
};
