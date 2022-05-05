import { Element } from "../../../src";

describe("Element", () => {
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

  it("string selector", () => {
    const parent = new Element(
      { selector: ".root" },
      {
        item: new Element({ selector: ".item" }),
      }
    );

    parent._.item.el.should("have.text", "local item");
  });
  it("string selector with parent", () => {
    const el = new Element({ selector: "#a" });

    el.el.should("have.text", "a");
  });
  it("fn without parent", () => {
    const el = new Element({ selector: () => cy.get("#a") });

    el.el.should("have.text", "a");
  });

  it("fn without parent, but use it", () => {
    const el = new Element({
      selector: ({ parent }) => (parent?.el || cy).get("#a"),
    });

    el.el.should("have.text", "a");
  });

  it("fn with parent", () => {
    const parent = new Element(
      { selector: ".root" },
      {
        item: new Element({
          selector: ({ parent }) => parent.el.find(".item"),
        }),
      }
    );

    parent._.item.el.should("have.text", "local item");
  });
});
