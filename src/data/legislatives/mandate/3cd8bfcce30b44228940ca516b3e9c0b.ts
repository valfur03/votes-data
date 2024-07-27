import { DISTRICT_bee9c8ce6702401eb507ce291111b090 } from "@/data/legislatives/district/bee9c8ce6702401eb507ce291111b090";
import { GROUP_abd8d9c174224f74ac1aeb7b3d02aa90 } from "@/data/legislatives/group/abd8d9c174224f74ac1aeb7b3d02aa90";
import { POLITICIAN_37b3b68cc66e4f7baedc82e73236f9c3 } from "@/data/politician/37b3b68cc66e4f7baedc82e73236f9c3";
import { EMandateType, Mandate } from "@/types/mandate";

export const MANDATE_3cd8bfcce30b44228940ca516b3e9c0b: Mandate = {
  id: "3cd8bfcce30b44228940ca516b3e9c0b",
  type: EMandateType.DEPUTY,
  politician: POLITICIAN_37b3b68cc66e4f7baedc82e73236f9c3,
  seatNumber: "226",
  district: DISTRICT_bee9c8ce6702401eb507ce291111b090,
  group: GROUP_abd8d9c174224f74ac1aeb7b3d02aa90,
};
