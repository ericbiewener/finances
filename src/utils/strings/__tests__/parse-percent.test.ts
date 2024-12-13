import { parsePercent } from "../parse-percent.ts";

it("parsePercent", () => {
  expect(parsePercent("5%")).toBe(0.05);
  expect(parsePercent("5.25")).toBe(0.0525);
  expect(parsePercent(" 5% ")).toBe(0.05);
  expect(() => parsePercent("a5")).toThrow();
});
