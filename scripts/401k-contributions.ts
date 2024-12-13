import { round } from "../src/utils/numbers/round";
import { toPercentage } from "../src/utils/numbers/to-percentage";
import { getRemainingPaydays } from "../src/utils/paydays/get-paydays-in-year";
import { yargsInit } from "../src/utils/scripts/yargs";

const { current, wagePerPayday, limit, year } = yargsInit({
  current: {
    type: "number",
    description: "Current 401k contribution percentage",
    demandOption: true,
  },
  wagePerPayday: {
    type: "number",
    description: "Wage per pay period",
    demandOption: true,
  },
  limit: {
    type: "number",
    description: "401k contribution limit",
    demandOption: true,
  },
  year: {
    type: "number",
    description: "401k contribution limit",
    default: new Date().getFullYear(),
  },
}).parseSync();

// const today = startOfDay(new Date())

const paydays = getRemainingPaydays(year);
const remainingLimit = limit - current;
const neededAmountPerPayday = remainingLimit / paydays.length;
const percentPerPayday = neededAmountPerPayday / wagePerPayday;

console.log({
  remainingLimit,
  remainingPaydays: paydays.length,
  neededAmountPerPayday,
  percentPerPayday: toPercentage(round(percentPerPayday, 2), 0),
});
