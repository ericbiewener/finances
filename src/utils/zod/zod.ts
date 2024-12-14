import { z as zz } from "zod";

const string = zz.string();
const number = zz.number();
const nullSchema = zz.null();
const stringOrNull = zz.union([string, nullSchema]);
const numberOrNull = zz.union([number, nullSchema]);

export const z = {
  ...zz,
  string,
  number,
  null: nullSchema,
  stringOrNull,
  numberOrNull,
};
