import assert from "assert";
import {
  CHECKING_TARGET_BALANCE,
  EF2_REBALANCE_THRESHOLD,
  EF2_TARGET_BALANCE,
} from "../accounts/constants";
import { trsFundsScott, TrsFundVanguard } from "../accounts/funds-by-account";
import { readSchwabPositions } from "../accounts/read-schwab-positions";
import { SchwabAccountTotals, SchwabPositions } from "../accounts/schemas";
import { entries } from "../utils/collections/entries";
import { round } from "../utils/numbers/round";
import { sum } from "../utils/numbers/sum";
import { readSchwabAccountTotals } from "../accounts/read-schwab-account-totals";

export const fundAllocationTargets: Record<TrsFundVanguard, number> = {
  VTWAX: 0.5,
  VGSLX: 0.1,
  VEMAX: 0.1,
  VSIAX: 0.2,
  VBTLX: 0.1,
};

// export const scottFundAllocationTargets = {
//   ORTYX: 0.05,
//   VWIUX: 0.02,
//   VWITX: 0.03,
//   DFCEX: 0.1,
//   DFVQX: 1 / 3,
//   DFVEX: 0.25,
//   DFAE: 0.07,
//   DFAX: 0.08,
//   VNQI: 0, // (<1%)
//   VTEB: 0.04,
// };

const getCashInBrokerages = (positions: SchwabPositions) =>
  sum(
    Object.values(positions).map(
      (a) => a["Cash & Cash Investments"]["Mkt Val (Market Value)"],
    ),
  );

export const getTotalWithoutScottFunds = (TRS: SchwabPositions["TRS"]) => {
  let total = TRS["Account Total"]["Mkt Val (Market Value)"];
  for (const fund of trsFundsScott) {
    total -= TRS[fund]["Mkt Val (Market Value)"];
  }

  // We will consider TRS cash as available cash to invest via getCashInBrokerages()
  return total - TRS["Cash & Cash Investments"]["Mkt Val (Market Value)"];
};

/**
 * TODO: need to compute rebalancing for other accounts, as well as need to
 * fund additional into EF2
 */

export const computeRebalanceOperations = async (
  availableCashToInvest: number,
  { TRS }: SchwabPositions,
) => {
  const accountTotal = getTotalWithoutScottFunds(TRS);
  const total = accountTotal + availableCashToInvest;

  return entries(fundAllocationTargets).reduce(
    (acc, [fund, target]) => {
      const targetValue = total * target;
      const currentValue = TRS[fund]["Mkt Val (Market Value)"];
      acc[fund] = round(targetValue - currentValue, 2);
      return acc;
    },
    {} as Record<TrsFundVanguard, number>,
  );
};

export const getCheckingChange = (totals: SchwabAccountTotals) =>
  totals.Checking.balance - CHECKING_TARGET_BALANCE;

export const getEf2Actions = ({ EF2 }: SchwabPositions) => {
  const ef2Change = EF2["Account Total"]["Mkt Val (Market Value)"] - EF2_TARGET_BALANCE;
  return {
    rebalance: Math.abs(ef2Change) > EF2_REBALANCE_THRESHOLD,
    amount: ef2Change,
  };
};

export const getAvailableCashToInvest = (
  cashInBrokerages: number,
  checkingChange: number,
  ef2Actions: ReturnType<typeof getEf2Actions>,
) =>
  cashInBrokerages +
  checkingChange +
  (ef2Actions.rebalance ? ef2Actions.amount : 0);

export const computeAllActions = async (schwabPositionsFile: string, schwabAccountTotalsFile: string) => {
  const [positions, accountTotals] = await Promise.all([
    readSchwabPositions(schwabPositionsFile),
    readSchwabAccountTotals(schwabAccountTotalsFile),
  ]);
  const checkingChange = getCheckingChange(accountTotals);
  const ef2Actions = getEf2Actions(positions);
  const cashInBrokerages = getCashInBrokerages(positions);

  const availableCashToInvest = round(getAvailableCashToInvest(
    cashInBrokerages,
    checkingChange,
    ef2Actions,
  ), 2);

  const trsActions = await computeRebalanceOperations(
    availableCashToInvest,
    positions,
  );

  const toInvest = round(sum(Object.values(trsActions)), 2);
  assert(
    Math.abs(toInvest - availableCashToInvest) <= 0.011, // annoying JS decimal stuff
    `Not enough money to invest, math is wrong. Expected ${availableCashToInvest} but got ${toInvest}`,
  );

  return {
    checking: { amount: checkingChange },
    ef2: ef2Actions,
    trs: trsActions,
  };
};
