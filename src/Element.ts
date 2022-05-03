import ClickOptions = Cypress.ClickOptions;
import PositionType = Cypress.PositionType;
import Chainable = Cypress.Chainable;
import { Chainer } from "./Chainer";

export class Element<T extends Record<string, any> = Record<string, any>> {
  protected _selector = "";
  protected _children: T;
  parent: Element<unknown>;
  constructor({ selector }: { selector: string }, children?: T) {
    this._selector = selector;
    this._children = children;

    for (let [name, element] of Object.entries(this._children || {})) {
      element.parent = this;
    }
  }

  toString(): string {
    return `${this.constructor.name}<${this._selector}>`;
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

    if (this.parent) {
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
}
