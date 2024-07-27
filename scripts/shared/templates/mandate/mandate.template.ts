import { compileHandlebarsFile } from "../../utils/compile-handlebars-file";

export const mandateTemplate = compileHandlebarsFile(
  __dirname + "/mandate.template.ts.txt",
);
