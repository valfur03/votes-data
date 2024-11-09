import { District } from "@/types/district";

export const FR_PEOPLE_OUT_OF_FRANCE_LABEL = "Français établis hors de France";

export const getDepartmentNameFromDistrict = (district: District) => {
  if (district.department === null) {
    return FR_PEOPLE_OUT_OF_FRANCE_LABEL;
  } else {
    return district.department.name;
  }
};
