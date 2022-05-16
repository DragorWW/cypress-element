import { el } from "../../../src";

context("shorthand usage should be work", () => {
  beforeEach(() => {
    cy.visit("./cypress/index.html");
  });
  const selector = "#element";
  it("can pass string as selector", () => {
    el(selector).should("contain.text", selector);
  });
  it("can pass rootSelector as selector", () => {
    el(el.r`${selector}`).should("contain.text", selector);
  });
  it("can pass function as selector", () => {
    el((cy) => cy.find(selector)).should("contain.text", selector);
  });
});

describe("variant of element selector type", () => {
  describe("function as selector", () => {
    const elementWithCustomQuery = el({
      el(cy) {
        return cy
          .contains("h1", "element-find-by-nested-selector")
          .parent("div");
      },
    });

    beforeEach(() => {
      cy.visit("./cypress/index.html");
    });

    context("element find by nested selector", () => {
      it("single", () => {
        elementWithCustomQuery.should(
          "have.class",
          "element-find-by-nested-selector"
        );
        elementWithCustomQuery.should("have.attr", "data-parent", "false");
      });

      it("parent with selector", () => {
        const element = el({
          el: ".element.parent",
          elementWithCustomQuery,
        });
        element.elementWithCustomQuery.should(
          "have.class",
          "element-find-by-nested-selector"
        );
        element.elementWithCustomQuery.should(
          "have.attr",
          "data-parent",
          "true"
        );
      });
      it("parent without selector", () => {
        const element = el({
          elementWithCustomQuery,
        });
        element.elementWithCustomQuery.should(
          "have.class",
          "element-find-by-nested-selector"
        );
        element.elementWithCustomQuery.should(
          "have.attr",
          "data-parent",
          "false"
        );
      });
    });
  });

  describe("rootSelector as selector", () => {
    const rootEl = el({
      el: el.r`.item-for-root-selector`,
    });
    const notRootEl = el({
      el: `.item-for-root-selector`,
    });
    const parent = el({
      el: "#rootSelector .parent",
      rootEl,
      notRootEl,
    });

    it("rootSelector should be work", () => {
      rootEl.should("have.length", 2);
      notRootEl.should("have.length", 2);
    });
    it("rootSelector should ignore nesting", () => {
      parent.rootEl.should("have.length", 2);
      parent.notRootEl.should("have.length", 1);
    });
  });
});
