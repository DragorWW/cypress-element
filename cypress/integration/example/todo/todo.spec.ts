import page from "./page";

describe("example to-do app", () => {
  beforeEach(() => {
    page.visit();
  });

  it("displays two todo items by default", () => {
    page._.items.should("have.length", 2);

    page._.items.getFirst().should("have.text", "Pay electric bill");
    page._.items.getLast().should("have.text", "Walk the dog");
  });

  it("can add new todo items", () => {
    const newItem = "Feed the cat";

    page._.newTodoField.type(`${newItem}{enter}`);
    page._.items
      .should("have.length", 3)
      .getLast()
      .should("have.text", newItem);
  });

  it("can check off an item as completed", () => {
    page._.items.setCompleted("Pay electric bill");
    page._.items.checkIsCompleted("Pay electric bill");

    page._.items.getIsCompleted("Pay electric bill").should("be.true");
  });

  context("with a checked task", () => {
    beforeEach(() => {
      page._.items.setCompleted("Pay electric bill");
    });

    it("can filter for uncompleted tasks", () => {
      page.setFilter("Active");
      page._.items
        .should("have.length", 1)
        .getFirst()
        .should("have.text", "Walk the dog");
      page._.items.getItem("Pay electric bill").should("not.exist");
    });

    it("can filter for completed tasks", () => {
      page.setFilter("Completed");
      page._.items
        .should("have.length", 1)
        .getFirst()
        .should("have.text", "Pay electric bill");

      page._.items.getItem("Walk the dog").should("not.exist");
    });

    it("can delete all completed tasks", () => {
      page._.clearCompletedButton.click();
      page._.items
        .should("have.length", 1)
        .should("not.have.text", "Pay electric bill");

      page._.clearCompletedButton.should("not.be.visible");
    });
  });
});
