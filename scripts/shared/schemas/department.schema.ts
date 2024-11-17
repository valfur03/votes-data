import { z } from "zod";

export const departmentSchema = z
  .object({
    code: z.union([z.number(), z.string()]),
    name: z.string(),
  })
  .transform((department) => {
    const code = String(department.code);

    const generateDepartmentId = (code: string) => {
      const uuid = crypto.randomUUID().replace(/-/g, "");

      if (code.length === 0) {
        return uuid;
      }

      const slicedUuid = uuid.slice(0, -code.length);
      return `${code}${slicedUuid}`;
    };
    const id = generateDepartmentId(code);

    return {
      ...department,
      code,
      id,
    };
  });

export const departmentsSchema = z.record(z.string(), departmentSchema);
