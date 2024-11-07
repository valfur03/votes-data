import { Entity } from "@/types/entity";

export type Department = Entity<{
  code: string;
  name: string;
}>;
