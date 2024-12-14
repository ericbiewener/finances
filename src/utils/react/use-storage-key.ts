import { useMemo } from "react";
import { jsonParse } from "../strings/jsonParse";

const IS_BROWSER = typeof window !== "undefined";

export const useStorageKey = IS_BROWSER
  ? <V = never>(key: string) =>
      useMemo(() => {
        const val = localStorage.getItem(key);
        const setter = (value: V) =>
          localStorage.setItem(key, JSON.stringify(value));

        return [val == null ? val : jsonParse<V>(val), setter] as const;
      }, [key])
  : (_key: string) => [null, (_value: unknown) => {}] as const;
