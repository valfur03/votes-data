import { getDepartmentName } from "@/lib/utils/legislatives/department/get-department-name";
import { District } from "@/types/district";

export const getDepartmentNameFromDistrict = (district: District) =>
  getDepartmentName(district.departments);
