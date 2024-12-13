import { round } from "./round";

export const toCurrency = (num: number, decimalPlaces = 2) =>
  `$${round(num, decimalPlaces).toLocaleString()}`;
