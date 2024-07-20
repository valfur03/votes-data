import { Seat } from "@/components/french-hemicycle/shared/types/seat";
import { MouseEventHandler, TouchEventHandler } from "react";

export type HemicycleSeatProps = {
  seat: Seat;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  onTouchStart?: TouchEventHandler;
  onTouchEnd?: TouchEventHandler;
};

export const HemicycleSeat = ({
  seat,
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
      className="transition-all"
    />
  );
};
