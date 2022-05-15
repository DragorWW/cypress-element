import { el } from "../../../src";

const elementWithCustomQuery = el({
  el(cy) {
    return cy.contains("h1", "element-find-by-nested-selector").parent("div");
  },
});

describe("querying", () => {
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
      element.elementWithCustomQuery.should("have.attr", "data-parent", "true");
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

describe("cypress-element", () => {
  beforeEach(() => {
    // cy.visit("./cypress/test.html");
    // FIXME: bug in cypress, when run spec from 2 files with diference origin
    cy.visit("https://example.cypress.io/commands/actions");
    cy.get("body").then((body) => {
      body.html(`
      <div id="a">a</div>
      <div id="b">b</div>
      <div id="c">c</div>
      <div class="item">global item</div>
      <div class="root">
        <div class="item">local item</div>
      </div>
      `);
    });
  });
  it("root selector", () => {
    const parent = el({
      el: ".root",
      item: el(el.r`.item`),
    });

    parent.item.should("have.length", 2);
  });

  it("string selector", () => {
    const parent = el({
      el: ".root",
      item: el({ el: ".item" }),
    });

    parent.item.should("have.text", "local item");
  });
  it("string selector with parent", () => {
    const elA = el({ el: "#a" });

    elA.should("have.text", "a");
  });
  it("fn without parent", () => {
    const elA = el("#a");

    elA.should("have.text", "a");
  });

  it("fn with parent", () => {
    const parent = el({
      el: ".root",
      item: el(".item"),
    });

    parent.item.should("have.text", "local item");
  });
});
