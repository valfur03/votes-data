import {
  repulsionDistance,
  repulsionWaveDistance,
} from "@/components/french-hemicycle/shared/data/physics";
import { baseSeatRadius } from "@/components/french-hemicycle/shared/data/seat-circle-positions";
import { SurroundedSeat } from "@/components/french-hemicycle/shared/types/seat";

export const repelSeat = (
  seatPositions: Array<SurroundedSeat>,
  seatIndex: number,
  hoveredSeatIndex: number,
) => {
  if (seatIndex !== hoveredSeatIndex) {
    const seat = seatPositions[seatIndex];
    const hoveredSeat = seatPositions[hoveredSeatIndex];
    if (seat === undefined || hoveredSeat === undefined) {
      return;
    }

    const dx = seat.circle.cx - hoveredSeat.circle.cx;
    const dy = seat.circle.cy - hoveredSeat.circle.cy;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);

    seatPositions[seatIndex] = {
      ...seatPositions[seatIndex],
      circle: {
        ...seatPositions[seatIndex].circle,

        cx:
          seat.circle.cx +
          (repulsionDistance - baseSeatRadius) *
            Math.cos(angle) *
            ((repulsionWaveDistance - distance) / repulsionWaveDistance),
        cy:
          seat.circle.cy +
          (repulsionDistance - baseSeatRadius) *
            Math.sin(angle) *
            ((repulsionWaveDistance - distance) / repulsionWaveDistance),
      },
    };
  }
};
