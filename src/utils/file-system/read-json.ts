import fs from "fs/promises";

export const readJson = <T>(file: string): Promise<T> =>
  fs.readFile(file, "utf-8").then(JSON.parse);
