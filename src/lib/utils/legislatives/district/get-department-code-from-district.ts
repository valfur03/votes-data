import { getDepartmentCode } from "@/lib/utils/legislatives/department/get-department-code";
import { District } from "@/types/district";

export const getDepartmentCodeFromDistrict = (district: District) =>
  getDepartmentCode(district.departments);
