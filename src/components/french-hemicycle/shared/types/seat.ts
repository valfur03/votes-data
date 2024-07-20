import { CirclePosition } from "@/components/french-hemicycle/shared/types/circle-position";

export type Seat = {
  circle: CirclePosition & {
    r: number;
  };
};

export type SurroundedSeat = Seat & {
  surroundingSeatsIndex: Array<number>;
};
