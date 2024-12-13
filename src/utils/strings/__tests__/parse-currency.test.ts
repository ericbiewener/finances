import { parseCurrency } from "../parse-currency";

it("parseCurrency", () => {
  expect(parseCurrency("1,000.00")).toBe(1000);
  expect(parseCurrency("$1,000.00")).toBe(1000);
  expect(parseCurrency(" $1,000.00 ")).toBe(1000);
  expect(() => parseCurrency("USD $1,000.00 ")).toThrow();
});
