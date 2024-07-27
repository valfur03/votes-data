import fs from "node:fs";
import { Readable } from "node:stream";
import { ReadableStream } from "node:stream/web";

export const downloadUrlsInDirectory = (
  urls_and_names: Array<{ url: string; name: string }>,
  outputDirectory: string,
) => {
  urls_and_names.forEach(({ url, name }) => {
    fetch(url)
      .then((res) => {
        if (!res.ok || res.body === null) {
          throw new Error(
            "An unexpteced error occured while downloading the politicians images",
          );
        }

        fs.mkdirSync(outputDirectory, { recursive: true });
        const stream = fs.createWriteStream(`${outputDirectory}/${name}`);

        Readable.fromWeb(res.body as ReadableStream).pipe(stream);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};
