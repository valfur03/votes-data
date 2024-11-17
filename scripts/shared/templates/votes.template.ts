import { compileHandlebarsFile } from "../utils/compile-handlebars-file";

export const votesTemplate = compileHandlebarsFile(
  __dirname + "/votes.template.ts.txt",
);
