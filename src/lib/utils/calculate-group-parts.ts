import { Mandate } from "@/types/mandate";

export const calculateGroupParts = (mandates: Array<Mandate>) => {
  return mandates.reduce<Record<string, number>>((acc, mandate) => {
    const groupId = mandate.group.id;

    return {
      ...acc,
      [groupId]: acc[groupId] !== undefined ? acc[groupId] + 1 : 0,
    };
  }, {});
};
