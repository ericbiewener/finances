import { parseFloatAndAssert } from "./parse-float-and-assert";

export const parsePercent = (percent: string) => {
  const val = parseFloatAndAssert(percent.trim().replace(/[%,]/g, ""))
  return val / 100;
};
