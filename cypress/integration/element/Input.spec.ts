import { Input, Element, Page } from "../../../src";

context("Actions", () => {
  beforeEach(() => {
    const page = new Page({});
    page.visit("https://example.cypress.io/commands/actions");
  });

  // https://on.cypress.io/interacting-with-elements

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

  it.only(".clear() - clears an input or textarea element", () => {
    const input = new Input({ selector: ".action-clear" });
    // https://on.cypress.io/clear
    input
      .type("Clear this text")
      .should("have.value", "Clear this text")
      .clear()
      .should("have.value", "");
  });
});
