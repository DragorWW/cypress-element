import { el } from "../../../src";

const page = el({
  navbar: el(".navbar-nav"),
  dropdown: el(".dropdown-menu"),
});

context("Navigation", () => {
  beforeEach(() => {
    page.visit("https://example.cypress.io");
    page.navbar.contains("Commands").click();
    page.dropdown.contains("Navigation").click();
  });

  it("cy.go() - go back or forward in the browser's history", () => {
    page.location("pathname").should("include", "navigation");

    cy.go("back");
    page.location("pathname").should("not.include", "navigation");

    cy.go("forward");
    page.location("pathname").should("include", "navigation");

    // clicking back
    cy.go(-1);
    page.location("pathname").should("not.include", "navigation");

    // clicking forward
    cy.go(1);
    page.location("pathname").should("include", "navigation");
  });

  it("cy.reload() - reload the page", () => {
    // https://on.cypress.io/reload
    page.reload();

    // reload the page without using the cache
    page.reload(true);
  });

  it("cy.visit() - visit a remote url", () => {
    // https://on.cypress.io/visit

    // Visit any sub-domain of your current domain

    // Pass options to the visit
    page.visit("https://example.cypress.io/commands/navigation", {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === "object").to.be.true;
      },
      onLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === "object").to.be.true;
      },
    });
  });
});
