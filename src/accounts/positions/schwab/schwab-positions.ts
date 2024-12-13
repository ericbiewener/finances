import assert from "assert";
import { readCsv } from "../../../utils/file-system/read-csv";
import { identity } from "../../../utils/functions/identity";
import { parseCurrency } from "../../../utils/strings/parse-currency";
import { parseFloatAndAssert } from "../../../utils/strings/parse-float-and-assert";
import { parsePercent } from "../../../utils/strings/parse-percent";
import { schwabPositionsSchema } from "./schwab-positions-schema";

const isNull = (val: string) => val === "N/A" || val === "--";

const maybeNull =
  <V>(fn: (val: string) => V) =>
  (val: string) =>
    isNull(val) ? null : fn(val);

const float = maybeNull(parseFloatAndAssert);
const currency = maybeNull(parseCurrency);
const percent = maybeNull(parsePercent);
const ident = maybeNull(identity);

const VALUE_HEADER = "Mkt Val (Market Value)";
const CASH_FUND_NAME = "Cash & Cash Investments";
const ACCOUNT_TOTAL_FUND_NAME = "Account Total";

const colParsers = {
  "Qty (Quantity)": float,
  Price: currency,
  "Price Chng % (Price Change %)": percent,
  "Price Chng $ (Price Change $)": currency,
  [VALUE_HEADER]: currency,
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

export const readSchwabPositionsFile = async (schwabPositionsFile: string) => {
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

    if (cell === "Checking_Brokerage ...800") {
      isParsingCheckingBrokerage = true;
      continue;
    }

    if (!row[1]) {
      isParsingCheckingBrokerage = false;
      account = {};
      accounts[cell.slice(0, cell.indexOf(" "))] = account;
      continue;
    }

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
    const fundName =
      cell === CASH_FUND_NAME
        ? "cash"
        : cell === ACCOUNT_TOTAL_FUND_NAME
          ? "total"
          : cell;

    account[fundName] = fund;
    // start at 1 to skip Symbol header
    for (let i = 1; i < headers.length; i++) {
      const header = headers[i];
      const val = row[i];
      const parse = colParsers[header as keyof typeof colParsers];
      const finalHeader = header === VALUE_HEADER ? "value" : header;
      fund[finalHeader] = parse ? parse(val) : val;
    }
  }

  return schwabPositionsSchema.parse(accounts);
};
