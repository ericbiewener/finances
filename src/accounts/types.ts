export type RetirementAccountName = "401k" | "IRA" | "Roth" | "TRS";
export type CheckingAccountName = "Checking";
export type EmergencyFundAccountName = "EF";

export type AccountName =
  | RetirementAccountName
  | CheckingAccountName
  | EmergencyFundAccountName;
