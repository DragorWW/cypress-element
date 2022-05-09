# 🎁 cypress-element

![Test status](https://github.com/dragorww/cypress-element/actions/workflows/main.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![npm version](https://badge.fury.io/js/cypress-element.svg)](https://www.npmjs.com/package/cypress-element)

Composition api for [cypress](https://cypress.io)

`cypress-element` – Simple, Composable, Customisable, Reusable, Friendly for developer library written on TypeScript for writing tests on Cypress

### Main concept

- ✨**Simple**: Everything is an element
- 🌳**Composable**: element can be organized by composition of elements hierarchy
- 🛠**Customisable**: You can create own elements
- ⏳**Reusable**: You can save elements hierarchy
- ✌**Friendly**: TypeScript first, autocomplete, auto type

## Installing

```shell
npm i -D cypress-element
# or
yarn add -D cypress-element
```

## Usage

`cypress-element` extends Cypress' `cy` command.

Add this line to your project's `cypress/support/commands.js`:

```javascript
import "cypress-element/lib/commands";
```

Then, in your test, you can write

```typescript
import { el } from "cypress-element";
// or
// import el from 'cypress-element';

// ...

const page = el("div", {
  button: el("button"),
});

it("test", () => {
  page.visit("/test.html");
  page.button.click();
});
```

## Documentation

### Motivation

Today real app usually work on one of frameworks: React, Vue, Agular. All popular frontend framework base on two concepts: composition structures and idea of everything is a component.
We can use same ideas in tests for real app, and take benefits of this.

### Examples

You found examples of usage in [test folder](./cypress/integration/example)

### create elements and use

```typescript
const newTodoField = el("[data-test=new-todo]");

newTodoField.type("text");
```

### define custom method on element

```typescript
const todoPage = el({
  visit() {
    cy.visit("https://example.cypress.io/todo");
  },
  setFilter(filter: "All" | "Active" | "Completed") {
    cy.get(".filters").contains(filter).click();
  },
});
```

### use nested elements

```typescript
const todoItem = el({
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
});

const page = el({
  visit() {
    cy.visit("https://example.cypress.io/todo");
  },
  setFilter(filter: "All" | "Active" | "Completed") {
    cy.get(".filters").contains(filter).click();
  },
  newTodoField: el("[data-test=new-todo]"),
  clearCompletedButton: el("button.todo-button.clear-completed"),
  items: todoItem,
});
```

### Write test

```typescript
beforeEach(() => {
  todoPage.visit();
});

it("can check off an item as completed", () => {
  todoPage.items.setCompleted("Pay electric bill");
  todoPage.items.checkIsCompleted("Pay electric bill");

  todoPage.items.getIsCompleted("Pay electric bill").should("be.true");
});
```

## API

### `el()`

shorthand usage

```typescript
el("<selector>");
```

full usage

```typescript
el({
  el: "<selector>",
});
```

define children

```typescript
el({
  child: el("<selector>"),
});
```

define method

```typescript
el({
  method1() {
    // this provide all element and method

    // you can return anything if you wont
    return cy.visit("/test");
  },
});
```

### `el.r`

usage:

```typescript
el(el.r`<selector>`);
```

By default `cypress-element` use hierarchy element for build selector

```typescript
const root = e({
  el: ".root",
  nested: el(".nested"),
});

// selector: cy.get('.root')
root;

// selector: cy.get('.root .nested')
root.nested;
```

this behavior good for typical app with pretty structure of component

You can pass root selector for aborting it

```typescript
const root = e({
  el: ".root",
  nested: el(el.r`.nested`),
});

// selector: cy.get('.root')
root;

// selector: cy.get('.nested')
root.nested;
```
