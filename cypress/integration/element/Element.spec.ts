import { Element, Input } from "../../../src";
import {Page} from "../../../src/Page";

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

  it(".scrollIntoView() - scroll an element into view", () => {
    const horizontalButton = new Element({
      selector: "#scroll-horizontal button",
    });
    const verticalButton = new Element({ selector: "#scroll-vertical button" });
    const bothButton = new Element({ selector: "#scroll-both button" });
    horizontalButton
      .should("not.be.visible")
      .scrollIntoView()
      .should("be.visible");

    verticalButton
      .should("not.be.visible")
      .scrollIntoView()
      .should("be.visible");

    bothButton.should("not.be.visible").scrollIntoView().should("be.visible");
  });

  it('cy.scrollTo() - scroll the window or element to a position', () => {
    const page = new Page({});
    const scrollableHorizontal = new Element({selector: '#scrollable-horizontal'});
    const scrollableVertical = new Element({selector: '#scrollable-vertical'});
    const scrollableBoth = new Element({selector: '#scrollable-both'});

    // You can scroll to 9 specific positions of an element:
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

    // if you chain .scrollTo() off of cy, we will
    // scroll the entire window
    page.scrollTo('bottom')

    scrollableHorizontal.scrollTo('right')

    // or you can scroll to a specific coordinate:
    // (x axis, y axis) in pixels
    scrollableVertical.scrollTo(250, 250)

    // or you can scroll to a specific percentage
    // of the (width, height) of the element
    scrollableBoth.scrollTo('75%', '25%')

    // control the easing of the scroll (default is 'swing')
    scrollableVertical.scrollTo('center', { easing: 'linear' })

    // control the duration of the scroll (in ms)
    scrollableBoth.scrollTo('center', { duration: 2000 })
  })
});
