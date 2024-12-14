import fs from "fs/promises";

export const readFidelityPositionsFile = async (
  fidelityPositionsFile: string,
) => {
  const fileContents = await fs.readFile(fidelityPositionsFile, "utf-8");
  const fidelityPositions = JSON.parse(fileContents);
  return fidelityPositions;
};
