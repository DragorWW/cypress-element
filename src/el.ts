import { COMPONENT_SYMBOL, CONFIG_SYMBOL, PARENT_SYMBOL } from "./constants";
import {
  ElementProps,
  ElementPropsContext,
  ElementType,
  ElementTypeLocal,
} from "./type";

import { isEl, isMethod, isSelector } from "./helpers";
import { getCypressMethod, log } from "./utils";

import { rootSelector } from "./rootSelector";

el.r = rootSelector;

export function el<T extends keyof HTMLElementTagNameMap>(
  tag: T
): ElementType<{}, JQuery<HTMLElementTagNameMap[T]>>;
export function el<T extends Node = HTMLElement>(
  selector: string
): ElementType<{}, JQuery<T>>;
export function el<T extends string>(selector: T): ElementType<{}, JQuery<T>>;
export function el<T extends ElementProps | {}>(
  props: ElementPropsContext<T, keyof T>
): ElementType<T, JQuery>;
export function el(props) {
  const component: any = {
    ...(isSelector(props) ? { el: props } : props),
    [COMPONENT_SYMBOL]: true,
  };

  component[CONFIG_SYMBOL] = { ...component };

  const proxy = new Proxy(component, {
    set: function (oTarget, sKey, vValue) {
      if (sKey !== PARENT_SYMBOL) {
        return false;
      }
      return (oTarget[PARENT_SYMBOL] = vValue);
    },
    get: function (target: ElementTypeLocal, name) {
      if (name in target) {
        if (isMethod(target, name)) {
          // TODO: add group of method call
          log({ type: "method", target, name });
        }
        return target[name];
      }

      if (name in cy) {
        return getCypressMethod(target, name);
      }

      return undefined;
    },
  }) as any;

  for (let [name, element] of Object.entries(component)) {
    if (isEl(element)) {
      component[name] = el(element[CONFIG_SYMBOL]);
      component[name][PARENT_SYMBOL] = {
        parent: proxy,
        name,
      };
    }
  }

  return proxy;
}
