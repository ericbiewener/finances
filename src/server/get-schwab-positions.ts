"use server";
import { readSchwabPositionsFile } from "../accounts/positions/schwab/schwab-positions";
import { glob } from "../utils/file-system/glob";

const EXPORT_DIR = "_exports_";

const findFile = async () => {
  if (process.env.SCHWAB_POSITIONS_FILE) {
    return process.env.SCHWAB_POSITIONS_FILE;
  }

  const files = await glob(`${EXPORT_DIR}/*.csv`);

  for (const file of files) {
    if (file.startsWith("All-Accounts-Positions")) {
      return file;
    }
  }

  throw new Error("Could not find Schwab positions file");
};

export const getSchwabPositions = async () =>
  readSchwabPositionsFile(await findFile());
