import { DISTRICT_e6b5993fc4a24c72af28ed63f77316f3 } from "@/data/legislatives/district/e6b5993fc4a24c72af28ed63f77316f3";
import { GROUP_abd8d9c174224f74ac1aeb7b3d02aa90 } from "@/data/legislatives/group/abd8d9c174224f74ac1aeb7b3d02aa90";
import { POLITICIAN_e164f5c679f546f2bd6b80a8ab7c7e03 } from "@/data/politician/e164f5c679f546f2bd6b80a8ab7c7e03";
import { EMandateType, Mandate } from "@/types/mandate";

export const MANDATE_796e46516f9f4c0a94d26c3d2f0e5a3d: Mandate = {
  id: "796e46516f9f4c0a94d26c3d2f0e5a3d",
  type: EMandateType.DEPUTY,
  politician: POLITICIAN_e164f5c679f546f2bd6b80a8ab7c7e03,
  seatNumber: "325",
  district: DISTRICT_e6b5993fc4a24c72af28ed63f77316f3,
  group: GROUP_abd8d9c174224f74ac1aeb7b3d02aa90,
};
