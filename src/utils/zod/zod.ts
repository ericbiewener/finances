import { z } from "zod";

export const stringOrNull = z.union([z.string(), z.null()]);
export const numberOrNull = z.union([z.number(), z.null()]);
