import { z } from "../../../utils/zod/zod";

export const fidelityPositionsSchema = z.strictObject({
  FSPSX: z.number,
  HASGX: z.number,
  O8GA: z.number,
  O8GB: z.number,
  O8GC: z.number,
});
