import { AllFunds } from "../accounts/funds-by-account";
import { AllocationType } from "./types";
import { keys } from "../utils/collections/keys";

export type FundInfo = {
  name: string;
  summary: string;
  notes: string;
  url: string;
  tilt: string;
  geo: {
    us: number;
    int: number;
  };
  taxEfficiency: string;
  allocation: {
    stocks: number;
    bonds: number;
  };
};

type FundsInfo = Record<AllFunds, FundInfo>;

export const fundInfo: FundsInfo = {
  DFVEX: {
    allocation: { stocks: 1, bonds: 0 },
    summary: "US Stock Index Fund",
    tilt: "",
    name: "DFA US VECTOR EQUITY I",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes:
      "chatgpt says tilt towards value/small cap, but looking at the holdings it is pretty big companies. so this likely contributes a tilt, but a minor one",
    url: "https://www.dimensional.com/us-en/funds/dfvex/us-vector-equity-portfolio-i",
  },
  VGSLX: {
    allocation: { stocks: 1, bonds: 0 },
    summary: "US real estate",
    tilt: "",
    name: "VANGUARD REAL ESTATE INDEX ADMIRAL",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "",
    url: "",
  },
  VSIAX: {
    allocation: { stocks: 1, bonds: 0 },
    summary: "Small cap / value index fund",
    tilt: "",
    name: "VANGUARD SMALL CAP VALUE INDEX ADMIRAL",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "",
    url: "",
  },
  VNQ: {
    allocation: { stocks: 1, bonds: 0 },
    summary: "Domestic Real Estate - ETF version of VGSLX",
    tilt: "",
    name: "VANGUARD REAL ESTATE ETF",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "",
    url: "",
  },
  DFAE: {
    allocation: { stocks: 1, bonds: 0 },
    summary: "Emerging Markets",
    tilt: "",
    name: "DIMENSIONAL EMERG CORE EQY MRKT ETF",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes: "",
    url: "https://www.dimensional.com/us-en/funds/dfae/emerging-core-equity-market-etf",
  },
  DFAX: {
    allocation: { stocks: 1, bonds: 0 },
    summary:
      "Index fund, but actively managed with tilt to beat market (forum)",
    name: "DIMENSIONAL WLD EX US CREQ 2 ETF",
    tilt: "",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes:
      "DFAX actively invests in non-US companies around the globe, with a focus on small- cap stocks. The fund's objective is long-term capital appreciation with consideration for tax implications of investment decisions. DFAX, previously a mutual fund, was converted into an actively managed ETF with the aim of delivering long-term capital appreciation and maximizing after tax value of a shareholders investment. The fund invests in a diverse group of non-US equities anywhere in the world, even in some frontier markets, with a focus on those companies with smaller capitalizations, lower relative price, and potentially higher profitability. Factors such as price to cash flow or price to earnings ratios are considered in assessing the relative price, while earnings or profits from operations relative to book value or assets are analyzed for profitability measures. Also, ratios such as recent changes in assets divided by total assets are used to review a firms investment characteristics. Holdings are typically market-cap weighted but may be adjusted at the managers discretion after considering other factors. At the time of conversion, the ETF started with roughly $4.6 billion USD in assets.",
    url: "https://www.dimensional.com/us-en/funds/dfax/world-ex-us-core-equity-2-etf",
  },
  VNQI: {
    allocation: { stocks: 1, bonds: 0 },
    summary: "Real estate",
    tilt: "",
    name: "VANGUARD GLBAL EX US REAL ESTATE ETF",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes:
      "VNQI tracks a market-cap-weighted index of non-US real estate investment trusts. VNQI tracks a float-adjusted, market-cap-weighted index that contains property companies from both developed and emerging countries, excluding the United States. Stock components are drawn from the S&P Global Broad Market Index, a rules-based index that measures global stock market performance. From the initial universe, stocks are narrowed down to REITs and real estate management and development companies (REMDs) that fall under the Real Estate sector, as defined by GICS. Stocks are reconstituted every September using data at the end of July.",
    url: "https://investor.vanguard.com/investment-products/etfs/profile/vnqi",
  },
  DFCEX: {
    allocation: { stocks: 1, bonds: 0 },
    summary:
      "International emerging markets -- essentially same as DFAE on 10-year changes",
    name: "DFA EMERGING MARKETS CORE EQUITY I",
    tilt: "",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes: "",
    url: "https://www.dimensional.com/us-en/funds/dfcex/emerging-markets-core-equity-portfolio-i",
  },
  DFVQX: {
    allocation: { stocks: 1, bonds: 0 },
    summary: "Probably the same as DFAX?",
    tilt: "",
    name: "DFA INTERNATIONAL VECTOR EQUITY I",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes:
      "chatgpt says tilt towards value/small cap, but looking at the holdings it is pretty big companies. so this likely contributes a tilt, but a minor one",
    url: "https://www.dimensional.com/us-en/funds/dfvqx/international-vector-equity-portfolio",
  },
  VEMAX: {
    allocation: { stocks: 1, bonds: 0 },
    summary: "International emerging markets",
    tilt: "",
    name: "VANGUARD EMERGING MKTS STOCK IDX ADM",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes: "",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vemax",
  },

  VTWAX: {
    allocation: { stocks: 1, bonds: 0 },
    summary:
      "US & International Index fund - can split to get foreign tax savings",
    tilt: "",
    name: "VANGUARD TOTAL WORLD STOCK INDEX ADMIRAL",
    geo: { us: 0.634, int: 0.366 },
    taxEfficiency: "",
    notes: "",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vtwax",
  },

  VTEB: {
    allocation: { stocks: 0, bonds: 1 },
    summary: "",
    tilt: "",
    name: "VANGUARD MUNI BND TAX EXEMPT ETF",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes:
      "VTEB tracks a market-weighted index of investment-grade debt issued by state and local governments and agencies. Interest is exempt from US income tax and from AMT. VTEB brings the Vanguard brand to the US muni bond space. The fund competes directly with its rival, MUB from iShares, which tracks the same S&P index. Its underlying index primarily includes municipal bonds issued by state or local governments or agencies whose interest is federal tax-exempt and AMT-free. Securities that have a rating of at least investment grade as determined by an NRSRO, denominated in USD and meeting minimum maturity and size requirement are eligible for index inclusion. As with all Vanguard ETFs, VTEB only discloses its holdings monthly.",
    url: "https://investor.vanguard.com/investment-products/etfs/profile/vteb#performance-fees",
  },
  ORTYX: {
    allocation: { stocks: 0, bonds: 1 },
    summary: "Oregon bonds",
    tilt: "",
    name: "NYLI MACKAY OREGON MUNI CLASS I",
    geo: { us: 1, int: 0 },
    taxEfficiency: "80% of holdings are Fed & State exempt",
    notes: "",
    url: "https://www.newyorklifeinvestments.com/mutual-funds/nyli-mackay-oregon-muni-fund?ticker=ORTBX",
  },
  VBTLX: {
    allocation: { stocks: 0, bonds: 1 },
    summary: "Index fund",
    tilt: "",
    name: "VANGUARD TOTAL BOND MARKET INDEX ADM",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vbtlx",
  },
  VWITX: {
    allocation: { stocks: 0, bonds: 1 },
    summary: "Bonds, federal tax-exempt",
    tilt: "",
    name: "VANGUARD INTERM-TERM TX-EX INV",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vwitx",
  },
  VWIUX: {
    allocation: { stocks: 0, bonds: 1 },
    summary: "Bonds, federal tax-exempt - same as above, but admiral",
    tilt: "",
    name: "VANGUARD INTERM-TERM TX-EX ADM",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vwiux",
  },
  BND: {
    allocation: { stocks: 0, bonds: 1 },
    summary: "EFT of VBTLX",
    tilt: "",
    name: "Vanguard Total Bond Market ETF",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "",
    url: "https://investor.vanguard.com/investment-products/etfs/profile/bnd",
  },
  DFIC: {
    allocation: { stocks: 1, bonds: 0 },
    summary: "",
    tilt: "",
    name: "International Core Equity 2 ETF",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes: "",
    url: "https://www.dimensional.com/us-en/funds/dfic/international-core-equity-2-etf",
  },
  VASIX: {
    allocation: { stocks: .195, bonds: .805 },
    summary: "Mix of bond & stock indeces, US and International",
    tilt: "",
    name: "Vanguard LifeStrategy Income Fund",
    geo: { us: .676, int: .324 },
    taxEfficiency: "",
    notes: "",
    url: "https://www.dimensional.com/us-en/funds/dfic/international-core-equity-2-etf",
  }
};

export type FundsByAllocation = Record<AllocationType, string[]>;

export const fundsByAllocation = Object.entries(
  fundInfo,
).reduce<FundsByAllocation>(
  (acc, [k, { allocation }]) => {
    const { stocks, bonds } = allocation;
    if (stocks) {
      console.info(`:: bonds`, bonds)
      const a = bonds ? acc.mixed : acc.stocks;
      a.push(k);
    } else {
      acc.bonds.push(k);
    }
    return acc;
  },
  { stocks: [], bonds: [], mixed: [] },
);

export const allocationTypes: AllocationType[] = keys(fundsByAllocation)
