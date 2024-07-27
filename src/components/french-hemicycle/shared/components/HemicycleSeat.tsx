import { Seat } from "@/components/french-hemicycle/shared/types/seat";
import { MouseEventHandler, TouchEventHandler } from "react";

export type HemicycleSeatProps = {
  seat: Seat;
  fill?: string;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onTouchStart?: TouchEventHandler;
  onTouchEnd?: TouchEventHandler;
};

export const HemicycleSeat = ({
  seat,
  fill = "#9e9e9e",
  onMouseEnter,
  onMouseLeave,
  onTouchStart,
  onTouchEnd,
}: HemicycleSeatProps) => {
  return (
    <circle
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={() => {
        alert("hi");
      }}
      cx={seat.circle.cx}
      cy={seat.circle.cy}
      r={seat.circle.r}
      fill={fill}
      className="transition-all"
    />
  );
};
