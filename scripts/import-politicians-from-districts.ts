#!/usr/bin/env tsx

import { Politician } from "@/types/politician";
import * as fs from "node:fs";

import { politicianTemplate } from "./shared/templates/politician/politician.template";

const getPoliticians = async () => {
  const politiciansDir = "../src/data/politician";
  const politicianFiles = fs.readdirSync(politiciansDir);
  return Promise.all(
    politicianFiles.map((fileName) =>
      import(`${politiciansDir}/${fileName}`).then(
        (data) => Object.values(data)[0] as Politician,
      ),
    ),
  );
};

export const capitalizeName = (name: string): string => {
  // Split by hyphen for compound names (e.g., Allen-Ware)
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("-");
};

const main = async () => {
  console.log("Creating politicians");

  const politicians = await getPoliticians();

  const districtsFile = fs.readFileSync("../districts.json", "utf8");
  const rawJson = JSON.parse(districtsFile) as Array<{
    politician1LastName: string;
    politician1FirstName: string;
    politician2LastName: string;
    politician2FirstName: string;
    politician3LastName: string;
    politician3FirstName: string;
    politician4LastName: string;
    politician4FirstName: string;
    politician5LastName: string;
    politician5FirstName: string;
    politician6LastName: string;
    politician6FirstName: string;
    politician7LastName: string;
    politician7FirstName: string;
    politician8LastName: string;
    politician8FirstName: string;
    politician9LastName: string;
    politician9FirstName: string;
    politician10LastName: string;
    politician10FirstName: string;
    politician11LastName: string;
    politician11FirstName: string;
    politician12LastName: string;
    politician12FirstName: string;
    politician13LastName: string;
    politician13FirstName: string;
    politician14LastName: string;
    politician14FirstName: string;
    politician15LastName: string;
    politician15FirstName: string;
    politician16LastName: string;
    politician16FirstName: string;
    politician17LastName: string;
    politician17FirstName: string;
    politician18LastName: string;
    politician18FirstName: string;
    politician19LastName: string;
    politician19FirstName: string;
  }>;

  rawJson.forEach((district) => {
    const importPolitician = (index: number) => {
      const firstNameKey = `politician${index}FirstName`;
      const lastNameKey = `politician${index}LastName`;

      if (district[firstNameKey] === "" || district[lastNameKey] === "") {
        return;
      }

      const politician = politicians.find(
        (p) =>
          p.firstName.toLowerCase() === district[firstNameKey].toLowerCase() &&
          p.lastName.toLowerCase() === district[lastNameKey].toLowerCase(),
      );

      if (politician === undefined) {
        const id = crypto.randomUUID().replace(/-/g, "");
        const entity: Politician = {
          id,
          firstName: capitalizeName(district[firstNameKey]),
          lastName: capitalizeName(district[lastNameKey]),
        };
        console.warn("creating politician");
        console.warn(entity);
        const politicianContent = politicianTemplate({ entity });
        fs.writeFileSync(`../src/data/politician/${id}.ts`, politicianContent);
      } else {
        console.log(
          `politician '${district[firstNameKey]} ${district[lastNameKey]}' found`,
        );
      }
    };

    for (let i = 1; i <= 19; i++) {
      importPolitician(i);
    }
  });
};

main();
