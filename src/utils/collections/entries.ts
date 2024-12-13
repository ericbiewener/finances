export const entries = <T extends Record<any, any>>(o: T) =>
  Object.entries(o) as [keyof T, T[keyof T]][];
