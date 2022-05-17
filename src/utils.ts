import { getElPath, getLogPostfix, getSelectorByElement } from "./helpers";
import { ElementTypeLocal, LogType } from "./type";

type LogParams = {
  type: LogType;
  target: ElementTypeLocal;
  name?: string | Symbol;
  group?: boolean;
};

export const log = ({
  type,
  target,
  name,
  group = false,
}: LogParams): Promise<Cypress.Log> => {
  const path = `🎁${getElPath(target, name)}${getLogPostfix(type)}`;

  return new Promise((resolve, reject) => {
    // need call cy then for display log correctly
    // - in cypress call stack
    // - not before cypress call stack
    cy.wrap({}, { log: false }).then(() => {
      const logObj = Cypress.log({
        name: "🎁 cypress-element",
        type: "parent",
        displayName: path,
        // @ts-ignore
        groupStart: group,
        end: group,
        message: "", // prevent display right side in cypress runner
        consoleProps() {
          return {
            path,
            element: target,
          };
        },
      });
      return resolve(logObj);
    });
  });
};

export const getCypressMethod = (target, method) => {
  const selectors = getSelectorByElement(target);
  let chainable: Cypress.Chainable, logObj: Cypress.Log;

  log({ type: "cy", target, group: selectors.length !== 0 }).then((i) => {
    logObj = i;
  });

  if (selectors.length === 0) {
    return cy[method];
  }

  selectors.forEach((selector, index) => {
    if (typeof selector === "function") {
      chainable = selector(chainable || cy.get("html", { log: false }));
      return;
    }
    if (index === 0) {
      chainable = cy.get(selector.toString());
      return;
    }
    chainable = chainable.find(selector.toString());
  });

  // FIXME: we use private api to access to state of chain
  chainable = (cy as any).state("chain").then((subject) => {
    // FIXME: potential problem of rise condition of promise
    if (logObj) {
      logObj?.set({ $el: subject });
      logObj?.snapshot();
      logObj?.end();
      // @ts-ignore FIXME: we use private api of log, for close group
      logObj?.endGroup();
    }

    return subject;
  });

  return chainable[method].bind(chainable);
};
