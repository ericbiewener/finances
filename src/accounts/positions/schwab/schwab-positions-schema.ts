import { z } from "../../../utils/zod/zod";

/**
 * Note that the `value` key is translated from "Mkt Val (Market Value)" in the
 * actual CSV file.
 */

const schwabFundPositionsSchema = z.strictObject({
  Description: z.string,
  "Qty (Quantity)": z.number,
  Price: z.number,
  "Price Chng % (Price Change %)": z.numberOrNull,
  "Price Chng $ (Price Change $)": z.numberOrNull,
  value: z.number,
  "Day Chng % (Day Change %)": z.numberOrNull,
  "Day Chng $ (Day Change $)": z.numberOrNull,
  "Cost Basis": z.number,
  "Gain % (Gain/Loss %)": z.number,
  "Gain $ (Gain/Loss $)": z.number,
  Ratings: z.numberOrNull,
  "Reinvest?": z.stringOrNull,
  "Reinvest Capital Gains?": z.stringOrNull,
  "% of Acct (% of Account)": z.number,
  "Security Type": z.string,
});

const schwabCashPositionsSchema = z.strictObject({
  Description: z.null,
  "Qty (Quantity)": z.null,
  Price: z.null,
  "Price Chng % (Price Change %)": z.null,
  "Price Chng $ (Price Change $)": z.null,
  value: z.number,
  "Day Chng % (Day Change %)": z.number,
  "Day Chng $ (Day Change $)": z.number,
  "Cost Basis": z.null,
  "Gain % (Gain/Loss %)": z.null,
  "Gain $ (Gain/Loss $)": z.null,
  Ratings: z.null,
  "Reinvest?": z.null,
  "Reinvest Capital Gains?": z.null,
  "% of Acct (% of Account)": z.numberOrNull,
  "Security Type": z.string,
});

const schwabAccountTotalPositionsSchema = z.strictObject({
  Description: z.null,
  "Qty (Quantity)": z.null,
  Price: z.null,
  "Price Chng % (Price Change %)": z.null,
  "Price Chng $ (Price Change $)": z.null,
  value: z.number,
  "Day Chng % (Day Change %)": z.number,
  "Day Chng $ (Day Change $)": z.number,
  "Cost Basis": z.numberOrNull,
  "Gain % (Gain/Loss %)": z.numberOrNull,
  "Gain $ (Gain/Loss $)": z.numberOrNull,
  Ratings: z.null,
  "Reinvest?": z.null,
  "Reinvest Capital Gains?": z.null,
  "% of Acct (% of Account)": z.null,
  "Security Type": z.null,
});

export const schwabPositionsSchema = z.strictObject({
  EF2: z.strictObject({
    BSV: schwabFundPositionsSchema,
    VTIP: schwabFundPositionsSchema,
    DFGFX: schwabFundPositionsSchema,
    SWRSX: schwabFundPositionsSchema,
    SWTSX: schwabFundPositionsSchema,
    cash: schwabCashPositionsSchema,
    total: schwabAccountTotalPositionsSchema,
  }),
  LPS: z.strictObject({
    BND: schwabFundPositionsSchema,
    DFIC: schwabFundPositionsSchema,
    VNQ: schwabFundPositionsSchema,
    VASIX: schwabFundPositionsSchema,
    VBTLX: schwabFundPositionsSchema,
    cash: schwabCashPositionsSchema,
    total: schwabAccountTotalPositionsSchema,
  }),
  IRA: z.strictObject({
    cash: schwabCashPositionsSchema,
    total: schwabAccountTotalPositionsSchema,
  }),
  Roth: z.strictObject({
    VNQ: schwabFundPositionsSchema,
    VNQI: schwabFundPositionsSchema,
    cash: schwabCashPositionsSchema,
    total: schwabAccountTotalPositionsSchema,
  }),
  TRS: z.strictObject({
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
    cash: schwabCashPositionsSchema,
    total: schwabAccountTotalPositionsSchema,
  }),
});
