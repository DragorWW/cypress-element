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

### Element

Base composable unit for selecting and interactive with elements on page

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
- [ ] first
- [ ] fixture
- [ ] focused
- [ ] go
- [ ] hover
- [ ] intercept
- [ ] invoke
- [ ] its
- [ ] last
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
