import assert from "assert";

export const parseFloatAndAssert = (value: string) => {
  const num = parseFloat(value);
  assert(!isNaN(num), `Expected a number, but got "${value}"`);
  return num;
};
