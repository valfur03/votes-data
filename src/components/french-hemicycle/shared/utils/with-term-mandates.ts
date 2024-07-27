import { SurroundedSeat } from "@/components/french-hemicycle/shared/types/seat";
import { Mandate } from "@/types/mandate";

export const withTermMandates = (
  seats: Array<SurroundedSeat>,
  mandates: Array<Mandate>,
) => {
  return seats.map((seat, index) => {
    return {
      ...seat,
      mandate: mandates[index],
    };
  });
};
