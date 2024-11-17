#!/usr/bin/env tsx

import { District } from "@/types/district";
import fs from "node:fs";

import { districtsTemplate } from "./shared/templates/districts.template";

const main = async () => {
  // get all files
  // map
  //  construct file name
  // construct file (template)
  // write file content

  const directory = "../src/data/legislatives/district";
  const districts = await Promise.all(
    fs.readdirSync(directory).map(async (fileName) => {
      if (!/^.*\.ts$/.test(fileName)) {
        return null;
      }

      return import(`${directory}/${fileName}`).then((data) => {
        return Object.values(data)[0] as District;
      });
    }),
  )
    .then((districts) => districts.filter((district) => district !== null))
    .then((districts) =>
      districts.toSorted((d1, d2) => {
        const code1 = `${d1.department !== null ? d1.department.code : "ZZ"}${d1.number}`;
        const code2 = `${d2.department !== null ? d2.department.code : "ZZ"}${d2.number}`;

        return code1.localeCompare(code2);
      }),
    );

  const content = districtsTemplate({ districts });

  fs.writeFileSync("../src/data/legislatives/districts.ts", content);
};

main();
