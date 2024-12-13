const ef2 = "EF2";
const checkingBrokerage = "Checking Brokerage";
const lps = "LPS";
const ira = "IRA";
const roth = "Roth";
const trs = "TRS";
const checking = "Checking";
const k401 = "401k";

export const schwabAccountNames = [
  ef2,
  ira,
  roth,
  trs,
  checkingBrokerage,
  lps,
  checking,
] as const;

export const schwabInvestmentAccountNames = [
  ef2,
  ira,
  roth,
  trs,
  checkingBrokerage,
  lps,
] as const;

export const schwabRetirementAccountNames = [ira, roth, trs] as const;
export const retirementAccountNames = [
  ...schwabRetirementAccountNames,
  k401,
] as const;

export type AccountName401k = typeof k401;
export type AccountNameSchwab = (typeof schwabAccountNames)[number];
