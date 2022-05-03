# cypress-element
Composition api for [cypress](https://cypress.io)
===========

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

###  elements
- [X] Element
- [X] Input
- [X] Form
- [ ] Checkbox
- [ ] CheckboxGroup
- [ ] Radio
- [ ] RadioGroup
- [ ] Button
- [ ] Link

### Rewriting tests
- Actions:
- [x] `.type()` - type into a DOM element
- [x] `.focus()` - focus on a DOM element
- [x] `.blur()` - blur off a DOM element
- [x] `.clear()` - clears an input or textarea element
- [x] `.submit()` - submit a for
- [x] `.click()` - click on a DOM element
- [x] `.dblclick()` - double click on a DOM element
- [x] `.rightclick()` - right click on a DOM element
- [ ] `.check()` - check a checkbox or radio elemen
- [ ] `.uncheck()` - uncheck a checkbox elemen
- [ ] `.select()` - select an option in a <select> elemen
- [ ] `.scrollIntoView()` - scroll an element into vie
- [ ] `.trigger()` - trigger an event on a DOM elemen
- [ ] `cy.scrollTo()` - scroll the window or element to a position

### Cypress supported commands list
- [ ] and
- [ ] as
- [X] blur
- [ ] check
- [ ] children
- [X] clear
- [ ] clearCookie
- [ ] clearCookies
- [ ] clearLocalStorage
- [X] click
- [ ] clock
- [ ] closest
- [ ] contains
- [X] dblclick
- [ ] debug
- [ ] document
- [ ] each
- [ ] end
- [ ] eq
- [ ] exec
- [ ] filter
- [ ] find
- [ ] first
- [ ] fixture
- [X] focus
- [ ] focused
- [X] get
- [ ] getCookie
- [ ] getCookies
- [ ] go
- [ ] hash
- [ ] hover
- [ ] intercept
- [ ] invoke
- [ ] its
- [ ] last
- [ ] location
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
- [X] rightclick
- [ ] root
- [ ] route
- [ ] screenshot
- [ ] scrollIntoView
- [ ] scrollTo
- [ ] select
- [ ] selectFile
- [ ] server
- [ ] session
- [ ] setCookie
- [ ] shadow
- [ ] should
- [ ] siblings
- [ ] spread
- [ ] spy
- [ ] stub
- [ ] submit
- [ ] task
- [ ] then
- [ ] tick
- [ ] title
- [ ] trigger
- [X] type
- [ ] uncheck
- [ ] url
- [ ] viewport
- [ ] visit
- [ ] wait
- [ ] window
- [ ] within
- [ ] wrap
- [ ] writeFile