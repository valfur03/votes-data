import { Entity } from "@/types/entity";
import fs from "node:fs";

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
