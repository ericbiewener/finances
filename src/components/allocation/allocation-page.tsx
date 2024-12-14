"use client";
import invariant from "invariant";
import { FC } from "react";
import { sumPositions } from "../../accounts/positions/sum-positions";
import { H1, H2 } from "../../components/ui/headers";
import { TdHeader } from "../../components/ui/table";
import { fundInfo } from "../../funds/fund-info";
import { Positions } from "../../server/types";
import { toCurrency } from "../../utils/numbers/to-currency";
import { toPercentage } from "../../utils/numbers/to-percentage";
import { AdditionalCashForm } from "./additional-cash-form";
import { AllocationForm } from "./allocation-form";

const computeTotals = (summed: Record<string, number>) => {
  let stocks = 0;
  let bonds = 0;
  let cash = 0;

  for (const [k, v] of Object.entries(summed)) {
    if (k === "cash") {
      cash += v;
      continue;
    }

    const fund = fundInfo[k];
    invariant(fund, `Fund ${k} not found in fundInfo`);
    stocks += fund.allocation.stocks * v;
    bonds += fund.allocation.bonds * v;
  }

  const total = stocks + bonds + cash;

  return {
    totals: { stocks, bonds, cash, total },
    allocations: { stocks: stocks / total, bonds: bonds / total },
  };
};

type Props = { positions: Positions };

export const AllocationPage: FC<Props> = ({ positions }) => {
  const summed = sumPositions(positions);
  const { allocations, totals } = computeTotals(summed);

  return (
    <>
      <H1 className="mb-8">Allocation</H1>
      <div className="flex flex-col gap-y-8">
        <div>
          <H2>Adjustments</H2>
          <AdditionalCashForm />
        </div>
        <div>
          <H2>Asset Allocation</H2>
          <table>
            <tbody>
              <tr>
                <TdHeader>Stocks</TdHeader>
                <td>{toPercentage(allocations.stocks)}</td>
              </tr>
              <tr>
                <TdHeader>Bonds</TdHeader>
                <td>{toPercentage(allocations.bonds)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <H2>Totals</H2>
          <table>
            <tbody>
              <tr>
                <TdHeader>Stocks</TdHeader>
                <td>{toCurrency(totals.stocks, 0)}</td>
              </tr>
              <tr>
                <TdHeader>Bonds</TdHeader>
                <td>{toCurrency(totals.bonds, 0)}</td>
              </tr>
              <tr>
                <TdHeader>Cash</TdHeader>
                <td>{toCurrency(totals.cash, 0)}</td>
              </tr>
              <tr className="border-t bg-yellow-100">
                <TdHeader>Total</TdHeader>
                <td>
                  {toCurrency(totals.cash + totals.bonds + totals.stocks, 0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <AllocationForm funds={Object.keys(summed)} />
      </div>
    </>
  );
};
