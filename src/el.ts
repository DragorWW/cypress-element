import { componentSymbol, parentSymbol } from "./constants";
import { isEl, isRootSelector, isSelector, log } from "./helpers";
import { rootSelector } from "./rootSelector";

type SelectorType = string | String;

type a = Record<string, () => {}>;

// TODO add Record<string, ElementType<any> | ((...args: any[]) => void)>
type ElementProps = {
  el?: SelectorType;
  name?: string;
};

type ElementType<T extends ElementProps, C = any> = Omit<T, "el" | "name"> &
  Omit<Cypress.Chainable<C>, keyof T>;

const getEl = (target, method) => {
  let selectorsList = [target.el];

  if (parentSymbol in target) {
    let parent = target[parentSymbol].parent;
    while (parent) {
      selectorsList.push(parent.el);
      parent = parent[parentSymbol];
    }
  }

  selectorsList = selectorsList
    .filter(Boolean)
    .map((i) => {
      if (typeof i === "function") return i();
      return i;
    })
    .reduce<(string | String)[]>((acc, current: string | String) => {
      if (!acc.find(isRootSelector)) {
        acc.push(current);
      }
      return acc;
    }, [])
    .reverse();

  if (selectorsList.length === 0) {
    return cy[method];
  }

  const selector = selectorsList.join(" ");

  log({ type: "cy", target, $el: Cypress.$(selector) });

  const el = cy.get(selectorsList.join(" "));

  return el[method].bind(el);
};

el.r = rootSelector;

export function el<T extends keyof HTMLElementTagNameMap>(
  tag: T
): ElementType<{}, JQuery<HTMLElementTagNameMap[T]>>;
export function el<T extends Node = HTMLElement>(
  selector: string
): ElementType<{}, JQuery<T>>;
export function el<T extends string>(selector1: T): ElementType<{}, JQuery<T>>;
export function el<T extends ElementProps>(props1: T): ElementType<T, JQuery>;
export function el(props) {
  const component: any = {
    ...(isSelector(props)
      ? {
          el: props,
        }
      : props),
  };

  const proxy = new Proxy(component, {
    set: function (oTarget, sKey, vValue) {
      if (sKey !== parentSymbol) {
        return false;
      }
      return (oTarget[parentSymbol] = vValue);
    },
    get: function (target, name) {
      if (name === "el") {
        return target.el;
      }
      if (name === "name") {
        return target.name;
      }
      if (name === componentSymbol) {
        return true;
      }
      if (name === parentSymbol) {
        return target[parentSymbol];
      }

      if (name in target) {
        if (!isEl(target[name])) {
          log({ type: "method", target, name });
        }

        return target[name];
      }

      if (name in cy) {
        return getEl(target, name);
      }

      return undefined;
    },
  }) as any;

  if (typeof props === "object") {
    for (let [name, element] of Object.entries(props)) {
      if (typeof element === "object" && element[componentSymbol]) {
        element[parentSymbol] = {
          parent: proxy,
          name,
        };
      }
    }
  }

  return proxy;
}
