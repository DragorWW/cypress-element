import { el } from "../../../src";

const todoPage = el({
  name: "todoPage",
  visit() {
    cy.visit("https://example.cypress.io/todo");
  },
  setFilter(filter: "All" | "Active" | "Completed") {
    cy.get(".filters").contains(filter).click();
  },
  newTodoField: el("[data-test=new-todo]"),
  clearCompletedButton: el("button.todo-button.clear-completed"),
  items: el({
    name: "todo",
    el: ".todo-list li",
    setCompleted(text: string) {
      this.contains(text).parent().find("input[type=checkbox]").check();
    },
    getItem(text: string) {
      return this.contains("li", text);
    },
    checkIsCompleted(text: string) {
      this.getItem(text).should("have.class", "completed");
    },
    getIsCompleted(text: string) {
      return this.getItem(text)
        .invoke("prop", "class")
        .then((i) => {
          return i === "completed";
        });
    },
  }),
});

describe("example to-do app", () => {
  beforeEach(() => {
    todoPage.visit();
  });

  it("displays two todo items by default", () => {
    todoPage.items.should("have.length", 2);
    todoPage.items.first().should("have.text", "Pay electric bill");
    todoPage.items.last().should("have.text", "Walk the dog");
  });

  it("can add new todo items", () => {
    const newItem = "Feed the cat";

    todoPage.newTodoField.type(`${newItem}{enter}`);
    todoPage.items.should("have.length", 3).last().should("have.text", newItem);
  });

  it("can check off an item as completed", () => {
    todoPage.items.setCompleted("Pay electric bill");
    todoPage.items.checkIsCompleted("Pay electric bill");

    todoPage.items.getIsCompleted("Pay electric bill").should("be.true");
  });

  context("with a checked task", () => {
    beforeEach(() => {
      todoPage.items.setCompleted("Pay electric bill");
    });

    it("can filter for uncompleted tasks", () => {
      todoPage.setFilter("Active");
      todoPage.items
        .should("have.length", 1)
        .first()
        .should("have.text", "Walk the dog");
      todoPage.items.getItem("Pay electric bill").should("not.exist");
    });

    it("can filter for completed tasks", () => {
      todoPage.setFilter("Completed");
      todoPage.items
        .should("have.length", 1)
        .first()
        .should("have.text", "Pay electric bill");

      todoPage.items.getItem("Walk the dog").should("not.exist");
    });

    it("can delete all completed tasks", () => {
      todoPage.clearCompletedButton.click();
      todoPage.items
        .should("have.length", 1)
        .should("not.have.text", "Pay electric bill");

      todoPage.clearCompletedButton.should("not.be.visible");
    });
  });
});
