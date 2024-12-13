import { z } from "zod";
import { numberOrNull, stringOrNull } from "../utils/zod/zod";

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

/**
 * Schwab Positions
 */
const schwabFundPositionsSchema = z.strictObject({
  Description: z.string(),
  "Qty (Quantity)": z.number(),
  Price: z.number(),
  "Price Chng % (Price Change %)": numberOrNull,
  "Price Chng $ (Price Change $)": numberOrNull,
  "Mkt Val (Market Value)": z.number(),
  "Day Chng % (Day Change %)": numberOrNull,
  "Day Chng $ (Day Change $)": numberOrNull,
  "Cost Basis": z.number(),
  "Gain % (Gain/Loss %)": z.number(),
  "Gain $ (Gain/Loss $)": z.number(),
  Ratings: numberOrNull,
  "Reinvest?": stringOrNull,
  "Reinvest Capital Gains?": stringOrNull,
  "% of Acct (% of Account)": z.number(),
  "Security Type": z.string(),
});

const schwabCashPositionsSchema = z.strictObject({
  Description: z.null(),
  "Qty (Quantity)": z.null(),
  Price: z.null(),
  "Price Chng % (Price Change %)": z.null(),
  "Price Chng $ (Price Change $)": z.null(),
  "Mkt Val (Market Value)": z.number(),
  "Day Chng % (Day Change %)": z.number(),
  "Day Chng $ (Day Change $)": z.number(),
  "Cost Basis": z.null(),
  "Gain % (Gain/Loss %)": z.null(),
  "Gain $ (Gain/Loss $)": z.null(),
  Ratings: z.null(),
  "Reinvest?": z.null(),
  "Reinvest Capital Gains?": z.null(),
  "% of Acct (% of Account)": numberOrNull,
  "Security Type": z.string(),
});

const schwabAccountTotalPositionsSchema = z.strictObject({
  Description: z.null(),
  "Qty (Quantity)": z.null(),
  Price: z.null(),
  "Price Chng % (Price Change %)": z.null(),
  "Price Chng $ (Price Change $)": z.null(),
  "Mkt Val (Market Value)": z.number(),
  "Day Chng % (Day Change %)": z.number(),
  "Day Chng $ (Day Change $)": z.number(),
  "Cost Basis": z.number(),
  "Gain % (Gain/Loss %)": z.number(),
  "Gain $ (Gain/Loss $)": z.number(),
  Ratings: z.null(),
  "Reinvest?": z.null(),
  "Reinvest Capital Gains?": z.null(),
  "% of Acct (% of Account)": z.null(),
  "Security Type": z.null(),
});

export const schwabPositionsSchema = z.strictObject({
  "EF2": z.strictObject({
    BSV: schwabFundPositionsSchema,
    VTIP: schwabFundPositionsSchema,
    DFGFX: schwabFundPositionsSchema,
    SWRSX: schwabFundPositionsSchema,
    SWTSX: schwabFundPositionsSchema,
    "Cash & Cash Investments": schwabCashPositionsSchema,
    "Account Total": schwabAccountTotalPositionsSchema,
  }),
  "LPS": z.strictObject({
    BND: schwabFundPositionsSchema,
    DFIC: schwabFundPositionsSchema,
    VNQ: schwabFundPositionsSchema,
    VASIX: schwabFundPositionsSchema,
    VBTLX: schwabFundPositionsSchema,
    "Cash & Cash Investments": schwabCashPositionsSchema,
    "Account Total": schwabAccountTotalPositionsSchema,
  }),
  "IRA": z.strictObject({
    BND: schwabFundPositionsSchema,
    DFEM: schwabFundPositionsSchema,
    VNQ: schwabFundPositionsSchema,
    VNQI: schwabFundPositionsSchema,
    DFVEX: schwabFundPositionsSchema,
    DFVQX: schwabFundPositionsSchema,
    "Cash & Cash Investments": schwabCashPositionsSchema,
    "Account Total": schwabAccountTotalPositionsSchema,
  }),
  "Roth": z.strictObject({
    VNQ: schwabFundPositionsSchema,
    VNQI: schwabFundPositionsSchema,
    "Cash & Cash Investments": schwabCashPositionsSchema,
    "Account Total": schwabAccountTotalPositionsSchema,
  }),
  "TRS": z.strictObject({
    DFAE: schwabFundPositionsSchema,
    DFAX: schwabFundPositionsSchema,
    VNQI: schwabFundPositionsSchema,
    VTEB: schwabFundPositionsSchema,
    DFCEX: schwabFundPositionsSchema,
    DFVEX: schwabFundPositionsSchema,
    DFVQX: schwabFundPositionsSchema,
    ORTYX: schwabFundPositionsSchema,
    VWITX: schwabFundPositionsSchema,
    VWIUX: schwabFundPositionsSchema,
    VTWAX: schwabFundPositionsSchema,
    VGSLX: schwabFundPositionsSchema,
    VEMAX: schwabFundPositionsSchema,
    VSIAX: schwabFundPositionsSchema,
    VBTLX: schwabFundPositionsSchema,
    "Cash & Cash Investments": schwabCashPositionsSchema,
    "Account Total": schwabAccountTotalPositionsSchema,
  }),
});

export type SchwabPositions = z.infer<typeof schwabPositionsSchema>;
