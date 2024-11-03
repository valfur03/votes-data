import { DISTRICT_c3e8f149cec34043bed8ce0a21126bd1 } from "@/data/legislatives/district/c3e8f149cec34043bed8ce0a21126bd1";
import { GROUP_2b82d7684c8f4e9ba1601bd55935af2e } from "@/data/legislatives/group/2b82d7684c8f4e9ba1601bd55935af2e";
import { POLITICIAN_a9526c76856c456eaee9ecbd7a8e549a } from "@/data/politician/a9526c76856c456eaee9ecbd7a8e549a";
import { EMandateType, Mandate } from "@/types/mandate";

export const MANDATE_c2b70ade4d1b4a33b34c6a540a8e62a0: Mandate = {
  id: "c2b70ade4d1b4a33b34c6a540a8e62a0",
  type: EMandateType.DEPUTY,
  politician: POLITICIAN_a9526c76856c456eaee9ecbd7a8e549a,
  seatNumber: "555",
  district: DISTRICT_c3e8f149cec34043bed8ce0a21126bd1,
  group: GROUP_2b82d7684c8f4e9ba1601bd55935af2e,
};
