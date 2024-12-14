import { z } from "zod";

/**
 * Schwab Account Totals
 */
const brokerageSchema = z.strictObject({
  accountNum: z.string(),
  cash: z.number(),
  balance: z.number(),
});

export const schwabAccountTotalsSchema = z.strictObject({
  EF2: brokerageSchema,
  "Checking Brokerage": brokerageSchema,
  LPS: brokerageSchema,
  IRA: brokerageSchema,
  Roth: brokerageSchema,
  TRS: brokerageSchema,
  Checking: z.strictObject({
    accountNum: z.string(),
    cash: z.null(),
    balance: z.number(),
  }),
});

export type SchwabAccountTotals = z.infer<typeof schwabAccountTotalsSchema>;
