import {
  Seat,
  SurroundedSeat,
} from "@/components/french-hemicycle/shared/types/seat";
import { reduceIndexesFromSurroundingSeats } from "@/components/french-hemicycle/shared/utils/reduce-indexes-from-surrounding-seats";

export const withSurroundingSeats = (
  seats: Array<Seat>,
): Array<SurroundedSeat> => {
  return seats.map((seat, seatIndex, seatsArray) => ({
    ...seat,
    surroundingSeatsIndex: reduceIndexesFromSurroundingSeats(
      seatsArray,
      seatIndex,
    ),
  }));
};
