import fs from "node:fs";
import { ZodType, ZodTypeDef } from "zod";

export const transformFromFilesInDir = <Output>(
  directory: string,
  files: Array<string>,
  schema: ZodType<Output, ZodTypeDef, unknown>,
) => {
  return files
    .map((file) => {
      const rawJson = JSON.parse(
        fs.readFileSync(`${directory}/${file}`, "utf8"),
      );

      return schema.parse(rawJson);
    })
    .filter<NonNullable<Output>>(
      (output): output is NonNullable<Output> =>
        output !== null && output !== undefined,
    );
};
