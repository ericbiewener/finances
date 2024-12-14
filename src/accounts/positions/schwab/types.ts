import { z as zz } from "zod";
import { schwabPositionsSchema } from "./schwab-positions-schema";

export type SchwabPositions = zz.infer<typeof schwabPositionsSchema>;
