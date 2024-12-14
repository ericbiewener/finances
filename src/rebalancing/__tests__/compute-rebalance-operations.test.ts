import { sum } from "../../utils/numbers/sum";
import { getMockDataFile } from "../../utils/testing/get-mock-data-file";
import {
  computeAllActions,
  fundAllocationTargets,
} from "../compute-rebalance-operations";

describe("allocation targets", () => {
  it("fund allocation targets should equal 100%", () => {
    expect(sum(Object.values(fundAllocationTargets))).toBe(0.9999999999999999);
  });

  // it("scott fund allocation targets should equal 100%", () => {
  //   expect(sum(Object.values(scottFundAllocationTargets))).toBe(
  //     0.9999999999999999,
  //   );
  // });
});

it("computeAllActions", async () => {
  const schwabPositionsFile = getMockDataFile("schwab-account-positions.csv");
  const schwabAccountTotalsFile = getMockDataFile("schwab-account-totals.json");

  const results = await computeAllActions(
    schwabPositionsFile,
    schwabAccountTotalsFile,
  );
  console.info(`:: results`, results);
  // expect(results).toEqual({
  //   VTWAX: 104453.22,
  //   VGSLX: 20890.644,
  //   VEMAX: 20890.644,
  //   VSIAX: 41781.288,
  //   VBTLX: 20890.644,
  // });

  // expect(sum(Object.values(results))).toEqual(
  //   getTotalWithoutScottFunds(await readSchwabPositions(schwabPositionsFile)),
  // );
});
