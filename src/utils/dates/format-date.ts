import { format } from "date-fns";

export const formatDate = {
  "1/1/2025": (d: Date) => format(d, "M/d/yyyy"),
};
