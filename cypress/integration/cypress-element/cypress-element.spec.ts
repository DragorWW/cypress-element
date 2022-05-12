import { el } from "../../../src";

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
