import VisitOptions = Cypress.VisitOptions;
import Loggable = Cypress.Loggable;
import Timeoutable = Cypress.Timeoutable;
import UrlOptions = Cypress.UrlOptions;

import { Element } from "./Element";

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

  getHash(options?: Partial<Loggable & Timeoutable>) {
    return this.el.hash(options);
  }

  getLocation(options?: Partial<Loggable & Timeoutable>) {
    return this.el.location(options);
  }

  getUrl(options?: Partial<UrlOptions>) {
    return this.el.url(options);
  }

  getWindow(options?: Partial<Loggable & Timeoutable>) {
    return this.el.window(options);
  }

  getDocument(options?: Partial<Loggable & Timeoutable>) {
    return this.el.document(options);
  }

  getTitle(options?: Partial<Loggable & Timeoutable>) {
    return this.el.title(options);
  }
}
