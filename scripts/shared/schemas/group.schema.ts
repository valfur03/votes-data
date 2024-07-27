import { z } from "zod";

import { generateUniqueId } from "../utils/generate-unique-id";

export const groupSchema = z
  .object({
    organe: z.union([
      z.object({
        codeType: z.literal("GP"),
        uid: z.string(),
        libelle: z.string(),
        libelleAbrev: z.string(),
        couleurAssociee: z.string(),
      }),
      z.object({}),
    ]),
  })
  .transform((group) => {
    if ("codeType" in group.organe && group.organe.codeType === "GP") {
      const id = generateUniqueId();
      return {
        id,
        name: group.organe.libelle,
        shortName: group.organe.libelleAbrev,
        color: group.organe.couleurAssociee,
        _source_id: group.organe.uid,
      };
    }
    return null;
  });
