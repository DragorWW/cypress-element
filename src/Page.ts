import { Element } from "./Element";
import VisitOptions = Cypress.VisitOptions;

export class Page<T> extends Element<T> {
  constructor(options: {}, children?: T) {
    super({ selector: "" }, children);
  }
  get el() {
    this.log({
      name: "el",
      message: this.toString(),
    });
    return cy;
  }

  visit(url: string, options?: Partial<VisitOptions>): this;
  visit(options: Partial<VisitOptions> & { url: string }): this;
  visit(...args) {
    // @ts-ignore
    this.el.visit(...args);

    return this;
  }
}
