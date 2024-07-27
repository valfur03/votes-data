import { DISTRICT_b6b62aa38d0b4b0cbc2cbfa984d39d96 } from "@/data/legislatives/district/b6b62aa38d0b4b0cbc2cbfa984d39d96";
import { GROUP_b0847fdad90540e58b30df3df9cde258 } from "@/data/legislatives/group/b0847fdad90540e58b30df3df9cde258";
import { POLITICIAN_abba7456bbe14ac3a8a162fc2bf0c338 } from "@/data/politician/abba7456bbe14ac3a8a162fc2bf0c338";
import { EMandateType, Mandate } from "@/types/mandate";

export const MANDATE_b59ec86b8a1f4e7e92379ffbf10728e5: Mandate = {
  id: "b59ec86b8a1f4e7e92379ffbf10728e5",
  type: EMandateType.DEPUTY,
  politician: POLITICIAN_abba7456bbe14ac3a8a162fc2bf0c338,
  seatNumber: "628",
  district: DISTRICT_b6b62aa38d0b4b0cbc2cbfa984d39d96,
  group: GROUP_b0847fdad90540e58b30df3df9cde258,
};
