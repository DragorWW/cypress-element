import { componentSymbol, parentSymbol, rootSymbol } from "./constants";

type LogType = "method" | "cy";
type SelectorType = string | String;
type ElementType = Record<string | symbol, any>; // FIXME: describe type for Proxy of element

export const isEl = (target: ElementType): boolean =>
  target[componentSymbol] || false;

export const isSelector = (selector: any): boolean => {
  return typeof selector === "string" || isRootSelector(selector);
};

export const isRootSelector = (selector: SelectorType): boolean => {
  return selector instanceof String && selector[rootSymbol];
};

export const getElType = (target: ElementType): string | undefined => {
  if (!target.name) {
    return undefined;
  }

  return Cypress._.camelCase(target.name)
    .split("")
    .map((val, key) => (key == 0 ? val.toUpperCase() : val))
    .join("");
};

export const getElPath = (target: ElementType, name?): string => {
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

export const getLogPostfix = (type: LogType): string => {
  return {
    method: "()",
    cy: " ⤵️",
  }[type];
};

type LogParams = {
  type: LogType;
  target: ElementType;
  name?: keyof ElementType;
  $el?: JQuery;
};
export const log = ({ type, target, name, $el }: LogParams): void => {
  const path = `🎁${getElPath(target, name)}${getLogPostfix(type)}`;

  // need call cy then for display log correctly
  // - in cypress call stack
  // - not before cypress call stack
  cy.wrap({}, { log: false }).then(() => {
    let el: HTMLElement | HTMLElement[] = $el?.get() || [];
    if (el.length === 1) {
      el = el[0];
    } else if (el.length === 0) {
      el = undefined;
    }

    Cypress.log({
      name: "cypress-element",
      type: "parent",
      displayName: path,
      $el,
      message: "", // prevent display right side in cypress runner
      consoleProps() {
        return {
          path,
          element: target,
          yielded: el,
        };
      },
    });
  });
};
