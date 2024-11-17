import { Department } from "@/types/department";

export const FR_PEOPLE_OUT_OF_FRANCE_LABEL = "Français établis hors de France";

export const getDepartmentName = (departments: Array<Department>) => {
  if (departments.length === 0) {
    return FR_PEOPLE_OUT_OF_FRANCE_LABEL;
  } else {
    return departments.map((d) => d.name).join(" / ");
  }
};
