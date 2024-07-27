export const GROUPS_INPUT_DIRECTORY =
  process.env.GROUPS_OUTPUT_DIRECTORY ||
  "../public/deputes_actifs_mandats_actifs_organes/json/organe";
export const GROUPS_OUTPUT_DIRECTORY =
  process.env.GROUPS_OUTPUT_DIRECTORY || "../src/data/legislatives/group";

export const POLITICIANS_INPUT_DIRECTORY =
  process.env.POLITICIANS_INPUT_DIRECTORY ||
  "../public/deputes_actifs_mandats_actifs_organes/json/acteur";
export const POLITICIANS_OUTPUT_DIRECTORY =
  process.env.POLITICIANS_OUTPUT_DIRECTORY || "../src/data/politician";

export const MANDATES_OUTPUT_DIRECTORY =
  process.env.MANDATES_OUTPUT_DIRECTORY || "../src/data/legislatives/mandate";

export const DISTRICTS_OUTPUT_DIRECTORY =
  process.env.DISTRICTS_OUTPUT_DIRECTORY || "../src/data/legislatives/district";

export const TERMS_OUTPUT_DIRECTORY =
  process.env.TERMS_OUTPUT_DIRECTORY || "../src/data/legislatives/term";
