import { jsonParse } from "../strings/jsonParse";

const IS_BROWSER = typeof window !== "undefined";

export const storageKey = IS_BROWSER
  ? <V = never>(key: string) => {
      const val = localStorage.getItem(key);
      console.info(`:: key, val`, key, val)
      const setter = (value: V) =>
        localStorage.setItem(key, JSON.stringify(value));

      return [val == null ? val : jsonParse<V>(val), setter] as const;
    }
  : (_key: string) => [null, (_value: unknown) => {}] as const;
