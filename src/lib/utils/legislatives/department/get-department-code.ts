import { Department } from "@/types/department";

export const FR_PEOPLE_OUT_OF_FRANCE_CODE = "ZZ";

export const getDepartmentCode = (departments: Array<Department>) => {
  if (departments.length === 0) {
    return FR_PEOPLE_OUT_OF_FRANCE_CODE;
  } else {
    return departments.map((d) => d.code).join("-");
  }
};
