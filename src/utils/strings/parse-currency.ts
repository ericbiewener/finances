import assert from "assert";
import { parseFloatAndAssert } from "./parse-float-and-assert";

export const parseCurrency = (currency: string) => {
  const val = parseFloatAndAssert(currency.trim().replace(/[$,]/g, ""));
  assert(!isNaN(val), `Invalid currency: ${currency}`);
  return val;
};
