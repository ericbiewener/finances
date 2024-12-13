import { readJson } from "../utils/file-system/read-json";
import { schwabAccountTotalsSchema } from "./schemas";

export const readSchwabAccountTotals = async (
  schwabAccountTotalsFile: string,
) => {
  const totals = await readJson(schwabAccountTotalsFile);
  return schwabAccountTotalsSchema.parse(totals);
};
