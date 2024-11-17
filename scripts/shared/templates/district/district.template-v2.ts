import { compileHandlebarsFile } from "../../utils/compile-handlebars-file";

export const districtTemplateV2 = compileHandlebarsFile(
  __dirname + "/district.template-v2.ts.txt",
);
