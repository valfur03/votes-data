import { Mandate } from "@/types/mandate";

export const calculateGroupParts = (mandates: Array<Mandate | null>) => {
  return mandates.reduce<Record<string, number>>((acc, mandate) => {
    if (mandate === null) {
      return acc;
    }

    const groupId = mandate.group.id;

    return {
      ...acc,
      [groupId]: acc[groupId] !== undefined ? acc[groupId] + 1 : 0,
    };
  }, {});
};
