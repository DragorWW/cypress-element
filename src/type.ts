import { COMPONENT_SYMBOL, CONFIG_SYMBOL, PARENT_SYMBOL } from "./constants";

export type LogType = "method" | "cy";
export type SelectorType = string | String;

export type ElementProps = {
  el?: SelectorType;
  name?: string;
};

type PropContext<Context, Args extends any[], Return> = (
  this: Context & Omit<Cypress.Chainable<JQuery>, keyof Context>,
  ...args: Args
) => Return;

export type ElementPropsContext<T, K extends keyof T> = {
  [Key in K]: T[Key] extends (...args: infer B) => infer C
    ? PropContext<T, B, C>
    : T[Key];
};

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
export type ElementType<T extends ElementProps, C = any> = Omit<T, "name"> &
  Omit<Cypress.Chainable<C>, keyof T>;
