import { ROOT_SYMBOL } from "./constants";

export const rootSelector = (strings, ...keys): string => {
  console.log(strings, keys);
  const str = new String(String.raw(strings, ...keys));
  str[ROOT_SYMBOL] = true;
  return str as string;
};
