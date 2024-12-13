import { capitalCase } from "change-case";
import { Component } from "solid-js";
import { H1, H2 } from "../components/ui/headers";
import {
  allocationTypes,
  fundInfo,
  fundsByAllocation,
} from "../funds/fund-info";
import { AllocationType } from "../funds/types";
import { createAsync } from "@solidjs/router";
import { getSchwabPositions } from "../server/get-schwab-positions";

type Props = {
  allocationType: AllocationType;
};

const FundForAlloc: Component<Props> = ({ allocationType }) => {
  const funds = fundsByAllocation[allocationType];
  return funds.length ? (
    <div>
      <H2>{capitalCase(allocationType)}</H2>
      <table>
        <thead>
          <tr>
            <th>Fund</th>
            <th>Summary</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {funds.map((sym) => {
            const fund = fundInfo[sym];
            return (
              <tr>
                <td>
                  <a href={fund.url}>{sym}</a>
                </td>
                <td>{fund.summary}</td>
                <td>{fund.notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default function FundInfo() {
  const positions = createAsync(() => getSchwabPositions());
  console.info(`:: positions`, positions())

  return (
    <>
      <H1 class="mb-8">Fund Info</H1>
      <div class="flex flex-col space-y-8">
        {allocationTypes.map((a) => (
          <FundForAlloc allocationType={a} />
        ))}
      </div>
    </>
  );
}
