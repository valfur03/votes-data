import { repulsionWaveDistance } from "@/components/french-hemicycle/shared/data/physics";
import { Seat } from "@/components/french-hemicycle/shared/types/seat";

export const reduceIndexesFromSurroundingSeats = (
  seats: Array<Seat>,
  surroundedSeatIndex: number,
): Array<number> => {
  return seats.reduce<Array<number>>((result, seat, seatIndex, seatsArray) => {
    if (surroundedSeatIndex === seatIndex) {
      return result;
    }
    const dx = seat.circle.cx - seatsArray[surroundedSeatIndex].circle.cx;
    const dy = seat.circle.cy - seatsArray[surroundedSeatIndex].circle.cy;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < repulsionWaveDistance) {
      result.push(seatIndex);
    }
    return result;
  }, []);
};
