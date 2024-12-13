// Wrapper for Object.keys that provides correct types
export const keys = <T extends Record<string, any>>(o: T) =>
  Object.keys(o) as Extract<(keyof T)[][number], string>[];
