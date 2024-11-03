import { SurroundedSeat } from "@/components/french-hemicycle/shared/types/seat";
import { Mandate } from "@/types/mandate";

export const withTermMandates = (
  seats: Array<SurroundedSeat>,
  mandates: Array<Mandate | null>,
) => {
  return seats.map((seat, index) => {
    if (mandates[index] === undefined) {
      throw new Error("Current term does not contain enough mandates");
    }
    return {
      ...seat,
      mandate: mandates[index],
    };
  });
};
