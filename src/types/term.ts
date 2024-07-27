import { Entity } from "@/types/entity";
import { Mandate } from "@/types/mandate";

export type Term = Entity<{
  mandates: Array<Mandate>;
}>;
