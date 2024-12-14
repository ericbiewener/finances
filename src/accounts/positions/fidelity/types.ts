import { z as zz } from "zod";
import { fidelityPositionsSchema } from "./fidelity-positions-schema";

export type FidelityPositions = zz.infer<typeof fidelityPositionsSchema>;
