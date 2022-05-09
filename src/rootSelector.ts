import { rootSymbol } from "./constants";

export const rootSelector = (strings, ...keys): string => {
  const str = new String(strings.raw[0]);
  str[rootSymbol] = true;
  return str as string;
};
