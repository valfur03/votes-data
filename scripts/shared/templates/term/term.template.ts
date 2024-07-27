import { compileHandlebarsFile } from "../../utils/compile-handlebars-file";

export const termTemplate = compileHandlebarsFile(
  __dirname + "/term.template.ts.txt",
);
