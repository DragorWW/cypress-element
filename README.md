# 🎁 cypress-element

![Test status](https://github.com/dragorww/cypress-element/actions/workflows/main.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![npm version](https://badge.fury.io/js/cypress-element.svg)](https://www.npmjs.com/package/cypress-element)

> `cypress-element` is under active development. You can help speed up the release of the stable version: try to use it in your projects and write about issues.

[Cypress](https://cypress.io) composition API for writing tests for a large application, focused on reusable, decomposition and beautiful typescript support.

![Screenshot](https://raw.githubusercontent.com/dragorww/cypress-element/main/docs/cypress-element-runtime.png)

### You should use `cypress-element` when:

- You feel problems with your page object.
- Your cypress tests now have many methods for interacting with custom elements.
- You are looking for a solution that will allow you to separate utility code from tests.
- You love Cypress and QA.

### Main concept:

- ✨ **Simple**: Everything is an element – one pattern for describing anything
- 🌳 **Composable**: element can be organized in nesting of elements hierarchy
- 🛠 **Customisable**: You can create your elements
- ⏳ **Reusable**: You can save elements hierarchy
- ✌ **Friendly**: TypeScript first, autocomplete, auto type

## Installing

```shell
npm i -D cypress-element
# or
yarn add -D cypress-element
```

## Usage

Then, in your test, you can write

```typescript
import el from "cypress-element";

const page = el("div", {
  button: el("button"),
});

it("test", () => {
  page.visit("/test.html");
  page.button.click();
});
```

## Additional information

Read more in [documentation](https://dragorww.github.io/cypress-element/#/docs);

### Motivation

Today real apps usually work on one of the frameworks: React, Vue, and Agular. All popular frontend frameworks are based on concepts: composition structures and the idea of everything is a component.
QA can use the same ideas in tests and take benefits of this.

`cypress-element` allows you not to think about the implementation. You can focus on business use-case checks

### Examples

You found examples of usage in [test folder](./cypress/integration/example)
