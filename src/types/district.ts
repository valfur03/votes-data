import { Department } from "@/types/department";
import { Entity } from "@/types/entity";

export type District = Entity<{
  number: string;
  // TODO not null sometimes
  departments: Department[];
}>;

export type DistrictsGroupedByDepartments = Array<{
  info: Department | null;
  districts: Array<District>;
}>;
