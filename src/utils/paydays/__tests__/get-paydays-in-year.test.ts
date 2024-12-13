import { formatDate } from "../../dates/format-date";
import { getPaydaysInYear } from "../get-paydays-in-year";

it("expect", () => {
  expect(getPaydaysInYear(2025).map(formatDate["1/1/2025"])).toEqual([
    "1/10/2025",
    "1/24/2025",
    "2/7/2025",
    "2/21/2025",
    "3/7/2025",
    "3/21/2025",
    "4/4/2025",
    "4/18/2025",
    "5/2/2025",
    "5/16/2025",
    "5/30/2025",
    "6/13/2025",
    "6/27/2025",
    "7/11/2025",
    "7/25/2025",
    "8/8/2025",
    "8/22/2025",
    "9/5/2025",
    "9/19/2025",
    "10/3/2025",
    "10/17/2025",
    "10/31/2025",
    "11/14/2025",
    "11/28/2025",
    "12/12/2025",
    "12/26/2025",
  ]);
});
