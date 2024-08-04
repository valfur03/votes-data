import { Entity } from "@/types/entity";
import { Group } from "@/types/group";
import { Mandate } from "@/types/mandate";

export type Term = Entity<{
  mandates: Array<Mandate>;
  groups: Array<Group>;
}>;
