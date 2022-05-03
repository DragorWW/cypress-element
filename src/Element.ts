import ClickOptions = Cypress.ClickOptions;
import PositionType = Cypress.PositionType;
import Chainable = Cypress.Chainable;
import ScrollIntoViewOptions = Cypress.ScrollIntoViewOptions;
import ScrollToOptions = Cypress.ScrollToOptions;

import { Chainer } from "./Chainer";

export class Element<T extends Record<string, any> = Record<string, any>> {
  name: string | undefined;
  protected _selector = "";
  protected _children: T;
  parent: Element<unknown>;
  constructor({ selector }: { selector: string }, children?: T) {
    this._selector = selector;
    this._children = children;

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

    arr.push(!this._selector ? name : `${name}<${this._selector}>`);

    return arr.join(" > ");
  }

  protected log(
    {
      name,
      message,
      consoleProps,
    }: { name: string; message?: string; consoleProps?: {} },
    cb?: any
  ) {
    (cb || cy).element((sb) => {
      Cypress.log({
        name: `${this.constructor.name}.${name}`,
        // shorter name for the Command Log
        displayName: name,
        $el: sb,
        message: message,
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
      message: this.toString(),
    });
    const el = cy.get(this._selector, { log: false });

    // TODO: change logics of find when parent is Page
    if (this.parent && this.parent.constructor.name !== "Page") {
      return this.parent.el.find(this._selector);
    }
    return el;
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
}
