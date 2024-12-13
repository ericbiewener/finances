const getMonthlyReturnRateFromAnnual = (annualRate: number) =>
  Math.pow(1 + annualRate, 1 / 12) - 1;

const annualRates = [0.06, 0.07, 0.08];
const monthlyRates = annualRates.map(getMonthlyReturnRateFromAnnual);

for (const rate of monthlyRates) {
  console.log(rate, 45/rate);
}
