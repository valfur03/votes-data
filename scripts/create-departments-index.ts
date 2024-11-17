#!/usr/bin/env tsx

import { Department } from "@/types/department";
import fs from "node:fs";

import { departmentsTemplate } from "./shared/templates/departments.template";

const main = async () => {
  // get all files
  // map
  //  construct file name
  // construct file (template)
  // write file content

  const directory = "../src/data/departments";
  const departments = await Promise.all(
    fs.readdirSync(directory).map(async (fileName) => {
      if (!/^.*\.ts$/.test(fileName)) {
        return null;
      }

      return import(`${directory}/${fileName}`).then((data) => {
        return Object.values(data)[0] as Department;
      });
    }),
  )
    .then((departments) =>
      departments.filter((department) => department !== null),
    )
    .then((departments) =>
      departments.toSorted((d1, d2) => {
        const code1 = d1.code;
        const code2 = d2.code;

        return code1.localeCompare(code2);
      }),
    );

  const content = departmentsTemplate({ departments });

  fs.writeFileSync("../src/data/departments.ts", content);
};

main();
