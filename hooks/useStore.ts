/** @format */

import { useContext, useRef, useEffect, useReducer, useMemo } from "react";
import { StoreContext } from "../components/Provider";

const forcedReducer = (state?: any): any => !state;
const useForceUpdate = (): any => useReducer(forcedReducer, false)[1];

export const useStore = (): any => {
  const forceUpdate = useForceUpdate();
  const store: any = useContext(StoreContext);
  const state = useRef(store.getState());
  const used = useRef({});
  const handler = useMemo(
    () => ({
      get: (target: any, name: any): string => {
        // @ts-ignore
        used.current[name] = true;
        return target[name];
      },
    }),
    []
  );
  useEffect(() => {
    const callback = (): void => {
      const nextState = store.getState();
      const changed = Object.keys(used.current).find(
        (key) => state.current[key] !== nextState[key]
      );
      if (changed) {
        state.current = nextState;
        // @ts-ignore
        forceUpdate();
      }
    };
    const unsubscribe = store.subscribe(callback);
    return unsubscribe;
  }, [forceUpdate, store]);
  return new Proxy(state.current, handler);
};
