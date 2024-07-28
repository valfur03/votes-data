"use client";

import { HemicycleSeat } from "@/components/french-hemicycle/shared/components/HemicycleSeat";
import { HemicycleSeatsImagePatterns } from "@/components/french-hemicycle/shared/components/HemicycleSeatsImagePatterns";
import {
  hoveredSeatRadius,
  seatCirclePositions,
} from "@/components/french-hemicycle/shared/data/seat-circle-positions";
import { useTouchTwiceAsClick } from "@/components/french-hemicycle/shared/hooks/use-touch-twice-as-click";
import { circlePositionToSeat } from "@/components/french-hemicycle/shared/utils/circle-position-to-seat";
import { repelSeat } from "@/components/french-hemicycle/shared/utils/repel-seat";
import { withSurroundingSeats } from "@/components/french-hemicycle/shared/utils/with-surrounding-seats";
import { withTermMandates } from "@/components/french-hemicycle/shared/utils/with-term-mandates";
import { cn } from "@/lib/utils/cn";
import { Term } from "@/types/term";
import { useMemo, useState } from "react";

export type FrenchHemicycleProps = {
  className?: string;
  term: Term;
};

export const FrenchHemicycle = ({ className, term }: FrenchHemicycleProps) => {
  const initialSeatPositions = useMemo(
    () =>
      withTermMandates(
        withSurroundingSeats(circlePositionToSeat(seatCirclePositions)),
        term.mandates,
      ),
    [term.mandates],
  );
  const [hoveredSeatIndex, setHoveredSeatIndex] = useState<number | null>(null);
  const [seatPositions, setSeatPositions] = useState(initialSeatPositions);

  const handleSeatHover =
    (hoveredSeatIndex: number, surroundingSeatsIndex: Array<number>) => () => {
      setHoveredSeatIndex(hoveredSeatIndex);
      setSeatPositions((currentSeatPositions) => {
        const newSeatPositions = [...initialSeatPositions];
        if (newSeatPositions[hoveredSeatIndex] === undefined) {
          return currentSeatPositions;
        }

        newSeatPositions[hoveredSeatIndex] = {
          ...newSeatPositions[hoveredSeatIndex],
          circle: {
            ...newSeatPositions[hoveredSeatIndex].circle,
            r: hoveredSeatRadius,
          },
        };

        surroundingSeatsIndex.forEach((seatIndex) =>
          repelSeat(newSeatPositions, seatIndex, hoveredSeatIndex),
        );

        return newSeatPositions;
      });
    };

  const resetInitialSeatPositions = () => () => {
    setHoveredSeatIndex(null);
    setSeatPositions(initialSeatPositions);
  };

  const { onTouchStart, onTouchEnd } = useTouchTwiceAsClick();

  return (
    <svg
      viewBox="0 0 237 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <HemicycleSeatsImagePatterns mandates={seatPositions} />
      <g fill="#9E9E9E">
        {seatPositions.map((seat, index) => {
          return (
            <HemicycleSeat
              seat={seat}
              fill={
                hoveredSeatIndex === index
                  ? `url(#seat-${seat.mandate.seatNumber}-img)`
                  : seat.mandate.group.color
              }
              onMouseEnter={handleSeatHover(index, seat.surroundingSeatsIndex)}
              onMouseLeave={resetInitialSeatPositions()}
              onTouchStart={onTouchStart(
                index,
                handleSeatHover(index, seat.surroundingSeatsIndex),
              )}
              onTouchEnd={onTouchEnd(index)}
              key={seat.mandate.id}
            />
          );
        })}
      </g>
    </svg>
  );
};
