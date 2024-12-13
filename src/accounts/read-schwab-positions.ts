import assert from "assert";
import { readCsv } from "../utils/file-system/read-csv";
import { identity } from "../utils/functions/identity";
import { parseCurrency } from "../utils/strings/parse-currency";
import { parseFloatAndAssert } from "../utils/strings/parse-float-and-assert";
import { parsePercent } from "../utils/strings/parse-percent";
import { schwabPositionsSchema } from "./schemas";

const isNull = (val: string) => val === "N/A" || val === "--";

const maybeNull =
  <V>(fn: (val: string) => V) =>
  (val: string) =>
    isNull(val) ? null : fn(val);

const float = maybeNull(parseFloatAndAssert);
const currency = maybeNull(parseCurrency);
const percent = maybeNull(parsePercent);
const ident = maybeNull(identity);

const colParsers = {
  "Qty (Quantity)": float,
  Price: currency,
  "Price Chng % (Price Change %)": percent,
  "Price Chng $ (Price Change $)": currency,
  "Mkt Val (Market Value)": currency,
  "Day Chng % (Day Change %)": percent,
  "Day Chng $ (Day Change $)": currency,
  "Cost Basis": currency,
  "Gain % (Gain/Loss %)": percent,
  "Gain $ (Gain/Loss $)": currency,
  "% of Acct (% of Account)": percent,
  Ratings: float,
  "Security Type": ident,
  "Reinvest Capital Gains?": ident,
  "Reinvest?": ident,
  Description: ident,
};

type Fund = Record<string, string | number | null>;
type Account = Record<string, Fund>;

export const readSchwabPositions = async (schwabPositionsFile: string) => {
  const rows: string[][] = await readCsv(schwabPositionsFile);
  rows.shift(); // remove first row since it isn't an account

  const accounts: Record<string, Account> = {};
  let account: Account | null = null;
  let headers = null;

  // @TODO: remove once checking brokerage is gone
  let isParsingCheckingBrokerage = false;

  for (const row of rows) {
    const cell = row[0];
    if (!cell) {
      account = null;
      headers = null;
      continue;
    }

    // @TODO: remove once checking brokerage is gone
    if (cell === "Checking_Brokerage ...800") {
      isParsingCheckingBrokerage = true;
      continue;
    }

    if (!row[1]) {
      // @TODO: remove once checking brokerage is gone
      isParsingCheckingBrokerage = false;
      account = {};
      accounts[cell.slice(0, cell.indexOf(" "))] = account;
      continue;
    }

    // @TODO: remove once checking brokerage is gone
    if (isParsingCheckingBrokerage) {
      continue;
    }

    if (cell === "Symbol") {
      headers = row;
      continue;
    }
    assert(account, "account should be defined");
    assert(headers, "headers should be defined");
    const fund: Fund = {};
    account[cell] = fund;
    // start at 1 to skip Symbol header
    for (let i = 1; i < headers.length; i++) {
      const header = headers[i];
      const val = row[i];
      const parse = colParsers[header as keyof typeof colParsers];
      fund[headers[i]] = parse ? parse(val) : val;
    }
  }

  return schwabPositionsSchema.parse(accounts);
};
