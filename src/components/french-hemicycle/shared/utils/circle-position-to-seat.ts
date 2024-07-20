import { baseSeatRadius } from "@/components/french-hemicycle/shared/data/seat-circle-positions";
import { CirclePosition } from "@/components/french-hemicycle/shared/types/circle-position";
import { Seat } from "@/components/french-hemicycle/shared/types/seat";

export const circlePositionToSeat = (
  seats: Array<CirclePosition>,
  radius: number = baseSeatRadius,
): Array<Seat> => {
  return seats.map((seat) => ({
    circle: {
      ...seat,
      r: radius,
    },
  }));
};
