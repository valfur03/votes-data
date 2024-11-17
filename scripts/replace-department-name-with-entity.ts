#!/usr/bin/env tsx

import { Department } from "@/types/department";
import { District } from "@/types/district";
import * as fs from "node:fs";

import { districtTemplateV2 } from "./shared/templates/district/district.template-v2";

const main = async () => {
  const directory = "../src/data/legislatives/district";
  const files = fs.readdirSync(directory);
  const departments = await Promise.all(
    fs.readdirSync("../src/data/departments").map(async (fileName) => {
      return import(`../src/data/departments/${fileName}`).then((data) => {
        return Object.values(data)[0] as Department;
      });
    }),
  );

  files.forEach((fileName) => {
    if (!/^.*\.ts$/.test(fileName)) {
      return;
    }

    import(`../src/data/legislatives/district/${fileName}`).then((data) => {
      const district = Object.values(data)[0] as District;
      const department = departments.find(
        (department) => department.name === district.departmentName,
      );

      if (department === undefined) {
        console.warn(
          `district '${district.id} has no department, defaulting to null`,
        );
      } else {
        console.log(`district '${district.id} ok`);
      }

      const name = `${district.id}.ts`;
      const content = districtTemplateV2({
        entity: { ...district, department },
      });

      fs.mkdirSync(directory, { recursive: true });
      fs.writeFileSync(`${directory}/${name}`, content);
    });
  });
};

main();
