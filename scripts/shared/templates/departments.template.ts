import { compileHandlebarsFile } from "../utils/compile-handlebars-file";

export const departmentsTemplate = compileHandlebarsFile(
  __dirname + "/departments.template.ts.txt",
);
