#!/usr/bin/env tsx

import * as fs from "node:fs";

import { departmentsSchema } from "./shared/schemas/department.schema";
import { departmentTemplate } from "./shared/templates/department/department.template";
import { writeFileFromTemplatedEntity } from "./shared/utils/write-file-from-templated-entity";

const main = async () => {
  console.log("Creating departments");
  const departmentFile = fs.readFileSync("../departments.json", "utf8");
  const rawJson = JSON.parse(departmentFile);
  const newDepartments = departmentsSchema.parse(rawJson);
  writeFileFromTemplatedEntity(
    "../src/data/departments",
    Object.values(newDepartments),
    departmentTemplate,
  );
};

main();
