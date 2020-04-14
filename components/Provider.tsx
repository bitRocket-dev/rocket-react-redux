/** @format */

import React, { createContext, FC } from "react";
import { Store } from "redux";

export const StoreContext = createContext({});

interface Props {
  store: Store;
  children: JSX.Element | JSX.Element[];
}

export const Provider: FC<Props> = ({
  store,
  children,
}: Props): JSX.Element => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);
