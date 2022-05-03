import { Page } from "../../../src";

context("Window", () => {
  const page = new Page({});
  beforeEach(() => {
    page.visit("https://example.cypress.io/commands/window");
  });

  it("cy.window() - get the global window object", () => {
    // https://on.cypress.io/window
    page.getWindow().should("have.property", "top");
  });

  it("cy.document() - get the document object", () => {
    // https://on.cypress.io/document
    page.getDocument().should("have.property", "charset").and("eq", "UTF-8");
  });

  it("cy.title() - get the title", () => {
    // https://on.cypress.io/title
    page.getTitle().should("include", "Kitchen Sink");
  });
});
