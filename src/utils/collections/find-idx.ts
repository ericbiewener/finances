import assert from "assert";

export const findIdx = <T>(arr: T[], predicate: (item: T) => boolean): number => {
  const idx = arr.findIndex(predicate);
  assert(idx !== -1, "Element not found");
  return idx;
}
