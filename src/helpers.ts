import { COMPONENT_SYMBOL, PARENT_SYMBOL, ROOT_SYMBOL } from "./constants";
import { ElementType, ElementTypeLocal, LogType, SelectorType } from "./type";

export const isEl = (target: unknown): target is ElementTypeLocal => {
  if (typeof target === "object") {
    return !!target[COMPONENT_SYMBOL];
  }
  return false;
};

export const isSelector = (selector: any): boolean =>
  typeof selector === "string" || isRootSelector(selector);

export const isRootSelector = (selector: SelectorType): boolean =>
  !!(selector instanceof String && selector[ROOT_SYMBOL]);

export const getElType = (
  target: ElementTypeLocal | ElementType<any>
): string | undefined => {
  if (!target.name) {
    return undefined;
  }

  return Cypress._.camelCase(target.name)
    .split("")
    .map((val, key) => (key == 0 ? val.toUpperCase() : val))
    .join("");
};

export const getElPath = (
  target: ElementTypeLocal | ElementType<any>,
  name?
): string => {
  const elType = getElType(target);

  if (!(PARENT_SYMBOL in target)) {
    if (!name && elType) {
      return `<${elType}>`;
    }
    if (!name) {
      return "";
    }
    return elType ? `<${elType}>.${name}` : `.${name}`;
  }

  const { parent, name: nameInParent } = target[PARENT_SYMBOL];

  const path = getElPath(parent, nameInParent);

  return [elType ? `${path}<${elType}>` : path, name].filter(Boolean).join(".");
};

export const getLogPostfix = (type: LogType): string => {
  return {
    method: "()",
    cy: " ⤵️",
  }[type];
};

export const getSelectorByElement = (
  target: ElementTypeLocal | ElementType<any>
): string | undefined => {
  let selectorsList: SelectorType[] = [target.el];

  if (PARENT_SYMBOL in target) {
    let parent = target[PARENT_SYMBOL].parent;
    while (parent) {
      selectorsList.push(parent.el);
      parent = parent[PARENT_SYMBOL];
    }
  }

  selectorsList = selectorsList
    .filter(Boolean)
    .reduce<(string | String)[]>((acc, current: string | String) => {
      if (!acc.find(isRootSelector)) {
        acc.push(current);
      }
      return acc;
    }, [])
    .reverse();

  if (selectorsList.length === 0) {
    return;
  }

  return selectorsList.join(" ");
};
