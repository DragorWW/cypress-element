import { componentSymbol, parentSymbol } from "./constants";
import { isEl, isRootSelector, isSelector, log } from "./helpers";
import { rootSelector } from "./rootSelector";

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

  const el = cy.get(selectorsList.join(" "));

  return el[method].bind(el);
};

el.r = rootSelector;

export function el<T extends keyof HTMLElementTagNameMap>(
  tag: T
): Cypress.Chainable<JQuery<HTMLElementTagNameMap[T]>>;
export function el<T extends Node = HTMLElement>(
  selector: string
): Cypress.Chainable<JQuery<T>>;
export function el<T extends string>(
  selector1: T
): Cypress.Chainable<JQuery<T>>;
export function el<T extends {}>(props: T): T & Cypress.Chainable;
export function el<T>(props: T): T & Cypress.Chainable {
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
          log("method", target, name);
        }

        return target[name];
      }

      if (name in cy) {
        log("cy", target);

        return getEl(target, name);
      }

      console.log(" - unknown on target", target, name);

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
