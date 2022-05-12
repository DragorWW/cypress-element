import { COMPONENT_SYMBOL, CONFIG_SYMBOL, PARENT_SYMBOL } from "./constants";

export type LogType = "method" | "cy";
export type SelectorType = string | String;

// TODO add Record<string, ElementType<any> | ((...args: any[]) => void)>
export type ElementProps = {
  el?: SelectorType;
  name?: string;
} & Record<string, any>;

/**
 * Type for closed api of element
 */
export type ElementTypeLocal = {
  el?: SelectorType;
  name?: string;
  [COMPONENT_SYMBOL]: true;
  [CONFIG_SYMBOL]: ElementProps;
  [PARENT_SYMBOL]?: ElementType<any>;
};

/**
 * cypress-element el() Public api
 */
export type ElementType<T extends ElementProps, C = any> = Omit<
  T,
  "el" | "name"
> &
  Omit<Cypress.Chainable<C>, keyof T>;
