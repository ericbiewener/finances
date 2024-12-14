import { readJson } from "../../../utils/file-system/read-json";
import { fidelityPositionsSchema } from "./fidelity-positions-schema";

export const readFidelityPositionsFile = async (
  fidelityPositionsFile: string,
) => {
  const data = await readJson(fidelityPositionsFile);
  return fidelityPositionsSchema.parse(data);
};
