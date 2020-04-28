/** @format */

import { useStore } from '../useStore';

export function useSelector<T>(selector: (store: any) => T): T {
  const store = useStore();
  return selector(store);
}
