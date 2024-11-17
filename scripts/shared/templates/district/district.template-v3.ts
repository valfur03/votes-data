import { compileHandlebarsFile } from "../../utils/compile-handlebars-file";

export const districtTemplateV3 = compileHandlebarsFile(
  __dirname + "/district.template-v3.ts.txt",
);
