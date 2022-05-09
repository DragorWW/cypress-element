import { componentSymbol, parentSymbol, rootSymbol } from "./constants";

export const isEl = (target): boolean => target[componentSymbol] || false;

export const isSelector = (selector: any): boolean => {
  return typeof selector === "string" || isRootSelector(selector);
};

export const isRootSelector = (selector: string | String): boolean => {
  return selector instanceof String && selector[rootSymbol];
};

export const getElType = (target) => {
  if (!target.name) {
    return undefined;
  }

  return Cypress._.camelCase(target.name)
    .split("")
    .map((val, key) => (key == 0 ? val.toUpperCase() : val))
    .join("");
};

export const getElPath = (target, name?): string => {
  const elType = getElType(target);

  if (!(parentSymbol in target)) {
    if (!name) {
      return "";
    }
    return elType ? `<${elType}>.${name}` : `.${name}`;
  }

  const { parent, name: nameInParent } = target[parentSymbol];

  const path = getElPath(parent, nameInParent);

  return [elType ? `${path}<${elType}>` : path, name].filter(Boolean).join(".");
};

export const getLogPostfix = (type: "method" | "cy") => {
  return {
    method: "()",
    cy: " ⤵️",
  }[type];
};

export const log = (type: "method" | "cy", target, name?) => {
  cy.element(() => {
    Cypress.log({
      name: `🎁${getElPath(target, name)}${getLogPostfix(type)}`,
      message: "",
    });
  });
};
