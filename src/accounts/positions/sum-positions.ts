import { Positions } from "../../server/types";
import { SchwabPositions } from "./schwab/types";

const inc = (v: number | undefined, amount: number) => (v || 0) + amount;

const sumSchwabPositions = ({ EF2, ...positions }: SchwabPositions) => {
  const skipKeys = ["total"];

  const sums: Record<string, number> = {};

  Object.values(positions).forEach((pos) => {
    Object.entries(pos).forEach(([sym, data]) => {
      if (skipKeys.includes(sym)) return;
      sums[sym] = inc(sums[sym], data.value);
    });
  });

  return sums;
};

export const sumPositions = ({ schwab, fidelity }: Positions) => {
  const sums: Record<string, number> = sumSchwabPositions(schwab);
  Object.entries(fidelity).forEach(([sym, total]) => {
    // No idea why type assertion is necessary
    sums[sym] = inc(sums[sym], total as number);
  });
  return sums;
};
