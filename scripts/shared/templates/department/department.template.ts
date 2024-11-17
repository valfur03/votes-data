import { compileHandlebarsFile } from "../../utils/compile-handlebars-file";

export const departmentTemplate = compileHandlebarsFile(
  __dirname + "/department.template.ts.txt",
);
