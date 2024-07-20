import { hoveredSeatRadius } from "@/components/french-hemicycle/shared/data/seat-circle-positions";

/**
 * Distance to which the surrounding seats will move.
 * Increase to move seats further, decrease to move seats closer.
 */
export const repulsionDistance = hoveredSeatRadius;

/**
 * Total radius of seats that will move.
 * Increase to include more seats, decrease to include fewer seats.
 */
export const repulsionWaveDistance = repulsionDistance * (Math.E / 1.8);
