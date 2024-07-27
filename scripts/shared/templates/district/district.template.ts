import { compileHandlebarsFile } from "../../utils/compile-handlebars-file";

export const districtTemplate = compileHandlebarsFile(
  __dirname + "/district.template.ts.txt",
);
