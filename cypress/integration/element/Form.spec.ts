import { Form, Input } from "../../../src";

describe("Form", function () {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });
  it(".submit() - submit a form", () => {
    const myForm = new Form(
      { selector: ".action-form" },
      {
        input: new Input({ selector: '[type="text"]' }),
        input2: new Input({ selector: '[type="text"]' }),
      }
    );

    myForm._.input.type("HALFOFF");
    myForm.submit();

    cy.get(".action-form")
      .next()
      .should("contain", "Your form has been submitted!");
  });
});
