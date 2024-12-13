import { addWeeks } from "date-fns";

const KNOWN_PAY_DATE = new Date("12/13/2024");

export const getPaydaysInYear = (year: number) => {
  const firstDayOfYear = new Date(`1/1/${year}`);
  const lastDayOfYear = new Date(`12/31/${year}`);

  let payDate = KNOWN_PAY_DATE;
  const payDates: Date[] = [];

  while (payDate <= lastDayOfYear) {
    if (payDate >= firstDayOfYear) {
      payDates.push(payDate);
    }
    payDate = addWeeks(payDate, 2);
  }
  return payDates;
};

export const getRemainingPaydays = (year: number) => {
  const today = new Date();
  const paydates = getPaydaysInYear(year);
  return paydates.filter((d) => d >= today);
};
