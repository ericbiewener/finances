import { parse } from 'csv-parse/sync';
import fs from 'fs/promises';

export const readCsv = async (file: string): Promise<string[][]> => await parse(await fs.readFile(file, "utf-8"))
