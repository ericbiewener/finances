import {
  AccountData,
  SchwabAccountName,
  SchwabAccountsToIgnore,
} from "../types";

export const schwabTotals: Record<
  SchwabAccountName | SchwabAccountsToIgnore,
  AccountData
> = {
  "EF II": {
    balance: 22204,
    accountNum: "416",
  },
  "Checking Brokerage": {
    balance: 0,
    accountNum: "800",
  },
  "EF II - JOINT": {
    balance: 0,
    accountNum: "565",
  },
  LPS: {
    balance: 34570,
    accountNum: "059",
  },
  IRA: {
    balance: 354269,
    accountNum: "082",
  },
  Roth: {
    balance: 24262,
    accountNum: "912",
  },
  TRS: {
    balance: 185916,
    accountNum: "153",
  },
  "LPS - JOINT": {
    balance: 0,
    accountNum: "869",
  },
  "TRS - JOINT": {
    balance: 1,
    accountNum: "810",
  },
  "Joint Checking": {
    balance: 0,
    accountNum: "437",
  },
  Checking: {
    balance: 177407,
    accountNum: "383",
  },
  "Checking - Joint": {
    balance: 71437,
    accountNum: "647",
  },
};
