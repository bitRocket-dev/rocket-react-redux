/** @format */

import { Store } from "redux";
import { useContext } from "react";
import { StoreContext } from "../Provider";

interface Params {
  type: string;
  payload?: any;
}

export const useDispatch = (): (({ type, payload }: Params) => void) => {
  const store: Store = useContext(StoreContext);
  return store.dispatch;
};
