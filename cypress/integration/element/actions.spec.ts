import { el } from "../../../src";

const pageActions = el({
  visit() {
    cy.visit("https://example.cypress.io/commands/actions");
  },
  button: el(".action-btn"),
  canvas: el("#action-canvas"),
  actionDiv: el(".action-div"),
  input: el(".action-input-hidden"),
  rightclick: {
    actionDiv: el(".rightclick-action-div"),
    input: el(".rightclick-action-input-hidden"),
  },
  horizontalButton: el("#scroll-horizontal button"),
  verticalButton: el("#scroll-vertical button"),
  bothButton: el("#scroll-both button"),
});

context("Actions", () => {
  beforeEach(() => {
    pageActions.visit();
  });

  it(".click() - click on a DOM element", () => {
    pageActions.button.click();

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
    pageActions.canvas.click();

    pageActions.canvas.click("topLeft");
    pageActions.canvas.click("top");
    pageActions.canvas.click("topRight");
    pageActions.canvas.click("left");
    pageActions.canvas.click("right");
    pageActions.canvas.click("bottomLeft");
    pageActions.canvas.click("bottom");
    pageActions.canvas.click("bottomRight");

    // .click() accepts an x and y coordinate
    // that controls where the click occurs :)

    pageActions.canvas
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

    // Our app has a listener on 'dblclick' event in our 'scripts.js'
    // that hides the div and shows an input on double click
    pageActions.actionDiv.dblclick().should("not.be.visible");
    pageActions.input.should("be.visible");
  });

  it(".rightclick() - right click on a DOM element", () => {
    // https://on.cypress.io/rightclick

    // Our app has a listener on 'contextmenu' event in our 'scripts.js'
    // that hides the div and shows an input on right click
    pageActions.rightclick.actionDiv.rightclick().should("not.be.visible");
    pageActions.rightclick.input.should("be.visible");
  });

  it(".scrollIntoView() - scroll an element into view", () => {
    pageActions.horizontalButton
      .should("not.be.visible")
      .scrollIntoView()
      .should("be.visible");

    pageActions.verticalButton
      .should("not.be.visible")
      .scrollIntoView()
      .should("be.visible");

    pageActions.bothButton
      .should("not.be.visible")
      .scrollIntoView()
      .should("be.visible");
  });

  it("cy.scrollTo() - scroll the window or element to a position", () => {
    const page = el({
      scrollableHorizontal: el("#scrollable-horizontal"),
      scrollableVertical: el("#scrollable-vertical"),
      scrollableBoth: el("#scrollable-both"),
    });

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
    page.scrollTo("bottom");

    page.scrollableHorizontal.scrollTo("right");

    // or you can scroll to a specific coordinate:
    // (x axis, y axis) in pixels
    page.scrollableVertical.scrollTo(250, 250);

    // or you can scroll to a specific percentage
    // of the (width, height) of the element
    page.scrollableBoth.scrollTo("75%", "25%");

    // control the easing of the scroll (default is 'swing')
    page.scrollableVertical.scrollTo("center", { easing: "linear" });

    // control the duration of the scroll (in ms)
    page.scrollableBoth.scrollTo("center", { duration: 2000 });
  });

  it(".type() - type into a DOM element", () => {
    const page = el({
      inputEmail: el(".action-email"),
      inputDisabled: el(".action-disabled"),
    });

    // https://on.cypress.io/type
    page.inputEmail
      .type("fake@email.com")
      .should("have.value", "fake@email.com")

      // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("slow.typing@email.com", { delay: 100 })
      .should("have.value", "slow.typing@email.com");

    page.inputDisabled
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type("disabled error checking", { force: true })
      .should("have.value", "disabled error checking");
  });

  it(".focus() - focus on a DOM element", () => {
    const page = el({
      inputPassword: el(".action-focus"),
      label: el('label[for="password1"]'),
    });

    page.inputPassword.focus().should("have.class", "focus");
    page.label.should("have.attr", "style", "color: orange;");
  });

  it(".blur() - blur off a DOM element", () => {
    const page = el({
      input: el(".action-blur"),
      label: el('label[for="fullName1"]'),
    });

    page.input.type("About to blur").blur().should("have.class", "error");
    page.label.should("have.attr", "style", "color: red;");
  });

  it(".clear() - clears an input or textarea element", () => {
    const input = el(".action-clear");
    // https://on.cypress.io/clear
    input
      .type("Clear this text")
      .should("have.value", "Clear this text")
      .clear()
      .should("have.value", "");
  });

  it(".submit() - submit a form", () => {
    const myForm = el({
      el: ".action-form",
      input: el('[type="text"]'),
    });

    myForm.input.type("HALFOFF");
    myForm.submit();

    myForm.next().should("contain", "Your form has been submitted!");
  });

  it(".check() - check a checkbox or radio element", () => {
    // https://on.cypress.io/check

    // By default, .check() will check all
    // matching checkbox or radio elements in succession, one after another
    cy.get('.action-checkboxes [type="checkbox"]')
      .not("[disabled]")
      .check()
      .should("be.checked");

    cy.get('.action-radios [type="radio"]')
      .not("[disabled]")
      .check()
      .should("be.checked");

    // .check() accepts a value argument
    cy.get('.action-radios [type="radio"]')
      .check("radio1")
      .should("be.checked");

    // .check() accepts an array of values
    cy.get('.action-multiple-checkboxes [type="checkbox"]')
      .check(["checkbox1", "checkbox2"])
      .should("be.checked");

    // Ignore error checking prior to checking
    cy.get(".action-checkboxes [disabled]")
      .check({ force: true })
      .should("be.checked");

    cy.get('.action-radios [type="radio"]')
      .check("radio3", { force: true })
      .should("be.checked");
  });

  it(".uncheck() - uncheck a checkbox element", () => {
    // https://on.cypress.io/uncheck

    // By default, .uncheck() will uncheck all matching
    // checkbox elements in succession, one after another
    cy.get('.action-check [type="checkbox"]')
      .not("[disabled]")
      .uncheck()
      .should("not.be.checked");

    // .uncheck() accepts a value argument
    cy.get('.action-check [type="checkbox"]')
      .check("checkbox1")
      .uncheck("checkbox1")
      .should("not.be.checked");

    // .uncheck() accepts an array of values
    cy.get('.action-check [type="checkbox"]')
      .check(["checkbox1", "checkbox3"])
      .uncheck(["checkbox1", "checkbox3"])
      .should("not.be.checked");

    // Ignore error checking prior to unchecking
    cy.get(".action-check [disabled]")
      .uncheck({ force: true })
      .should("not.be.checked");
  });

  it(".select() - select an option in a <select> element", () => {
    const page = el({
      select: el(".action-select"),
      multiSelect: el(".action-select-multiple"),
    });

    // at first, no option should be selected
    page.select.should("have.value", "--Select a fruit--");

    // Select option(s) with matching text content
    page.select.select("apples");
    // confirm the apples were selected
    // note that each value starts with "fr-" in our HTML
    page.select.should("have.value", "fr-apples");

    page.multiSelect
      .select(["apples", "oranges", "bananas"])
      // when getting multiple values, invoke "val" method first
      .invoke("val")
      .should("deep.equal", ["fr-apples", "fr-oranges", "fr-bananas"]);

    // Select option(s) with matching value
    page.select
      .select("fr-bananas")
      // can attach an assertion right away to the element
      .should("have.value", "fr-bananas");

    page.multiSelect
      .select(["fr-apples", "fr-oranges", "fr-bananas"])
      .invoke("val")
      .should("deep.equal", ["fr-apples", "fr-oranges", "fr-bananas"]);

    // assert the selected values include oranges
    page.multiSelect.invoke("val").should("include", "fr-oranges");
  });

  it(".trigger() - trigger an event on a DOM element", () => {
    // https://on.cypress.io/trigger

    // To interact with a range input (slider)
    // we need to set its value & trigger the
    // event to signal it changed

    // Here, we invoke jQuery's val() method to set
    // the value and trigger the 'change' event
    cy.get(".trigger-input-range")
      .invoke("val", 25)
      .trigger("change")
      .get("input[type=range]")
      .siblings("p")
      .should("have.text", "25");
  });
});
