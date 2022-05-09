import { el } from "../../../src";

const page = el({});

context("Window", () => {
  beforeEach(() => {
    page.visit("https://example.cypress.io/commands/window");
  });

  it("cy.window() - get the global window object", () => {
    // https://on.cypress.io/window
    page.window().should("have.property", "top");
  });

  it("cy.document() - get the document object", () => {
    // https://on.cypress.io/document
    page.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it("cy.title() - get the title", () => {
    // https://on.cypress.io/title
    page.title().should("include", "Kitchen Sink");
  });
});
