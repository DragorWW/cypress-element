import { Element, Form, Input, Page, Select } from "../../../src";

context("Actions", () => {
  const pageActions = new Page({name: 'pageActions'});
  beforeEach(() => {
    pageActions.visit("https://example.cypress.io/commands/actions");
  });

  it.only(".click() - click on a DOM element", () => {
    const button = new Element({ selector: ".action-btn", name: 'button' });
    const canvas = new Element({ selector: "#action-canvas", name: 'canvas' });

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

  it("cy.scrollTo() - scroll the window or element to a position", () => {
    const page = new Page({});
    const scrollableHorizontal = new Element({
      selector: "#scrollable-horizontal",
    });
    const scrollableVertical = new Element({
      selector: "#scrollable-vertical",
    });
    const scrollableBoth = new Element({ selector: "#scrollable-both" });

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

    scrollableHorizontal.scrollTo("right");

    // or you can scroll to a specific coordinate:
    // (x axis, y axis) in pixels
    scrollableVertical.scrollTo(250, 250);

    // or you can scroll to a specific percentage
    // of the (width, height) of the element
    scrollableBoth.scrollTo("75%", "25%");

    // control the easing of the scroll (default is 'swing')
    scrollableVertical.scrollTo("center", { easing: "linear" });

    // control the duration of the scroll (in ms)
    scrollableBoth.scrollTo("center", { duration: 2000 });
  });

  it(".type() - type into a DOM element", () => {
    const inputEmail = new Input({ selector: ".action-email" });
    const inputDisabled = new Input({ selector: ".action-disabled" });

    // https://on.cypress.io/type
    inputEmail
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

    inputDisabled
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type("disabled error checking", { force: true })
      .should("have.value", "disabled error checking");
  });

  it(".focus() - focus on a DOM element", () => {
    const inputPassword = new Input({ selector: ".action-focus" });
    const label = new Element({ selector: 'label[for="password1"]' });
    inputPassword.focus().should("have.class", "focus");
    label.should("have.attr", "style", "color: orange;");
  });

  it(".blur() - blur off a DOM element", () => {
    const input = new Input({ selector: ".action-blur" });
    const label = new Element({ selector: 'label[for="fullName1"]' });

    input.type("About to blur").blur().should("have.class", "error");
    label.should("have.attr", "style", "color: red;");
  });

  it(".clear() - clears an input or textarea element", () => {
    const input = new Input({ selector: ".action-clear" });
    // https://on.cypress.io/clear
    input
      .type("Clear this text")
      .should("have.value", "Clear this text")
      .clear()
      .should("have.value", "");
  });

  it(".submit() - submit a form", () => {
    const myForm = new Form(
      { selector: ".action-form" },
      {
        input: new Input({ selector: '[type="text"]' }),
        input2: new Input({ selector: '[type="text"]' }),
      }
    );

    myForm._.input.type("HALFOFF");
    myForm.submit();

    cy.get(".action-form")
      .next()
      .should("contain", "Your form has been submitted!");
  });

  it.skip(".check() - check a checkbox or radio element", () => {
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

  it.skip(".uncheck() - uncheck a checkbox element", () => {
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
    const select = new Select({ selector: ".action-select" });
    const multiSelect = new Select({ selector: ".action-select-multiple" });

    // at first, no option should be selected
    select.should("have.value", "--Select a fruit--");

    // Select option(s) with matching text content
    select.setValue("apples");
    // confirm the apples were selected
    // note that each value starts with "fr-" in our HTML
    select.should("have.value", "fr-apples");

    multiSelect
      .setValue(["apples", "oranges", "bananas"])
      // when getting multiple values, invoke "val" method first
      .getValue()
      .should("deep.equal", ["fr-apples", "fr-oranges", "fr-bananas"]);

    // Select option(s) with matching value
    select
      .setValue("fr-bananas")
      // can attach an assertion right away to the element
      .should("have.value", "fr-bananas");

    multiSelect
      .setValue(["fr-apples", "fr-oranges", "fr-bananas"])
      .getValue()
      .should("deep.equal", ["fr-apples", "fr-oranges", "fr-bananas"]);

    // assert the selected values include oranges
    multiSelect.getValue().should("include", "fr-oranges");
  });

  it.skip(".trigger() - trigger an event on a DOM element", () => {
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
