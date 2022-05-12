import { getElPath, getLogPostfix, getSelectorByElement } from "./helpers";
import { ElementTypeLocal, LogType } from "./type";

type LogParams = {
  type: LogType;
  target: ElementTypeLocal;
  name?: string | Symbol;
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
      name: "🎁 cypress-element",
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

export const getCyBySelector = ({ target, method, selector }) => {
  log({ type: "cy", target, $el: Cypress.$(selector) });
  const el = cy.get(selector);

  return el[method].bind(el);
};

export const getCypressMethod = (target, method) => {
  const selector = getSelectorByElement(target);

  if (!selector) {
    return cy[method];
  }

  return getCyBySelector({ target, method, selector });
};
