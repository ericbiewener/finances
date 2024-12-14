"use server";
import path from "path";
import { getProjectRoot } from "../../project-root";
import { readFidelityPositionsFile } from "../accounts/positions/fidelity/fidelity-positions";
import { readSchwabPositionsFile } from "../accounts/positions/schwab/schwab-positions";
import { glob } from "../utils/file-system/glob";

const PROJECT_ROOT = getProjectRoot();
const EXPORT_DIR = "_exports_";

const getSchwabPositions = async () => {
  if (process.env.SCHWAB_POSITIONS_FILE) {
    return readSchwabPositionsFile(process.env.SCHWAB_POSITIONS_FILE);
  }

  const files = await glob(`${EXPORT_DIR}/*.csv`, { cwd: PROJECT_ROOT });

  for (const file of files) {
    if (path.basename(file).startsWith("All-Accounts-Positions")) {
      return readSchwabPositionsFile(file);
    }
  }

  throw new Error("Could not find Schwab positions file");
};

const getFidelityPositions = () =>
  readFidelityPositionsFile(
    process.env.FIDELITY_POSITIONS_FILE ||
      path.join(PROJECT_ROOT, EXPORT_DIR, "fidelity-positions.json"),
  );

export const getPositions = async () => {
  const [schwab, fidelity] = await Promise.all([
    getSchwabPositions(),
    getFidelityPositions(),
  ]);

  return { schwab, fidelity };
};
