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

  reload(options?: Partial<Loggable & Timeoutable>): this;
  reload(forceReload: boolean): this;
  reload(...args) {
    this.el.reload(...args);

    return this;
  }

  getHash(options?: Partial<Loggable & Timeoutable>) {
    return this.el.hash(options);
  }

  getLocation<K extends keyof Location>(
    key: K,
    options?: Partial<Loggable & Timeoutable>
  ): Cypress.Chainable<Location[K]>;
  getLocation(
    options?: Partial<Loggable & Timeoutable>
  ): Cypress.Chainable<Location>;
  getLocation(...args) {
    return this.el.location(...args);
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
