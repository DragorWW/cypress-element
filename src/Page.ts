import {Element} from "./Element";

export class Page<T> extends  Element<T> {
    constructor(options: {}, children?: T) {
        super({selector: ''}, children);
    }
    get el() {
        this.log({
            name: "el",
            message: this.toString(),
        });
        return cy;
    }
}