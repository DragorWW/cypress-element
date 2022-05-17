import { COMPONENT_SYMBOL, PARENT_SYMBOL, ROOT_SYMBOL } from "./constants";
import { ElementType, ElementTypeLocal, LogType, SelectorType } from "./type";

export const isEl = (target: unknown): target is ElementTypeLocal => {
  if (typeof target === "object") {
    return !!target[COMPONENT_SYMBOL];
  }
  return false;
};

export const isMethod = (
  target: ElementTypeLocal | ElementType<any>,
  method: string | symbol
): boolean => {
  if (method === "el") {
    return false;
  }

  if (typeof target[method] === "function") {
    return true;
  }
  return false;
};

export const isSelector = (selector: any): boolean =>
  typeof selector === "string" ||
  isRootSelector(selector) ||
  typeof selector === "function";

export const isRootSelector = (selector: SelectorType): boolean =>
  !!(selector instanceof String && selector[ROOT_SYMBOL]);

export const getParent = (
  target?: ElementTypeLocal | ElementType<any>
): ElementTypeLocal | undefined => {
  return target[PARENT_SYMBOL]?.parent;
};

export const hasParent = (
  target: ElementTypeLocal | ElementType<any>
): boolean => {
  return PARENT_SYMBOL in target;
};

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
): SelectorType[] => {
  let selectorsList: SelectorType[] = [];

  let element = target;
  while (element) {
    const selector = element.el;
    if (selector) {
      if (isRootSelector(selector)) {
        selectorsList.unshift(selector.toString());
      } else {
        selectorsList.unshift(selector);
      }
    }

    if (isRootSelector(selector)) {
      element = undefined;
    } else {
      element = getParent(element);
    }
  }

  return selectorsList;
};
