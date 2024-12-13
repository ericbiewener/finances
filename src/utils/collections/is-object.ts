import { Obj } from "../../../types/basic";

export const isObjectOrArray = (value: unknown): value is Obj | unknown[] =>
  typeof value === "object" && value !== null;

export const isObject = (value: unknown): value is Obj =>
  isObjectOrArray(value) && !Array.isArray(value);
