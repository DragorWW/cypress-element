import { rootSymbol } from "./constants";

export const rootSelector = (strings, ...keys): string => {
  console.log(strings, keys);
  const str = new String(String.raw(strings, ...keys));
  str[rootSymbol] = true;
  return str as string;
};
