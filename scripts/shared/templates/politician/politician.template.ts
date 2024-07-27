import { compileHandlebarsFile } from "../../utils/compile-handlebars-file";

export const politicianTemplate = compileHandlebarsFile(
  __dirname + "/politician.template.ts.txt",
);
