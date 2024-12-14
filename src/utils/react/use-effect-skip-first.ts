import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export const useEffectSkipFirst = (
  effect: EffectCallback,
  deps: DependencyList,
) => {
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
