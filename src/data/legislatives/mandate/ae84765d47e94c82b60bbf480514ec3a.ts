import { DISTRICT_deb320c663884233939037baa4f241a6 } from "@/data/legislatives/district/deb320c663884233939037baa4f241a6";
import { GROUP_dc389d8950bb4daea53d613c64515644 } from "@/data/legislatives/group/dc389d8950bb4daea53d613c64515644";
import { POLITICIAN_37a2a1f749da498398d4bbfe47ae22b5 } from "@/data/politician/37a2a1f749da498398d4bbfe47ae22b5";
import { EMandateType, Mandate } from "@/types/mandate";

export const MANDATE_ae84765d47e94c82b60bbf480514ec3a: Mandate = {
  id: "ae84765d47e94c82b60bbf480514ec3a",
  type: EMandateType.DEPUTY,
  politician: POLITICIAN_37a2a1f749da498398d4bbfe47ae22b5,
  seatNumber: "245",
  district: DISTRICT_deb320c663884233939037baa4f241a6,
  group: GROUP_dc389d8950bb4daea53d613c64515644,
};
