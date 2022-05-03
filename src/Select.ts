import { Element } from "./Element";
import SelectOptions = Cypress.SelectOptions;

export class Select<T> extends Element<T> {
  setValue(
    valueOrTextOrIndex: string | number | Array<string | number>,
    options?: Partial<SelectOptions>
  ) {
    this.el.select(valueOrTextOrIndex, options);

    return this;
  }
  getValue() {
    return this.el.invoke("val");
  }
}
