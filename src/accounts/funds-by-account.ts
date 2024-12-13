export const trsFundsVanguard = [
  "VTWAX",
  "VGSLX",
  "VEMAX",
  "VSIAX",
  "VBTLX",
] as const;

export const trsFundsScott = [
  "ORTYX",
  "VWIUX",
  "VWITX",
  "DFCEX",
  "DFVQX",
  "DFVEX",
  "DFAE",
  "DFAX",
  "VNQI",
  "VTEB",
] as const;

export const trsFunds = [...trsFundsVanguard, ...trsFundsScott] as const;

export type TrsFund = (typeof trsFunds)[number];
export type TrsFundVanguard = (typeof trsFundsVanguard)[number];
export type TrsFundScott = (typeof trsFundsScott)[number];

export const rothFunds = [
  "VNQ"
]

export type RothFund = (typeof rothFunds)[number];

export type AllFunds = TrsFund | RothFund;
