#!/usr/bin/env tsx

import { District } from "@/types/district";
import { Group } from "@/types/group";
import { Politician } from "@/types/politician";
import * as fs from "node:fs";

import { votesTemplate } from "./shared/templates/votes.template";

const getPoliticians = async () => {
  const politiciansDir = "../src/data/politician";
  const politicianFiles = fs.readdirSync(politiciansDir);
  return Promise.all(
    politicianFiles.map((fileName) => {
      if (!/^.*\.ts$/.test(fileName)) {
        return null;
      }

      return import(`${politiciansDir}/${fileName}`).then(
        (data) => Object.values(data)[0] as Politician,
      );
    }),
  ).then((d) => d.filter((district) => district !== null));
};

const getDistricts = async () => {
  const districtsDir = "../src/data/legislatives/district";
  const districtFiles = fs.readdirSync(districtsDir);
  return Promise.all(
    districtFiles.map((fileName) => {
      if (!/^.*\.ts$/.test(fileName)) {
        return null;
      }

      return import(`${districtsDir}/${fileName}`).then(
        (data) => Object.values(data)[0] as District,
      );
    }),
  ).then((d) => d.filter((district) => district !== null));
};

const main = async () => {
  const politicians = await getPoliticians();
  const districts = await getDistricts();

  const rawJson = fs.readFileSync("../districts.json").toString();
  const rawDistrictsStat = JSON.parse(rawJson);

  const districtsStat = rawDistrictsStat.map((districtStat: any) => {
    const district = districts.find((d) => {
      const code = `${
        d.departments.length === 0
          ? "ZZ"
          : d.departments.length > 1
            ? "ZX"
            : d.departments[0].code.replace(/^0/, "")
      }${String(d.number).padStart(2, "0")}`;

      return districtStat.code === code;
    });

    // const candidates = politicians
    //   .map((p) => {
    //     const isNthPolitician = (index: number) => {
    //       if (
    //         districtStat[`politician${index}FirstName`] === "" ||
    //         districtStat[`politician${index}LastName`] === ""
    //       ) {
    //         return false;
    //       }
    //
    //       return (
    //         districtStat[`politician${index}FirstName`].toLowerCase() ===
    //           p.firstName.toLowerCase() &&
    //         districtStat[`politician${index}LastName`].toLowerCase() ===
    //           p.lastName.toLowerCase()
    //       );
    //     };
    //
    //     const i = Array.from({ length: 19 }).findIndex((_, i) =>
    //       isNthPolitician(i + 1),
    //     );
    //
    //     if (i === -1) {
    //       return null;
    //     }
    //
    //     return {
    //       politician: p,
    //       votesTotal: null,
    //       isElected: null,
    //     };
    //   })
    //   .filter((p) => p !== null);

    const candidates = Array.from({ length: 19 })
      .map((_, i) => {
        const index = i + 1;

        const firstName =
          districtStat[`politician${index}FirstName`].toLowerCase();
        const lastName =
          districtStat[`politician${index}LastName`].toLowerCase();

        if (firstName === "" || lastName === "") {
          return null;
        }

        const politician = politicians.find(
          (p) =>
            p.firstName.toLowerCase() === firstName &&
            p.lastName.toLowerCase() === lastName,
        );

        if (politician === undefined) {
          return console.warn(
            `politician '${firstName} ${lastName}' not found in db`,
          );
        }

        return {
          politician,
          votesTotal: parseInt(districtStat[`candidate${index}Votes`]),
        };
      })
      .filter((c) => c !== null);

    if (candidates.length === 0) {
      console.warn("problem");
    }

    return {
      district,
      totalRegistered: districtStat.totalRegistered,
      blankVotesTotal: districtStat.blankVotesTotal,
      nullVotesTotal: districtStat.nullVotesTotal,
      candidates,
    };
  });

  const content = votesTemplate({ votes: districtsStat });
  fs.writeFileSync("../src/data/legislatives/votes-by-district.ts", content);
};

main();
