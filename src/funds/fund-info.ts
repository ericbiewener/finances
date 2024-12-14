import { AllFunds } from "../accounts/funds-by-account";
import { keys } from "../utils/collections/keys";
import { AllocationType } from "./types";

export type FundInfo = {
  name: string;
  notes: string;
  url: string;
  tilt?: {
    cap?: "small" | "mid" | "large";
    style?: "value" | "growth";
    emergingMarkets?: number;
  };
  maturity?: "short" | "intermediate" | "long";
  geo: {
    us: number;
    int: number;
  };
  taxEfficiency: string;
  allocation: {
    stocks: number;
    bonds: number;
  };
  er: number;
  etf: boolean | string;
  etfNotes?: string;
};

type FundsInfo = Record<AllFunds, FundInfo>;

export const fundInfo: FundsInfo = {
  BSV: {
    allocation: { stocks: 0, bonds: 1 },
    maturity: "short",
    name: "Vanguard Short-Term Bond ETF",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "Index fund",
    url: "https://investor.vanguard.com/investment-products/etfs/profile/bsv",
    etf: true,
    er: 0.04 / 100,
  },
  VTIP: {
    allocation: { stocks: 0, bonds: 1 },
    maturity: "short",
    name: "Vanguard Short-Term Inflation-Protected Securities ETF",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "",
    url: "https://investor.vanguard.com/investment-products/etfs/profile/vtip",
    etf: true,
    er: 0.04 / 100,
  },
  DFGFX: {
    allocation: { stocks: 0, bonds: 1 },
    maturity: "short",
    name: "DFA Two-Year Global Fixed-Income I",
    geo: { us: 0.5, int: 0.5 },
    taxEfficiency: "",
    notes:
      "Short-Term Bond. Has international, but no ideal how much. Percentages were made up.",
    url: "https://www.dimensional.com/us-en/funds/dfgfx/two-year-global-fixed-income-portfolio-i",
    etf: false,
    er: 0.17 / 100,
  },
  SWRSX: {
    allocation: { stocks: 0, bonds: 1 },
    maturity: "intermediate",
    name: "Schwab Treasury Inflation Protected Securities Index Fund",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "US Bond Index Fund",
    url: "https://www.schwabassetmanagement.com/products/swrsx",
    etf: false,
    er: 0.05 / 100,
  },
  SWTSX: {
    allocation: { stocks: 1, bonds: 0 },
    name: "Schwab Total Stock Market Index Fund",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "US Stock Index Fund",
    url: "https://www.schwabassetmanagement.com/products/swtsx",
    er: 0.03 / 100,
    etf: false,
    etfNotes:
      "SCHB is kinda the ETF equivalent, but see this post: https://www.reddit.com/r/Schwab/comments/1812g49/comment/kagomp3/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button. Same ER.",
  },
  DFVEX: {
    allocation: { stocks: 1, bonds: 0 },
    tilt: {
      cap: "mid",
      style: "value",
    },
    name: "DFA US Vector Equity Portfolio (I)",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "US Stock Index Fund",
    url: "https://www.dimensional.com/us-en/funds/dfvex/us-vector-equity-portfolio-i",
    er: 0.28 / 100,
    etf: false,
  },
  VGSLX: {
    allocation: { stocks: 1, bonds: 0 },
    name: "Vanguard Real Estate Index Fund Admiral Shares",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "US real estate",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vgslx",
    er: 0.13 / 100,
    etf: "VNQ",
    etfNotes: "Same ER",
  },
  VNQ: {
    allocation: { stocks: 1, bonds: 0 },
    name: "Vanguard Real Estate ETF",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "US Real Estate - ETF version of VGSLX",
    url: "https://investor.vanguard.com/investment-products/etfs/profile/vnq",
    etf: true,
    er: 0.13 / 100,
  },
  VSIAX: {
    allocation: { stocks: 1, bonds: 0 },
    tilt: {
      cap: "small",
      style: "value",
    },
    name: "Vanguard Small-Cap Value Index Fund Admiral Shares",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vsiax",
    er: 0.07 / 100,
    etf: "VBR",
    etfNotes: "Same ER",
  },
  DFAE: {
    allocation: { stocks: 1, bonds: 0 },
    tilt: {
      emergingMarkets: 1,
    },
    name: "DFA Emerging Core Equity Market ETF",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes: "",
    url: "https://www.dimensional.com/us-en/funds/dfae/emerging-core-equity-market-etf",
    er: 0.35 / 100,
    etf: true,
  },
  DFAX: {
    allocation: { stocks: 1, bonds: 0 },
    name: "DFA World ex US Core Equity 2 ETF",
    tilt: { emergingMarkets: 32 },
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes:
      "Index fund, but actively managed with tilt to beat market: https://www.reddit.com/r/Bogleheads/comments/105qadt/dfacdfax_as_an_alternative_to_vtivxus/",
    url: "https://www.dimensional.com/us-en/funds/dfax/world-ex-us-core-equity-2-etf",
    er: 0.28 / 100,
    etf: true,
  },
  VNQI: {
    allocation: { stocks: 1, bonds: 0 },
    name: "Vanguard Global ex-U.S. Real Estate ETF",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes: "International Real estate",
    url: "https://investor.vanguard.com/investment-products/etfs/profile/vnqi",
    etf: true,
    er: 0.12 / 100,
  },
  DFCEX: {
    allocation: { stocks: 1, bonds: 0 },
    name: "DFA Emerging Markets Core Equity Portfolio I",
    tilt: { emergingMarkets: 1 },
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes:
      "International emerging markets -- essentially same as DFAE on 10-year changes: https://portfolioslab.com/tools/stock-comparison/DFAE/DFEMX",
    url: "https://www.dimensional.com/us-en/funds/dfcex/emerging-markets-core-equity-portfolio-i",
    er: 0.39 / 100,
    etf: false,
  },
  DFVQX: {
    allocation: { stocks: 1, bonds: 0 },
    name: "DFA International Vector Equity Portfolio I",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    url: "https://www.dimensional.com/us-en/funds/dfvqx/international-vector-equity-portfolio",
    notes: "",
    er: 0.34 / 100,
    etf: false,
  },
  VEMAX: {
    allocation: { stocks: 1, bonds: 0 },
    tilt: { emergingMarkets: 1 },
    name: "Vanguard Emerging Markets Stock Index Fund Admiral Shares",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes: "",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vemax",
    etf: "VWO",
    er: 0.14 / 100,
  },
  VTWAX: {
    allocation: { stocks: 1, bonds: 0 },
    name: "Vanguard Total World Stock Index Fund Admiral Shares",
    geo: { us: 0.676, int: 1 - 0.676 },
    taxEfficiency: "",
    notes:
      "US & International Index fund - can split to get foreign tax savings",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vtwax",
    er: 0.1 / 100,
    etf: "VT",
  },
  VTEB: {
    allocation: { stocks: 0, bonds: 1 },
    maturity: "intermediate",
    name: "Vanguard Tax-Exempt Bond ETF",
    geo: { us: 1, int: 0 },
    taxEfficiency: "Some tax-exemption",
    notes:
      "VTEB tracks a market-weighted index of investment-grade debt issued by state and local governments and agencies. Interest is exempt from US income tax and from AMT. VTEB brings the Vanguard brand to the US muni bond space. The fund competes directly with its rival, MUB from iShares, which tracks the same S&P index. Its underlying index primarily includes municipal bonds issued by state or local governments or agencies whose interest is federal tax-exempt and AMT-free. Securities that have a rating of at least investment grade as determined by an NRSRO, denominated in USD and meeting minimum maturity and size requirement are eligible for index inclusion. As with all Vanguard ETFs, VTEB only discloses its holdings monthly.",
    url: "https://investor.vanguard.com/investment-products/etfs/profile/vteb",
    er: 0.05 / 100,
    etf: true,
  },
  ORTYX: {
    allocation: { stocks: 0, bonds: 1 },
    maturity: "intermediate",
    name: "NYLI MacKay Oregon Muni Fund",
    geo: { us: 1, int: 0 },
    taxEfficiency: "80% of holdings are Fed & State exempt",
    notes: "80% of holdings are Fed & State exempt",
    url: "https://www.newyorklifeinvestments.com/mutual-funds/nyli-mackay-oregon-muni-fund?ticker=ORTBX",
    etf: false,
    er: 0.55 / 100,
  },
  VBTLX: {
    allocation: { stocks: 0, bonds: 1 },
    maturity: "intermediate",
    name: "Vanguard Total Bond Market Index Fund Admiral Shares",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vbtlx",
    er: 0.05 / 100,
    etf: "BND",
  },
  VWITX: {
    allocation: { stocks: 0, bonds: 1 },
    maturity: "intermediate",
    name: "Vanguard Intermediate-Term Tax-Exempt Fund Investor Shares",
    geo: { us: 1, int: 0 },
    taxEfficiency: "Bonds, federal tax-exempt",
    notes: "Bonds, federal tax-exempt",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vwitx",
    er: 0.17 / 100,
    etf: true,
  },
  VWIUX: {
    allocation: { stocks: 0, bonds: 1 },
    maturity: "intermediate",
    name: "Vanguard Intermediate-Term Tax-Exempt Fund Admiral Shares",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "Bonds, federal tax-exempt - same as VWITX, but admiral",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vwiux",
    etf: "VWITX",
    etfNotes: "Higher ER: 0.17%",
    er: 0.09 / 100,
  },
  BND: {
    allocation: { stocks: 0, bonds: 1 },
    name: "Vanguard Total Bond Market ETF",
    maturity: "intermediate",
    geo: { us: 1, int: 0 },
    taxEfficiency: "",
    notes: "EFT of VBTLX",
    url: "https://investor.vanguard.com/investment-products/etfs/profile/bnd",
    er: 0.03 / 100,
    etf: true,
  },
  DFIC: {
    allocation: { stocks: 1, bonds: 0 },
    name: "DFA International Core Equity 2 ETF",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes: "",
    url: "https://www.dimensional.com/us-en/funds/dfic/international-core-equity-2-etf",
    er: 0.23 / 100,
    etf: true,
  },
  VASIX: {
    allocation: { stocks: 0.195, bonds: 0.805 },
    name: "Vanguard LifeStrategy Income Fund",
    geo: { us: 0.676, int: 0.324 },
    taxEfficiency: "",
    notes: "Mix of bond & stock indeces, US and International",
    url: "https://investor.vanguard.com/investment-products/mutual-funds/profile/vasix",
    etf: false,
    er: 0.11 / 100,
  },
  // Fidelity 401k
  FSPSX: {
    allocation: { stocks: 1, bonds: 0 },
    tilt: {
      cap: "large",
    },
    name: "Fidelity International Index Fund",
    geo: { us: 0, int: 1 },
    taxEfficiency: "",
    notes: "Morningstar Category: Foreign Large Blend",
    url: "https://fundresearch.fidelity.com/mutual-funds/summary/315911727",
    er: 0.035 / 100,
    etf: false,
    etfNotes: "Irrelevant. 401k offering restricted.",
  },
  HASGX: {
    allocation: { stocks: 1 - 0.0354, bonds: 0.0354 },
    tilt: {
      cap: "small",
      style: "growth",
    },
    name: "Harbor Small Cap Growth Fund Institutional Class",
    geo: { us: 1 - 0.1062, int: 0.1062 },
    taxEfficiency: "",
    notes: "Morningstar Category: Small Growth",
    url: "https://fundresearch.fidelity.com/mutual-funds/summary/411511868",
    er: 0.88 / 100,
    etf: false,
    etfNotes: "Irrelevant. 401k offering restricted.",
  },
  O8GB: {
    allocation: { stocks: 1, bonds: 0 },
    tilt: {
      cap: "large",
    },
    name: "State Street S&P 500 Index Securities Lending Series Fund Class II",
    geo: { us: 0.995, int: 0.005 },
    taxEfficiency: "",
    notes: "Large Blend",
    url: "https://workplaceservices.fidelity.com/mybenefits/workplacefunds/summary/O8GB?suppressFundFactSheet=true",
    er: 0.01 / 100,
    etf: false,
    etfNotes: "Irrelevant. 401k offering restricted.",
  },
  O8GA: {
    allocation: { stocks: 1, bonds: 0 },
    tilt: {
      cap: "mid",
    },
    name: "State Street Russell Small/Mid Cap Index Securities Lending Series Fund Class II",
    geo: { us: 0.98, int: 0.02 },
    taxEfficiency: "",
    notes: "Mid-Cap Blend",
    url: "https://workplaceservices.fidelity.com/mybenefits/workplacefunds/composition/O8GA?suppressFundFactSheet=true",
    er: 0.02 / 100,
    etf: false,
    etfNotes: "Irrelevant. 401k offering restricted.",
  },
  O8GC: {
    allocation: { stocks: 0, bonds: 1 },
    maturity: "intermediate",
    name: "State Street U.S. Bond Index Securities Lending Series Fund Class XIV",
    geo: { us: 0.93, int: 0.07 },
    taxEfficiency: "",
    notes: "Intermediate Core Bond",
    url: "https://workplaceservices.fidelity.com/mybenefits/workplacefunds/summary/O8GC?suppressFundFactSheet=true",
    er: 0.02 / 100,
    etf: false,
    etfNotes: "Irrelevant. 401k offering restricted.",
  },
};

const validateFundInfo = () => {
  for (const [k, v] of Object.entries(fundInfo)) {
    const { allocation, geo } = v;
    const allocTotal = allocation.stocks + allocation.bonds;
    if (allocTotal !== 1) {
      throw new Error(`Fund ${k} allocation does not sum to 1: ${allocTotal}`);
    }
    const geoTotal = geo.us + geo.int;
    if (geoTotal !== 1) {
      throw new Error(`Fund ${k} geo does not sum to 1: ${geoTotal}`);
    }
  }
};

validateFundInfo();

export type FundsByAllocation = Record<AllocationType, string[]>;

export const fundsByAllocation = Object.entries(
  fundInfo,
).reduce<FundsByAllocation>(
  (acc, [k, { allocation }]) => {
    const { stocks, bonds } = allocation;
    if (stocks) {
      console.info(`:: bonds`, bonds);
      const a = bonds ? acc.mixed : acc.stocks;
      a.push(k);
    } else {
      acc.bonds.push(k);
    }
    return acc;
  },
  { stocks: [], bonds: [], mixed: [] },
);

export const allocationTypes: AllocationType[] = keys(fundsByAllocation);
