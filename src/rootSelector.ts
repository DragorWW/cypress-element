import { ROOT_SYMBOL } from "./constants";

export const rootSelector = (strings, ...keys): string => {
  const str = new String(String.raw(strings, ...keys));
  str[ROOT_SYMBOL] = true;
  return str as string;
};
