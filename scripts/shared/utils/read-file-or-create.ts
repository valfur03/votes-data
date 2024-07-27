import { readFile, stat, writeFile } from "node:fs/promises";

export const readFileOrCreate = async (path: string) => {
  return stat(path)
    .then(async () => {
      return readFile(path, "utf8");
    })
    .catch(async (error) => {
      if (error.code === "ENOENT") {
        const content = "\n";
        await writeFile(path, content);
        return content;
      } else {
        throw error;
      }
    });
};
