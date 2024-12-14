import { z as zz } from "zod";
import { z } from "../utils/zod/zod";
/**
 * Schwab Account Totals
 */
const brokerageSchema = z.strictObject({
  accountNum: z.string,
  cash: z.number,
  balance: z.number,
});

export const schwabAccountTotalsSchema = z.strictObject({
  EF2: brokerageSchema,
  "Checking Brokerage": brokerageSchema,
  LPS: brokerageSchema,
  IRA: brokerageSchema,
  Roth: brokerageSchema,
  TRS: brokerageSchema,
  Checking: z.strictObject({
    accountNum: z.string,
    cash: z.null,
    balance: z.number,
  }),
});

export type SchwabAccountTotals = zz.infer<typeof schwabAccountTotalsSchema>;
