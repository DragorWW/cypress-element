import VisitOptions = Cypress.VisitOptions;
import Loggable = Cypress.Loggable;
import Timeoutable = Cypress.Timeoutable;
import UrlOptions = Cypress.UrlOptions;
import SetCookieOptions = Cypress.SetCookieOptions;

import { Element } from "./Element";

export class Page<T> extends Element<T> {
  constructor({ name }: { name?: string }, children?: T) {
    super({ selector: "", name }, children);
  }

  get el() {
    this.log({
      name: "",
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

  clearCookies(options?: Partial<Loggable & Timeoutable>) {
    this.el.clearCookies(options);

    return this;
  }

  clearCookie(name: string, options?: Partial<Loggable & Timeoutable>) {
    this.el.clearCookie(name, options);

    return this;
  }

  getCookies(options?: Partial<Loggable & Timeoutable>) {
    return this.el.getCookies(options);
  }

  getCookie(name: string, options?: Partial<Loggable & Timeoutable>) {
    return this.el.getCookie(name, options);
  }

  setCookie(name: string, value: string, options?: Partial<SetCookieOptions>) {
    this.el.setCookie(name, value, options);

    return this;
  }
}
