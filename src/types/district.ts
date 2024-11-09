import { Department } from "@/types/department";
import { Entity } from "@/types/entity";

export type District = Entity<{
  number: string;
  department: Department | null;
}>;
