# Documentation

for stating usage `cypress-element` you should import `el` method

```typescript
import { el } from "cypress-element";
// or
import el from "cypress-element";
```

## define element

> `el` - base api for define any element, page and etc.

`cypress-element` provide shorthand syntax, when you want only selector api without method.

```typescript
el("<selector>");
```

full usage of `el()`

```typescript
el({
  el: "<selector>",
});
```

### Reusable defined elements

you can save element to variable

```typescript
const myButton = el({
  el: "button",
});
```

also you can create element generator as function, for example

```typescript
function Button({ type }: { type: "pimary" | "secondary" }) {
  return el({
    el: `button${type}`,
  });
}

const primaryButton = Button({ type: "pimary" });
const secondaryButton = Button({ type: "secondary" });
```

### Recommendation

In the future, you will save your time if you adhere to the following conventions

- for element: `camelCase` naming
- for generator of element: `PascalCase` or `UpperCamelCase`

## define children

`cypress-element` don't have limitation of rules for your app. You can describe composition of elements as you want.

```typescript

const myButton = el({
  el: "button",
});

const root = el({
  el: ".root",
  nested: el({
    el: ".nested",
    myButton: myButton,
  }),
});
```


## define method

by default `cypress-element` provide all method from `cy`

You can define a new methods or overwrite any of `cy`.

```typescript
const todoPage = el({
  // overwrite
  visit() {
    cy.visit("https://example.cypress.io/todo");
  },
  // new method
  setFilter(filter: "All" | "Active" | "Completed") {
    cy.get(".filters").contains(filter).click();
  },
});

// usage
todoPage.visit()
todoPage.setFilter("All");
```

### this
```typescript
const myButton = el({
  el: "button",
  testMethod() {
    // you can access to element methods
    this.testMethod2();
  },
  testMethod2() {
    // also yuo access to cy api
    this.click();
  },
});
```


## API

### `el()`

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
