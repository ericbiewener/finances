"use server";
import assert from "assert";
import { readSchwabPositions } from "../accounts/read-schwab-positions";

export const getSchwabPositions = async () => {
  assert(
    process.env.SCHWAB_POSITIONS_FILE,
    "SCHWAB_POSITIONS_FILE should be defined",
  );
  return readSchwabPositions(process.env.SCHWAB_POSITIONS_FILE);
};
