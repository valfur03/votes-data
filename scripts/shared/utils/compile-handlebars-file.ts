import Handlebars from "handlebars";
import fs from "node:fs";

export const compileHandlebarsFile = (file: string) => {
  const source = fs.readFileSync(file).toString();

  return Handlebars.compile(source);
};
