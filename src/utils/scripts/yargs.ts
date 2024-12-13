import yargs, { Options } from "yargs";
import { hideBin } from "yargs/helpers";

type Opts = Record<string, Options>;

export const yargsInit = <O extends Opts>(opts: O) =>
  yargs(hideBin(process.argv)).alias("h", "help").version(false).options(opts);
