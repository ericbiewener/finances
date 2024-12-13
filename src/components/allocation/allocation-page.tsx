"use client";
import invariant from "invariant";
import { FC } from "react";
import { SchwabPositions } from "../../accounts/schemas";
import { H1, H2 } from "../../components/ui/headers";
import { TdHeader } from "../../components/ui/table";
import { fundInfo } from "../../funds/fund-info";
import { storageKey } from "../../utils/local-storage/storage-key";
import { toCurrency } from "../../utils/numbers/to-currency";
import { toPercentage } from "../../utils/numbers/to-percentage";
import { AllocationForm } from "./allocation-form";

const skipKeys = ["Account Total"];

const sumPositions = ({ TRS, LPS, Roth }: SchwabPositions) => {
  const sums: Record<string, number> = {};
  [TRS, LPS, Roth].forEach((pos) => {
    Object.entries(pos).forEach(([sym, data]) => {
      if (skipKeys.includes(sym)) return;
      sums[sym] = (sums[sym] || 0) + data["Mkt Val (Market Value)"];
    });
  });
  return sums;
};

const computeTotals = (summed: Record<string, number>) => {
  let stocks = 0;
  let bonds = 0;
  let cash = 0;

  for (const [k, v] of Object.entries(summed)) {
    if (k === "Cash & Cash Investments") {
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

type Props = { schwabPositions: SchwabPositions };

export const AllocationPage: FC<Props> = ({ schwabPositions }) => {
  const summed = sumPositions(schwabPositions);
  const { allocations, totals } = computeTotals(summed);

  const [additionalCash, storeAdditionalCash] = storageKey<{ value: number }>(
    "additionalCash",
  );

  return (
    <>
      <H1 className="mb-8">Allocation</H1>
      <div className="flex flex-col gap-y-8">
        <div>
          <H2>Adjustments</H2>
          <label>
            Additional Cash:{" "}
            <input
              type="number"
              defaultValue={String(additionalCash?.value)}
              onInput={(e) =>
                storeAdditionalCash({ value: +e.currentTarget.value })
              }
            />
          </label>
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
            </tbody>
          </table>
        </div>
        <AllocationForm funds={Object.keys(summed)} />
      </div>
    </>
  );
};
