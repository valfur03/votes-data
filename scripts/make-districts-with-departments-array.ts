#!/usr/bin/env tsx

import { Department } from "@/types/department";
import { District } from "@/types/district";
import fs from "node:fs";

import { districtTemplateV3 } from "./shared/templates/district/district.template-v3";

const main = async () => {
  const districtsDir = "../src/data/legislatives/district";
  const districts = await Promise.all(
    fs.readdirSync(districtsDir).map((fileName) => {
      if (!/^.*\.ts$/.test(fileName)) {
        return null;
      }

      return import(`${districtsDir}/${fileName}`).then((file) => {
        return Object.values(file)[0] as Pick<District, "id" | "number"> & {
          department: Department | null;
        };
      });
    }),
  ).then((d) => d.filter((d) => d !== null));

  districts.forEach((district) => {
    const newDistrict: District = {
      id: district.id,
      number: district.number,
      departments: district.department === null ? [] : [district.department],
    };
    const content = districtTemplateV3({ entity: newDistrict });
    fs.writeFileSync(
      `../src/data/legislatives/district/${district.id}.ts`,
      content,
    );
  });
};

main();
