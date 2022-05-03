# cypress-element

Composition api for [cypress](https://cypress.io)

`cypress-element` – Simple, Composable, Customisable, Reusable library for writing tests on Cypress

## Main concept

- **Simple**: Everything is an element
- **Composable**: element can be organized by composition of elements hierarchy
- **Customisable**: You can create own elements
- **Reusable**: You can save elements hierarchy

## Usage

### Element

Base composable unit for selecting and interactive with elements on page

## State of development

### elements

- [x] Page
- [x] Element
- [x] Input
- [x] Form
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
  - [ ] `.select()` - select an option in a `<select>` elemen
  - [ ] `.scrollIntoView()` - scroll an element into vie
  - [ ] `.trigger()` - trigger an event on a DOM elemen
- [ ] `connectors.spec.js`
- [ ] `files.spec.js`
- [ ] `navigation.spec.js`
- [ ] `spies_stubs_clocks.spec.js`
- [ ] `viewport.spec.js`
- [ ] `aliasing.spec.js`
- [ ] `cookies.spec.js`
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

- Page:
  - [x] visit
  - [x] hash
  - [x] location
  - [x] url
  - [x] title
  - [x] document
  - [x] window
- Element:
  - [x] click
  - [x] dblclick
  - [x] get
  - [x] rightclick
  - [x] scrollIntoView
  - [x] should
  - [x] scrollTo
- Input:
  - [x] blur
  - [x] clear
  - [x] focus
  - [x] type

Other:

- [ ] and
- [ ] as
- [ ] check
- [ ] children
- [ ] clearCookie
- [ ] clearCookies
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
- [ ] getCookie
- [ ] getCookies
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
- [ ] reload
- [ ] request
- [ ] root
- [ ] route
- [ ] screenshot
- [ ] select
- [ ] selectFile
- [ ] server
- [ ] session
- [ ] setCookie
- [ ] shadow
- [ ] siblings
- [ ] spread
- [ ] spy
- [ ] stub
- [ ] submit
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
