import { z } from "zod";

import { generateUniqueId } from "../utils/generate-unique-id";

export const politicianSchema = z
  .object({
    acteur: z.object({
      uid: z.object({
        "#text": z.string(),
      }),
      etatCivil: z.object({
        ident: z.object({
          prenom: z.string(),
          nom: z.string(),
        }),
      }),
      mandats: z.object({
        mandat: z.array(
          z.union([
            z.object({
              typeOrgane: z.literal("GP"),
              organes: z.object({
                organeRef: z.string(),
              }),
            }),
            z.object({
              uid: z.string(),
              typeOrgane: z.literal("ASSEMBLEE"),
              legislature: z.string(),
              election: z.object({
                lieu: z.object({
                  departement: z.string(),
                  numCirco: z.string(),
                }),
                refCirconscription: z.string(),
              }),
              mandature: z.object({
                placeHemicycle: z.string(),
              }),
            }),
            z.object({}),
          ]),
        ),
      }),
    }),
  })
  .transform((politician, ctx) => {
    const getSourceGroupId = () => {
      const mandat = politician.acteur.mandats.mandat.find((mandat) => {
        return "typeOrgane" in mandat && mandat.typeOrgane === "GP";
      });
      if (
        mandat === undefined ||
        !("typeOrgane" in mandat) ||
        mandat.typeOrgane !== "GP"
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "`mandats` does not contain any `GP` type",
        });
        return null;
      }
      return mandat.organes.organeRef;
    };

    const getSourceParliamentMandate = () => {
      const mandat = politician.acteur.mandats.mandat.find((mandat) => {
        return "typeOrgane" in mandat && mandat.typeOrgane === "ASSEMBLEE";
      });
      if (
        mandat === undefined ||
        !("typeOrgane" in mandat) ||
        mandat.typeOrgane !== "ASSEMBLEE"
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "`mandats` does not contain any `ASSEMBLEE` type",
        });
        return null;
      }
      return mandat;
    };

    const id = generateUniqueId();

    const sourceGroupId = getSourceGroupId();
    const sourceParliamentMandate = getSourceParliamentMandate();
    if (sourceGroupId === null || sourceParliamentMandate === null) {
      return null;
    }

    return {
      id,
      firstName: politician.acteur.etatCivil.ident.prenom,
      lastName: politician.acteur.etatCivil.ident.nom,
      _source_id: politician.acteur.uid["#text"],
      _source_group_id: sourceGroupId,
      _source_mandate_id: sourceParliamentMandate.uid,
      _source_district_id: sourceParliamentMandate.election.refCirconscription,
      _source_district_number: sourceParliamentMandate.election.lieu.numCirco,
      _source_district_department_name:
        sourceParliamentMandate.election.lieu.departement,
      _source_nth_term: sourceParliamentMandate.legislature,
      _source_seat_number: sourceParliamentMandate.mandature.placeHemicycle,
    };
  });
