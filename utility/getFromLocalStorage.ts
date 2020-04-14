/** @format */

export const utilityGetFromLocalStorage = (ref: string): any => {
  if (!ref) return {};

  const storage: any = localStorage.getItem(ref);
  return storage ? JSON.parse(storage) : {};
};
