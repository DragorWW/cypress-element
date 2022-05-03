import Loggable = Cypress.Loggable;
import Timeoutable = Cypress.Timeoutable;

import { Element } from "./Element";

export class Form<T> extends Element<T> {
  submit(options?: Loggable & Timeoutable) {
    this.el.submit(options);
    return this;
  }
}
