import { Element, Input, Page } from "../../../../src";

class Todo<T> extends Page<T> {
  visit() {
    super.visit("https://example.cypress.io/todo");
    return this;
  }

  setFilter(filter: "All" | "Active" | "Completed") {
    cy.get(".filters").contains(filter).click();
  }
}

class TodoItems<T> extends Element<T> {
  constructor() {
    super({ selector: ".todo-list li" });
  }

  setCompleted(text: string) {
    this.el.contains(text).parent().find("input[type=checkbox]").check();
    return this;
  }

  getItem(text: string) {
    return this.el.contains("li", text);
  }

  checkIsCompleted(text: string) {
    this.getItem(text).should("have.class", "completed");
    return this;
  }

  getIsCompleted(text: string) {
    return this.getItem(text)
      .invoke("prop", "class")
      .then((i) => {
        return i === "completed";
      });
  }
}

export default new Todo(
  {},
  {
    items: new TodoItems(),
    newTodoField: new Input({ selector: "[data-test=new-todo]" }),
    clearCompletedButton: new Element({
      selector: "button.todo-button.clear-completed",
    }),
  }
);
