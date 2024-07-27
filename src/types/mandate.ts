import { District } from "@/types/district";
import { Entity } from "@/types/entity";
import { Group } from "@/types/group";
import { Politician } from "@/types/politician";

export enum EMandateType {
  DEPUTY,
}

export type Mandate = Entity<{
  type: EMandateType;
  politician: Politician;
}> & {
  type: EMandateType.DEPUTY;
  seatNumber: string;
  district: District;
  group: Group;
};
