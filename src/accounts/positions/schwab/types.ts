import { z } from "zod";
import { schwabPositionsSchema } from "./schwab-positions-schema";

export type SchwabPositions = z.infer<typeof schwabPositionsSchema>;
