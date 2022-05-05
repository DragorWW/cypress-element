# cypress-element

![Test status](https://github.com/dragorww/cypress-element/actions/workflows/main.yml/badge.svg)

Composition api for [cypress](https://cypress.io)

`cypress-element` – Simple, Composable, Customisable, Reusable, Friendly for developer library written on TypeScript for writing tests on Cypress

## Main concept

- **Simple**: Everything is an element
- **Composable**: element can be organized by composition of elements hierarchy
- **Customisable**: You can create own elements
- **Reusable**: You can save elements hierarchy
- **Friendly**: TypeScript first, autocomplete, auto type

### Motivation

Today real app usually work on one of frameworks: React, Vue, Agular. All popular frontend framework base on two concepts: composition structures and idea of everything is a component.
We can use same ideas in tests for real app, and take benefits of this.

## Usage

You found examples of usage in [test folder](./cypress/integration/example)

### Create page and use prebuild elements

```typescript
new Todo(
  {},
  {
    items: new TodoItems(),
    newTodoField: new Input({ selector: "[data-test=new-todo]" }),
    clearCompletedButton: new Element({
      selector: "button.todo-button.clear-completed",
    }),
  }
);
```

### Create your own elements for business logic

```typescript
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
```

## Write test

```typescript
it("can check off an item as completed", () => {
  page._.items.setCompleted("Pay electric bill");
  page._.items.checkIsCompleted("Pay electric bill");

  page._.items.getIsCompleted("Pay electric bill").should("be.true");
});
```

## Documentation

### Element

Base composable unit for selecting and interactive with elements on page

#### props: selector

- type: string or function

```typescript
// find element by selector .className in parten if present
new Element({ selector: ".className" });

// use custom selector for global search
new Element({
  selector: () => cy.get(".className"),
});

// use parent for found element on page
new Element({
  selector: ({ parent }) => parent.el.find(".className"),
});
```

## Architecture

element class

- `get<X>` method should be return subject or original cy chain
- other method should be return insance on original element for save own chain

## State of development

### elements

- [x] Page
- [x] Element
- [x] Input
- [x] Form
- [x] Select
- [ ] Checkbox
- [ ] CheckboxGroup
- [ ] Radio
- [ ] RadioGroup
- [ ] Button
- [ ] Link

### Rewriting tests

- [ ] `actions.spec.js`
  - [ ] `.check()` - check a checkbox or radio elemen
  - [ ] `.uncheck()` - uncheck a checkbox elemen
  - [ ] `.trigger()` - trigger an event on a DOM elemen
- [ ] `connectors.spec.js`
- [ ] `files.spec.js`
- [x] `navigation.spec.js`
- [ ] `spies_stubs_clocks.spec.js`
- [ ] `viewport.spec.js`
- [ ] `aliasing.spec.js`
- [x] `cookies.spec.js`
- [ ] `local_storage.spec.js`
- [x] `location.spec.js`
- [ ] `network_requests.spec.js`
- [ ] `traversal.spec.js`
- [ ] `waiting.spec.js`
- [ ] `assertions.spec.js`
- [ ] `cypress_api.spec.js`
- [ ] `misc.spec.js`
- [ ] `querying.spec.js`
- [ ] `utilities.spec.js`
- [x] `window.spec.js`

### Cypress supported commands list

- `Element`:
  - [x] click
  - [x] dblclick
  - [x] get
  - [x] rightclick
  - [x] scrollIntoView
  - [x] should
  - [x] scrollTo
  - [x] first
  - [x] last
- `Page`:
  - [x] visit
  - [x] hash
  - [x] location
  - [x] url
  - [x] title
  - [x] document
  - [x] window
  - [x] reload
  - [x] clearCookies
  - [x] clearCookie
  - [x] getCookies
  - [x] getCookie
  - [x] setCookie
- `Form`:
  - [x] submit
- `Input`:
  - [x] blur
  - [x] clear
  - [x] focus
  - [x] type
- `Select`:
  - [x] select

Other:

- [ ] and
- [ ] as
- [ ] check
- [ ] children
- [ ] clearLocalStorage
- [ ] clock
- [ ] closest
- [ ] contains
- [ ] debug
- [ ] each
- [ ] end
- [ ] eq
- [ ] exec
- [ ] filter
- [ ] find
- [ ] fixture
- [ ] focused
- [ ] go
- [ ] hover
- [ ] intercept
- [ ] invoke
- [ ] its
- [ ] log
- [ ] next
- [ ] nextAll
- [ ] nextUntil
- [ ] not
- [ ] origin
- [ ] parent
- [ ] parents
- [ ] parentsUntil
- [ ] pause
- [ ] prev
- [ ] prevAll
- [ ] prevUntil
- [ ] readFile
- [ ] request
- [ ] root
- [ ] route
- [ ] screenshot
- [ ] selectFile
- [ ] server
- [ ] session
- [ ] shadow
- [ ] siblings
- [ ] spread
- [ ] spy
- [ ] stub
- [ ] task
- [ ] then
- [ ] tick
- [ ] trigger
- [ ] uncheck
- [ ] viewport
- [ ] wait
- [ ] within
- [ ] wrap
- [ ] writeFile
