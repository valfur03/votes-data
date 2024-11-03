import { DISTRICT_d84af80a5edf42638197a05d00082a06 } from "@/data/legislatives/district/d84af80a5edf42638197a05d00082a06";
import { GROUP_abd8d9c174224f74ac1aeb7b3d02aa90 } from "@/data/legislatives/group/abd8d9c174224f74ac1aeb7b3d02aa90";
import { POLITICIAN_56ada5dce2574de1840795226c4f841d } from "@/data/politician/56ada5dce2574de1840795226c4f841d";
import { EMandateType, Mandate } from "@/types/mandate";

export const MANDATE_65d1ef93daa84e0ea6aa8c39d842c1bd: Mandate = {
  id: "65d1ef93daa84e0ea6aa8c39d842c1bd",
  type: EMandateType.DEPUTY,
  politician: POLITICIAN_56ada5dce2574de1840795226c4f841d,
  seatNumber: "303",
  district: DISTRICT_d84af80a5edf42638197a05d00082a06,
  group: GROUP_abd8d9c174224f74ac1aeb7b3d02aa90,
};
