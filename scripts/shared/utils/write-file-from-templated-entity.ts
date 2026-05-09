import fs from "node:fs";

import { Entity } from "@/types/entity";

export const writeFileFromTemplatedEntity = (
  outputDirectory: string,
  entities: Array<Entity<unknown> & { _source_id: string }>,
  entityTemplate: HandlebarsTemplateDelegate,
) => {
  entities.forEach((entity) => {
    const name = `${entity.id}.ts`;
    const content = entityTemplate({ entity });

    fs.mkdirSync(outputDirectory, { recursive: true });
    fs.writeFileSync(`${outputDirectory}/${name}`, content);
  });
};
