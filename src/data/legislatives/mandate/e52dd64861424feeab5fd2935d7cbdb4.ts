import { DISTRICT_ae9d203c963e448d89ad8d30b16d70be } from "@/data/legislatives/district/ae9d203c963e448d89ad8d30b16d70be";
import { GROUP_abd8d9c174224f74ac1aeb7b3d02aa90 } from "@/data/legislatives/group/abd8d9c174224f74ac1aeb7b3d02aa90";
import { POLITICIAN_bb1db506e5d84975a67f8ed22aa77561 } from "@/data/politician/bb1db506e5d84975a67f8ed22aa77561";
import { EMandateType, Mandate } from "@/types/mandate";

export const MANDATE_e52dd64861424feeab5fd2935d7cbdb4: Mandate = {
  id: "e52dd64861424feeab5fd2935d7cbdb4",
  type: EMandateType.DEPUTY,
  politician: POLITICIAN_bb1db506e5d84975a67f8ed22aa77561,
  seatNumber: "612",
  district: DISTRICT_ae9d203c963e448d89ad8d30b16d70be,
  group: GROUP_abd8d9c174224f74ac1aeb7b3d02aa90,
};
