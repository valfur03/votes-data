import { compileHandlebarsFile } from "../../utils/compile-handlebars-file";

export const groupTemplate = compileHandlebarsFile(
  __dirname + "/group.template.ts.txt",
);
