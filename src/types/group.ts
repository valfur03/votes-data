import { Entity } from "@/types/entity";

export type Group = Entity<{
  name: string;
  shortName: string;
  color: string;
}>;
