import { hoveredSeatRadius } from "@/components/french-hemicycle/shared/data/seat-circle-positions";
import {
  POLITICIANS_IMAGES_EXTENSION,
  POLITICIANS_IMAGES_PATH,
} from "@/constant/images";
import { Mandate } from "@/types/mandate";

export type HemicycleSeatsImagePatternsProps = {
  mandates: Array<{ mandate: Mandate }>;
};

export const HemicycleSeatsImagePatterns = ({
  mandates,
}: HemicycleSeatsImagePatternsProps) => {
  return (
    <defs>
      {mandates.map(({ mandate }) => {
        return (
          <pattern
            id={`seat-${mandate.seatNumber}-img`}
            x="0%"
            y="0%"
            height="100%"
            width="100%"
            viewBox={`0 0 ${hoveredSeatRadius} ${hoveredSeatRadius}`}
            key={`seat-${mandate.seatNumber}-img`}
          >
            <image
              x="0%"
              y="0%"
              width={hoveredSeatRadius}
              height={hoveredSeatRadius}
              href={`/${POLITICIANS_IMAGES_PATH}/${mandate.politician.id}.${POLITICIANS_IMAGES_EXTENSION}`}
            />
          </pattern>
        );
      })}
    </defs>
  );
};
