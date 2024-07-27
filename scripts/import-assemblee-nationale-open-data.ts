#!/usr/bin/env tsx

import * as fs from "node:fs";

import {
  POLITICIANS_INPUT_DIRECTORY,
  POLITICIANS_OUTPUT_DIRECTORY,
  GROUPS_INPUT_DIRECTORY,
  GROUPS_OUTPUT_DIRECTORY,
  MANDATES_OUTPUT_DIRECTORY,
  DISTRICTS_OUTPUT_DIRECTORY,
  TERMS_OUTPUT_DIRECTORY,
} from "./shared/config/directories";
import { groupSchema } from "./shared/schemas/group.schema";
import { politicianSchema } from "./shared/schemas/politician.schema";
import { districtTemplate } from "./shared/templates/district/district.template";
import { groupTemplate } from "./shared/templates/group/group.template";
import { mandateTemplate } from "./shared/templates/mandate/mandate.template";
import { politicianTemplate } from "./shared/templates/politician/politician.template";
import { termTemplate } from "./shared/templates/term/term.template";
import { generateUniqueId } from "./shared/utils/generate-unique-id";
import { transformFromFilesInDir } from "./shared/utils/transform-from-files-in-dir";
import { writeFileFromTemplatedEntity } from "./shared/utils/write-file-from-templated-entity";

console.log("Creating groups");
const groupFiles = fs.readdirSync(GROUPS_INPUT_DIRECTORY);
const newGroups = transformFromFilesInDir(
  GROUPS_INPUT_DIRECTORY,
  groupFiles,
  groupSchema,
);
writeFileFromTemplatedEntity(GROUPS_OUTPUT_DIRECTORY, newGroups, groupTemplate);

console.log("Creating politicians");
const politicianFiles = fs.readdirSync(POLITICIANS_INPUT_DIRECTORY);
const newPoliticians = transformFromFilesInDir(
  POLITICIANS_INPUT_DIRECTORY,
  politicianFiles,
  politicianSchema,
);
writeFileFromTemplatedEntity(
  POLITICIANS_OUTPUT_DIRECTORY,
  newPoliticians,
  politicianTemplate,
);

console.log("Creating districts");
const newDistricts = newPoliticians.map((politician) => {
  const id = generateUniqueId();
  return {
    id,
    number: politician._source_district_number,
    departmentName: politician._source_district_department_name,
    _source_politician_id: politician._source_id,
  };
});
writeFileFromTemplatedEntity(
  DISTRICTS_OUTPUT_DIRECTORY,
  newDistricts,
  districtTemplate,
);

console.log("Creating mandates");
const newMandates = newPoliticians.map((politician) => {
  const id = generateUniqueId();
  const district = newDistricts.find(
    (district) => district._source_politician_id === politician._source_id,
  );
  const group = newGroups.find(
    (group) => group._source_id === politician._source_group_id,
  );
  if (group === undefined) {
    throw new Error(
      `parsing error: politician '${politician._source_id}' has not matching group '${politician._source_group_id}`,
    );
  }
  if (district === undefined) {
    throw new Error(
      `parsing error: district '${politician._source_id}' has not matching district`,
    );
  }

  return {
    id,
    politicianId: politician.id,
    seatNumber: politician._source_seat_number,
    districtId: district.id,
    groupId: group.id,
  };
});
writeFileFromTemplatedEntity(
  MANDATES_OUTPUT_DIRECTORY,
  newMandates,
  mandateTemplate,
);

if (newPoliticians.length === 0) {
  throw new Error("parsing error: expecting at least one politician");
}

console.log("Creating latest term");
const newTerm = {
  id: generateUniqueId(),
  number: newPoliticians[0]._source_nth_term,
  mandates: newMandates.sort((mandate1, mandate2) =>
    mandate1.seatNumber.localeCompare(mandate2.seatNumber),
  ),
};
writeFileFromTemplatedEntity(TERMS_OUTPUT_DIRECTORY, [newTerm], termTemplate);
