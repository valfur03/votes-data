import { DISTRICT_1db00d93e36d4b6a89b0a9c5bc2869ac } from "@/data/legislatives/district/1db00d93e36d4b6a89b0a9c5bc2869ac";
import { GROUP_2b82d7684c8f4e9ba1601bd55935af2e } from "@/data/legislatives/group/2b82d7684c8f4e9ba1601bd55935af2e";
import { POLITICIAN_c697405e71c848d79d514d188c4c1fba } from "@/data/politician/c697405e71c848d79d514d188c4c1fba";
import { EMandateType, Mandate } from "@/types/mandate";

export const MANDATE_97a614c9f59a46d3b1a320ecacfaa6ad: Mandate = {
  id: "97a614c9f59a46d3b1a320ecacfaa6ad",
  type: EMandateType.DEPUTY,
  politician: POLITICIAN_c697405e71c848d79d514d188c4c1fba,
  seatNumber: "458",
  district: DISTRICT_1db00d93e36d4b6a89b0a9c5bc2869ac,
  group: GROUP_2b82d7684c8f4e9ba1601bd55935af2e,
};
