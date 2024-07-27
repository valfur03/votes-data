import { DISTRICT_7e584dce5b87444d9b85884bae211f6b } from "@/data/legislatives/district/7e584dce5b87444d9b85884bae211f6b";
import { GROUP_872c0097e8eb4f139c61d7db1e83d825 } from "@/data/legislatives/group/872c0097e8eb4f139c61d7db1e83d825";
import { POLITICIAN_bb3962d30d3c482abcd3b99a00978cfc } from "@/data/politician/bb3962d30d3c482abcd3b99a00978cfc";
import { EMandateType, Mandate } from "@/types/mandate";

export const MANDATE_e1d6c82b9f15432eb2f2b7f0ea13e96c: Mandate = {
  id: "e1d6c82b9f15432eb2f2b7f0ea13e96c",
  type: EMandateType.DEPUTY,
  politician: POLITICIAN_bb3962d30d3c482abcd3b99a00978cfc,
  seatNumber: "234",
  district: DISTRICT_7e584dce5b87444d9b85884bae211f6b,
  group: GROUP_872c0097e8eb4f139c61d7db1e83d825,
};
