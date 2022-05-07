import ClickOptions = Cypress.ClickOptions;
import PositionType = Cypress.PositionType;
import Chainable = Cypress.Chainable;
import ScrollIntoViewOptions = Cypress.ScrollIntoViewOptions;
import ScrollToOptions = Cypress.ScrollToOptions;
import Loggable = Cypress.Loggable;
import Timeoutable = Cypress.Timeoutable;

import { Chainer } from "./Chainer";

type SelectorFnType = (props: { parent?: Element }) => Chainable<JQuery>;
type SelectorType = string | SelectorFnType;

export class Element<T extends Record<string, any> = Record<string, any>> {
  name: string | undefined;
  protected _selector: SelectorType = "";
  protected _children: T;
  parent: Element<unknown>;
  constructor(
    { selector, name }: { selector: SelectorType; name?: string },
    children?: T
  ) {
    this._selector = selector;
    this._children = children;

    if (name) {
      this.name = name;
    }

    for (let [name, element] of Object.entries(this._children || {})) {
      element.parent = this;
      element.name = name;
    }
  }

  toString(): string {
    let arr = [];
    if (this.parent) {
      arr.push(this.parent.toString());
    }

    const name = this.name
      ? Cypress._.camelCase(this.name)
          .split("")
          .map((val, key) => (key == 0 ? val.toUpperCase() : val))
          .join("")
      : this.constructor.name;

    arr.push(
      !this._selector || this.name ? name : `${name}<${this._selector}>`
    );

    return arr.join(" > ");
  }

  protected log(
    {
      name,
      message = "",
      consoleProps,
    }: { name?: string; message?: string; consoleProps?: {} },
    cb?: any
  ) {
    (cb || cy).element((sb) => {
      Cypress.log({
        name: name ? `${this.toString()}.${name}` : this.toString(),
        // shorter name for the Command Log
        // displayName: name,
        displayName: name ? `${this.toString()}.${name}` : this.toString(),
        message: message,
        $el: sb,
        // message: message,
        consoleProps: () => {
          return {
            ...consoleProps,
            element: this,
            el: sb,
            parent: this.parent,
            selector: this._selector,
          };
        },
      });
      return sb;
    });
  }

  get _(): T {
    return this._children;
  }
  get el(): Chainable<JQuery> {
    this.log({
      name: "el",
    });

    // TODO: change logics of find when parent is Page
    const hasParent = Boolean(this.parent && this.parent._selector);

    if (typeof this._selector === "function") {
      if (hasParent) {
        return this._selector({ parent: this.parent });
      }
      return this._selector({});
    }

    if (hasParent) {
      return this.parent.el.find(this._selector);
    }

    return cy.get(this._selector, { log: false });
  }

  should: Chainer<this> = (...args) => {
    // @ts-ignore
    this.el.should(...args);
    return this;
  };

  click(options?: Partial<ClickOptions>): this;
  click(position: PositionType, options?: Partial<ClickOptions>): this;
  click(x: number, y: number, options?: Partial<ClickOptions>): this;
  click(...args) {
    this.el.click(...args);
    return this;
  }

  dblclick(options?: Partial<ClickOptions>): this;
  dblclick(position: PositionType, options?: Partial<ClickOptions>): this;
  dblclick(x: number, y: number, options?: Partial<ClickOptions>): this;
  dblclick(...args) {
    this.el.dblclick(...args);
    return this;
  }

  rightclick(options?: Partial<ClickOptions>): this;
  rightclick(position: PositionType, options?: Partial<ClickOptions>): this;
  rightclick(x: number, y: number, options?: Partial<ClickOptions>): this;
  rightclick(...args) {
    this.el.rightclick(...args);
    return this;
  }
  scrollIntoView(options?: Partial<ScrollIntoViewOptions>) {
    this.el.scrollIntoView(options);

    return this;
  }

  scrollTo(position: PositionType, options?: Partial<ScrollToOptions>): this;
  scrollTo(
    x: number | string,
    y: number | string,
    options?: Partial<ScrollToOptions>
  ): this;
  scrollTo(...args) {
    // @ts-ignore
    this.el.scrollTo(...args);

    return this;
  }

  // collection
  getFirst(options?: Partial<Loggable & Timeoutable>) {
    return this.el.first(options);
  }

  getLast(options?: Partial<Loggable & Timeoutable>) {
    return this.el.last(options);
  }
}
