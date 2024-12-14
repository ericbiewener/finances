import { capitalCase } from "change-case";
import { FC } from "react";
import { H1, H2 } from "../../components/ui/headers";
import { Td, Th, Tr } from "../../components/ui/table";
import {
  allocationTypes,
  fundInfo,
  fundsByAllocation,
} from "../../funds/fund-info";
import { AllocationType } from "../../funds/types";
import { toPercentage } from "../../utils/numbers/to-percentage";

type Props = {
  allocationType: AllocationType;
};

const FundForAlloc: FC<Props> = ({ allocationType }) => {
  const funds = fundsByAllocation[allocationType];
  return funds.length ? (
    <div>
      <H2>{capitalCase(allocationType)}</H2>
      <table>
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
                <Td>{fund.name}</Td>
                <Td>{fund.summary}</Td>
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

export default async function FundInfoPage() {
  return (
    <>
      <H1 className="mb-8">Fund Info</H1>
      <div className="flex flex-col gap-y-8">
        {allocationTypes.map((a) => (
          <FundForAlloc key={a} allocationType={a} />
        ))}
      </div>
    </>
  );
}
