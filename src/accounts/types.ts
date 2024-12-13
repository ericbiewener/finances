import { AccountNameSchwab } from "./accounts-by-type";

type Brokerage = Exclude<AccountNameSchwab, "Checking">;

type BrokerageData = {
  accountNum: string;
  cash: number;
  balance: number;
};

type CheckingData = {
  accountNum: string;
  cash: null;
  balance: number;
};

export type SchwabAccountTotals = Record<Brokerage, BrokerageData> & {
  Checking: CheckingData;
};
