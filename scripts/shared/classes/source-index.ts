import { createWriteStream, WriteStream } from "node:fs";
import { stat, readFile, writeFile } from "node:fs/promises";

import { readFileOrCreate } from "../utils/read-file-or-create";

export class SourceIndex {
  private readonly _indexes: Map<string, string>;
  private _fs: WriteStream | null = null;

  constructor() {
    this._indexes = new Map();
  }

  private _clear() {
    this._indexes.clear();
  }

  private _add_index(index: string, ref: string) {
    this._indexes.set(index, ref);
  }

  async openFile(path: string) {
    this._clear();

    await readFileOrCreate(path).then((text) => {
      text.split("\n").forEach((line) => {
        if (/^\n?$/.test(line)) {
          return;
        }

        const [index, ref] = line.split(":");
        this._add_index(index, ref);
      });
    });

    this._fs = createWriteStream(path);
  }

  closeFile() {
    for (const [index, ref] of this._indexes) {
      this._fs?.write(`${index}:${ref}\n`);
    }

    this._fs?.close();
  }

  exists(index: string) {
    return this._indexes.has(index);
  }

  get(index: string) {
    return this._indexes.get(index);
  }

  create(index: string, ref: string) {
    if (this.exists(index)) {
      throw new Error(`index '${index}' already exists`);
    }
    this._add_index(index, ref);
  }
}
