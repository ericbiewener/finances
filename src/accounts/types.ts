export const schwabRetirementAccountNames = ["IRA", "Roth", "TRS"] as const;
export const schwabAccountsToIgnore = [
  "Checking Brokerage",
  "EF II - JOINT",
  "LPS - JOINT",
  "TRS - JOINT",
  "Joint Checking",
  "Checking - Joint",
] as const;

export const retirementAccountNames = [
  "401k",
  ...schwabRetirementAccountNames,
] as const;

export type SchwabRetirementAccountName = typeof schwabRetirementAccountNames;
export type SchwabAccountsToIgnore = typeof schwabAccountsToIgnore;
export type Four01kAccountName = "401k";
export type RetirementAccountName = typeof retirementAccountNames;
export type CheckingAccountName = "Checking";
export type EmergencyFundAccountName = "EF II";

export type SchwabLPSAccountName = "LPS";

export type SchwabAccountName =
  | SchwabRetirementAccountName
  | CheckingAccountName
  | EmergencyFundAccountName
  | SchwabLPSAccountName;

export type AccountName =
  | RetirementAccountName
  | CheckingAccountName
  | EmergencyFundAccountName;

export type AccountData = { balance: number; accountNum: string };
