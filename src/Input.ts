import TypeOptions = Cypress.TypeOptions;
import Loggable = Cypress.Loggable;
import Timeoutable = Cypress.Timeoutable;
import ClearOptions = Cypress.ClearOptions;
import BlurOptions = Cypress.BlurOptions;
import { Element } from "./Element";

export class Input extends Element<never> {
  type(value: string, options?: Partial<TypeOptions>) {
    this.el.type(value, options);
    return this;
  }

  focus(options?: Loggable & Timeoutable) {
    this.el.focus(options);
    return this;
  }
  blur(options?: BlurOptions) {
    this.el.blur(options);
    return this;
  }

  clear(options?: ClearOptions) {
    this.el.clear(options);
    return this;
  }
}
