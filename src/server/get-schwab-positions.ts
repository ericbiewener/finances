import { query } from "@solidjs/router";
import { readSchwabPositions } from "../accounts/read-schwab-positions";
import assert from "assert";

export const getSchwabPositions = query(async () => {
  "use server";
  assert(
    process.env.SCHWAB_POSITIONS_FILE,
    "SCHWAB_POSITIONS_FILE should be defined",
  );
  return readSchwabPositions(process.env.SCHWAB_POSITIONS_FILE);
}, "schwabPositions");
