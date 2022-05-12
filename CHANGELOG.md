# CHANGELOG

# 0.2.0

- add: types for this in methods, now normally work autocomplete

## 0.1.0

- fix: `el()` incorrect calculate selector of children in deep nesting
- add: provide `Element.el` in public api

## 0.0.6

- fix: `el({child})` mutate original `child` and brok `child.click()` and other method

## 0.0.5

- fix: log display `name` of single element
- fix: `el.r` save your original string when you use expression `${var}`

## 0.0.4

- remove extending `cy` method by custom command
- remove `cypress-element/lib/commands` export
