import chalk from "chalk";
import { computeAllActions } from "../src/rebalancing/compute-rebalance-operations";
import { yargsInit } from "../src/utils/scripts/yargs";

const { schwabAccountTotals, schwabPositions } = yargsInit({
  schwabAccountTotals: { type: "string", demandOption: true },
  schwabPositions: { type: "string", demandOption: true },
}).parseSync();

const main = async () => {
  const { trs, checking, ef2 } = await computeAllActions(
    schwabPositions,
    schwabAccountTotals,
  );
  console.log(chalk.green("Checking Excess:"), checking.amount);
  console.log(
    chalk.green("EF2 Rebalance:  "),
    ef2.rebalance ? ef2.amount : "No",
  );

  console.log();
  console.log(chalk.green("TRS Rebalance:"));
  Object.entries(trs).forEach(([fund, amount]) => console.log(`${fund} `, amount));
};

main();
