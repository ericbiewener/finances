import { readSchwabPositions } from "../src/accounts/read-schwab-positions";
import { round } from "../src/utils/numbers/round";
import { yargsInit } from "../src/utils/scripts/yargs";

const { schwabPositions } = yargsInit({
  schwabPositions: { type: "string", demandOption: true },
}).parseSync();

const roundIt = (value: number) => round(value, -2).toLocaleString();

const fundName = (fund: string) => `${fund}:`.padEnd(6);
const fundValue = (fund: { "Mkt Val (Market Value)": number }) =>
  roundIt(fund["Mkt Val (Market Value)"], -2).toLocaleString();


const main = async () => {
  const positions = await readSchwabPositions(schwabPositions);

  Object.entries(positions).forEach(([a, funds]) => {
    console.log(`[b]${a}[/b]`);

    console.log(
      Object.entries(funds)
        .map(([b, c]) => `${fundName(b)} ${fundValue(c)}`)
        .join("\n"),
    );

    console.log();
  });

  console.log(`[b]401k[/b]`);
  console.log(`Account Total: ${roundIt(20832.18)}`);
};

main();