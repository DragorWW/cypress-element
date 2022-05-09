declare namespace Cypress {
  interface Chainable {
    element(cb: (sb: any) => any): Chainable;
  }
}

Cypress.Commands.add(
  "element",
  { prevSubject: "optional" },
  function (subject, cb) {
    cb(subject);
  }
);
