import { Element, Input } from "../../../src";

describe("Element", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });
  it(".click() - click on a DOM element", () => {
    const button = new Element({ selector: ".action-btn" });
    const canvas = new Element({ selector: "#action-canvas" });

    button.click();

    // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // clicking in the center of the element is the default
    canvas.click();

    canvas.click("topLeft");
    canvas.click("top");
    canvas.click("topRight");
    canvas.click("left");
    canvas.click("right");
    canvas.click("bottomLeft");
    canvas.click("bottom");
    canvas.click("bottomRight");

    // .click() accepts an x and y coordinate
    // that controls where the click occurs :)

    canvas
      .click(80, 75) // click 80px on x coord and 75px on y coord
      .click(170, 75)
      .click(80, 165)
      .click(100, 185)
      .click(125, 190)
      .click(150, 185)
      .click(170, 165);

    // click multiple elements by passing multiple: true
    cy.get(".action-labels>.label").click({ multiple: true });

    // Ignore error checking prior to clicking
    cy.get(".action-opacity>.btn").click({ force: true });
  });

  it(".dblclick() - double click on a DOM element", () => {
    // https://on.cypress.io/dblclick

    const actionDiv = new Element({ selector: ".action-div" });
    const input = new Input({ selector: ".action-input-hidden" });

    // Our app has a listener on 'dblclick' event in our 'scripts.js'
    // that hides the div and shows an input on double click
    actionDiv.dblclick().should("not.be.visible");
    input.should("be.visible");
  });

  it(".rightclick() - right click on a DOM element", () => {
    const actionDiv = new Element({ selector: ".rightclick-action-div" });
    const input = new Input({ selector: ".rightclick-action-input-hidden" });

    // https://on.cypress.io/rightclick

    // Our app has a listener on 'contextmenu' event in our 'scripts.js'
    // that hides the div and shows an input on right click
    actionDiv.rightclick().should("not.be.visible");
    input.should("be.visible");
  });
});
