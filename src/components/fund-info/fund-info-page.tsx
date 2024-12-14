"use client";
import { capitalCase } from "change-case";
import { FC, useState } from "react";
import {
  allocationTypes,
  fundInfo,
  fundsByAllocation,
} from "../../funds/fund-info";
import { AllocationType } from "../../funds/types";
import { toPercentage } from "../../utils/numbers/to-percentage";
import { H1, H2 } from "../ui/headers";
import { Td, Th, Tr } from "../ui/table";

type Props = {
  allocationType: AllocationType;
  showNotes: boolean;
};

const FundForAlloc: FC<Props> = ({ allocationType, showNotes }) => {
  const funds = fundsByAllocation[allocationType];
  return funds.length ? (
    <div>
      <H2>{capitalCase(allocationType)}</H2>
      <table className="w-full">
        <thead>
          <Tr>
            <Th>Fund</Th>
            <Th>Name</Th>
            <Th>Summary</Th>
            <Th className="text-right">US</Th>
            <Th className="text-right">Int</Th>
            {/* <Th>Notes</Th> */}
          </Tr>
        </thead>
        <tbody>
          {funds.map((sym) => {
            const fund = fundInfo[sym];
            return (
              <Tr key={sym}>
                <Td>
                  <a href={fund.url}>{sym}</a>
                </Td>
                <Td className="w-1/2">{fund.name}</Td>
                <Td className={showNotes ? "" : "line-clamp-1"}>
                  {fund.notes}
                </Td>
                <Td className="text-right">{toPercentage(fund.geo.us, 0)}</Td>
                <Td className="text-right">{toPercentage(fund.geo.int, 0)}</Td>
                {/* <Td>{fund.notes}</Td> */}
              </Tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : null;
};

export const FundInfoPage: FC = () => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <>
      <H1 className="mb-8">Fund Info</H1>
      <div className="flex flex-col gap-y-8">
        <label>
          <input
            type="checkbox"
            checked={showNotes}
            onChange={(e) => setShowNotes(e.currentTarget.checked)}
          />
          Show Notes
        </label>
        {allocationTypes.map((a) => (
          <FundForAlloc key={a} allocationType={a} showNotes={showNotes} />
        ))}
      </div>
    </>
  );
};
