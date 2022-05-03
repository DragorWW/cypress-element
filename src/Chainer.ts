export interface Chainer<Subject> {
  // chai
  /**
   * Asserts that the target’s `type` is equal to the given string type.
   * Types are case insensitive. See the `type-detect` project page for info on the type detection algorithm:
   * https://github.com/chaijs/type-detect.
   * @example
   *    cy.wrap('foo').should('be.a', 'string')
   * @see http://chaijs.com/api/bdd/#method_a
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.a", type: string): Subject;
  /**
   * Asserts that the target is a number or a date greater than the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('be.above', 5)
   * @see http://chaijs.com/api/bdd/#method_above
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.above", value: number | Date): Subject;
  /**
   * Asserts that the target’s `type` is equal to the given string type.
   * Types are case insensitive. See the `type-detect` project page for info on the type detection algorithm:
   * https://github.com/chaijs/type-detect.
   * @example
   *    cy.wrap({ foo: 'bar' }).should('be.an', 'object')
   * @alias a
   * @see http://chaijs.com/api/bdd/#method_a
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.an", value: string): Subject;
  /**
   * Asserts that the target is a number or a `n` date greater than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('be.at.least', 5)
   * @see http://chaijs.com/api/bdd/#method_least
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.at.least", value: number | Date): Subject;
  /**
   * Asserts that the target is a number or a `n` date less than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(4).should('be.below', 5)
   * @see http://chaijs.com/api/bdd/#method_below
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.below", value: number): Subject;
  /**
   * Asserts that the target is an `arguments` object.
   * @example
   *    cy.wrap(arguments).should('be.arguments')
   * @see http://chaijs.com/api/bdd/#method_arguments
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.arguments"): Subject;
  /**
   * Asserts that the target is a number that’s within a given +/- `delta` range of the given number `expected`. However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(5.1).should('be.approximately', 5, 0.5)
   * @alias closeTo
   * @see http://chaijs.com/api/bdd/#method_closeto
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.approximately", value: number, delta: number): Subject;
  /**
   * Asserts that the target is a number that’s within a given +/- `delta` range of the given number `expected`. However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(5.1).should('be.closeTo', 5, 0.5)
   * @see http://chaijs.com/api/bdd/#method_closeto
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.closeTo", value: number, delta: number): Subject;
  /**
   * When the target is a string or array, .empty asserts that the target’s length property is strictly (===) equal to 0
   * @example
   *    cy.wrap([]).should('be.empty')
   *    cy.wrap('').should('be.empty')
   * @see http://chaijs.com/api/bdd/#method_empty
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.empty"): Subject;
  /**
   * Asserts that the target is an instance of the given `constructor`.
   * @example
   *    cy.wrap([1, 2]).should('be.instanceOf', Array)
   * @see http://chaijs.com/api/bdd/#method_instanceof
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.instanceOf", value: any): Subject;
  /**
   * Asserts that the target is strictly (`===`) equal to `false`.
   * @example
   *    cy.wrap(false).should('be.false')
   * @see http://chaijs.com/api/bdd/#method_false
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.false"): Subject;
  /**
   * Asserts that the target is a number or a date greater than the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('be.greaterThan', 5)
   * @alias above
   * @see http://chaijs.com/api/bdd/#method_above
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.greaterThan", value: number): Subject;
  /**
   * Asserts that the target is a number or a date greater than the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('be.gt', 5)
   * @alias above
   * @see http://chaijs.com/api/bdd/#method_above
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.gt", value: number): Subject;
  /**
   * Asserts that the target is a number or a `n` date greater than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('be.gte', 5)
   * @alias least
   * @see http://chaijs.com/api/bdd/#method_least
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.gte", value: number): Subject;
  /**
   * Asserts that the target is a number or a `n` date less than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(4).should('be.lessThan', 5)
   * @alias below
   * @see http://chaijs.com/api/bdd/#method_below
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.lessThan", value: number): Subject;
  /**
   * Asserts that the target is a number or a `n` date less than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(4).should('be.lt', 5)
   * @alias below
   * @see http://chaijs.com/api/bdd/#method_below
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.lt", value: number): Subject;
  /**
   * Asserts that the target is a number or a date less than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(4).should('be.lte', 5)
   * @alias most
   * @see http://chaijs.com/api/bdd/#method_most
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.lte", value: number): Subject;
  /**
   * Asserts that the target is loosely (`==`) equal to `true`. However, it's often best to assert that the target is strictly (`===`) or deeply equal to its expected value.
   * @example
   *    cy.wrap(1).should('be.ok')
   * @see http://chaijs.com/api/bdd/#method_ok
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.ok"): Subject;
  /**
   * Asserts that the target is strictly (`===`) equal to true.
   * @example
   *    cy.wrap(true).should('be.true')
   * @see http://chaijs.com/api/bdd/#method_true
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.true"): Subject;
  /**
   * Asserts that the target is strictly (`===`) equal to undefined.
   * @example
   *    cy.wrap(undefined).should('be.undefined')
   * @see http://chaijs.com/api/bdd/#method_undefined
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.undefined"): Subject;
  /**
   * Asserts that the target is strictly (`===`) equal to null.
   * @example
   *    cy.wrap(null).should('be.null')
   * @see http://chaijs.com/api/bdd/#method_null
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.null"): Subject;
  /**
   * Asserts that the target is strictly (`===`) equal to NaN.
   * @example
   *    cy.wrap(NaN).should('be.NaN')
   * @see http://chaijs.com/api/bdd/#method_null
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.NaN"): Subject;
  /**
   * Asserts that the target is a number or a date greater than or equal to the given number or date `start`, and less than or equal to the given number or date `finish` respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('be.within', 5, 10)
   * @see http://chaijs.com/api/bdd/#method_within
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.within", start: number, end: number): Subject;
  (chainer: "be.within", start: Date, end: Date): Subject;
  /**
   * When one argument is provided, `.change` asserts that the given function `subject` returns a different value when it's invoked before the target function compared to when it's invoked afterward.
   * However, it's often best to assert that `subject` is equal to its expected value.
   * @example
   *    let dots = ''
   *    function addDot() { dots += '.' }
   *    function getDots() { return dots }
   *    cy.wrap(addDot).should('change', getDots)
   * @see http://chaijs.com/api/bdd/#method_change
   * @see https://on.cypress.io/assertions
   */
  (chainer: "change", fn: (...args: any[]) => any): Subject;
  /**
   * When two arguments are provided, `.change` asserts that the value of the given object `subject`'s `prop` property is different before invoking the target function compared to afterward.
   * @example
   *    const myObj = { dots: '' }
   *    function addDot() { myObj.dots += '.' }
   *    cy.wrap(addDot).should('change', myObj, 'dots')
   * @see http://chaijs.com/api/bdd/#method_change
   * @see https://on.cypress.io/assertions
   */
  (chainer: "change", obj: object, prop: string): Subject;
  /**
   * When the target is a string, `.include` asserts that the given string val is a substring of the target.
   * @example
   *    cy.wrap('tester').should('contain', 'test')
   * @alias include
   * @see http://chaijs.com/api/bdd/#method_include
   * @see https://on.cypress.io/assertions
   */
  (chainer: "contain", value: any): Subject;
  /**
   * When one argument is provided, `.decrease` asserts that the given function `subject` returns a lesser number when it's invoked after invoking the target function compared to when it's invoked beforehand.
   * `.decrease` also causes all `.by` assertions that follow in the chain to assert how much lesser of a number is returned. it's often best to assert that the return value decreased by the expected amount, rather than asserting it decreased by any amount.
   * @example
   *    let val = 1
   *    function subtractTwo() { val -= 2 }
   *    function getVal() { return val }
   *    cy.wrap(subtractTwo).should('decrease', getVal)
   * @see http://chaijs.com/api/bdd/#method_decrease
   * @see https://on.cypress.io/assertions
   */
  (chainer: "decrease", fn: (...args: any[]) => any): Subject;
  /**
   * When two arguments are provided, `.decrease` asserts that the value of the given object `subject`'s `prop` property is lesser after invoking the target function compared to beforehand.
   * @example
   *    let val = 1
   *    function subtractTwo() { val -= 2 }
   *    function getVal() { return val }
   *    cy.wrap(subtractTwo).should('decrease', getVal)
   * @see http://chaijs.com/api/bdd/#method_decrease
   * @see https://on.cypress.io/assertions
   */
  (chainer: "decrease", obj: object, prop: string): Subject;
  /**
   * Causes all `.equal`, `.include`, `.members`, `.keys`, and `.property` assertions that follow in the chain to use deep equality instead of strict (`===`) equality. See the `deep-eql` project page for info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   * @example
   *    cy.wrap({ a: 1 }).should('deep.equal', { a: 1 })
   * @see http://chaijs.com/api/bdd/#method_deep
   * @see https://on.cypress.io/assertions
   */
  (chainer: "deep.equal", value: Subject): Subject;
  /**
   * Asserts that the target is not strictly (`===`) equal to either `null` or `undefined`. However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(1).should('exist')
   * @see http://chaijs.com/api/bdd/#method_exist
   * @see https://on.cypress.io/assertions
   */
  (chainer: "exist"): Subject;
  /**
   * Asserts that the target is strictly (`===`) equal to the given `val`.
   * @example
   *    cy.wrap(1).should('eq', 1)
   * @alias equal
   * @see http://chaijs.com/api/bdd/#method_equal
   * @see https://on.cypress.io/assertions
   */
  (chainer: "eq", value: any): Subject;
  /**
   * Asserts that the target is deeply equal to the given `obj`. See the `deep-eql` project page for info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   * @example
   *    cy.wrap({a: 1}).should('eql', {a: 1}).and('not.equal', {a: 1})
   * @see http://chaijs.com/api/bdd/#method_eql
   * @see https://on.cypress.io/assertions
   */
  (chainer: "eql", value: any): Subject;
  /**
   * Asserts that the target is strictly (`===`) equal to the given `val`.
   * @example
   *    cy.wrap(1).should('equal', 1)
   * @see http://chaijs.com/api/bdd/#method_equal
   * @see https://on.cypress.io/assertions
   */
  (chainer: "equal", value: any): Subject;
  /**
   * Causes all `.key` assertions that follow in the chain to require that the target have all of the given keys. This is the opposite of `.any`, which only requires that the target have at least one of the given keys.
   * @example
   *    cy.wrap({ a: 1, b: 2 }).should('have.all.key', 'a', 'b')
   * @see http://chaijs.com/api/bdd/#method_all
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.all.key", ...value: string[]): Subject;
  /**
   * Causes all `.key` assertions that follow in the chain to only require that the target have at least one of the given keys. This is the opposite of `.all`, which requires that the target have all of the given keys.
   * @example
   *    cy.wrap({ a: 1, b: 2 }).should('have.any.key', 'a')
   * @see http://chaijs.com/api/bdd/#method_any
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.any.key", ...value: string[]): Subject;
  /**
   * Causes all `.keys` assertions that follow in the chain to require that the target have all of the given keys. This is the opposite of `.any`, which only requires that the target have at least one of the given keys.
   * @example
   *    cy.wrap({ a: 1, b: 2 }).should('have.all.keys', 'a', 'b')
   * @see http://chaijs.com/api/bdd/#method_all
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "have.all.keys"
      | "have.keys"
      | "have.deep.keys"
      | "have.all.deep.keys",
    ...value: string[]
  ): Subject;
  /**
   * Causes all `.keys` assertions that follow in the chain to only require that the target have at least one of the given keys. This is the opposite of `.all`, which requires that the target have all of the given keys.
   * @example
   *    cy.wrap({ a: 1, b: 2 }).should('have.any.keys', 'a')
   * @see http://chaijs.com/api/bdd/#method_any
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.any.keys" | "include.any.keys", ...value: string[]): Subject;
  /**
   * Causes all `.keys` assertions that follow in the chain to require the target to be a superset of the expected set, rather than an identical set.
   * @example
   *    cy.wrap({ a: 1, b: 2 }).should('include.all.keys', 'a', 'b')
   * @see http://chaijs.com/api/bdd/#method_keys
   * @see https://on.cypress.io/assertions
   */
  (chainer: "include.all.keys", ...value: string[]): Subject;
  /**
   * Asserts that the target has a property with the given key `name`. See the `deep-eql` project page for info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   * @example
   *    cy.wrap({ x: {a: 1 }}).should('have.deep.property', 'x', { a: 1 })
   * @see http://chaijs.com/api/bdd/#method_property
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.deep.property", value: string, obj: object): Subject;
  /**
   * Asserts that the target’s `length` property is equal to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.length', 3)
   *    cy.wrap('foo').should('have.length', 3)
   * @alias lengthOf
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.length" | "have.lengthOf", value: number): Subject;
  /**
   * Asserts that the target’s `length` property is greater than to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.length.greaterThan', 2)
   *    cy.wrap('foo').should('have.length.greaterThan', 2)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "have.length.greaterThan" | "have.lengthOf.greaterThan",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is greater than to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.length.gt', 2)
   *    cy.wrap('foo').should('have.length.gt', 2)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "have.length.gt"
      | "have.lengthOf.gt"
      | "have.length.above"
      | "have.lengthOf.above",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is greater than or equal to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.length.gte', 2)
   *    cy.wrap('foo').should('have.length.gte', 2)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "have.length.gte"
      | "have.lengthOf.gte"
      | "have.length.at.least"
      | "have.lengthOf.at.least",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is less than to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.length.lessThan', 4)
   *    cy.wrap('foo').should('have.length.lessThan', 4)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "have.length.lessThan" | "have.lengthOf.lessThan",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is less than to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.length.lt', 4)
   *    cy.wrap('foo').should('have.length.lt', 4)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "have.length.lt"
      | "have.lengthOf.lt"
      | "have.length.below"
      | "have.lengthOf.below",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is less than or equal to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.length.lte', 4)
   *    cy.wrap('foo').should('have.length.lte', 4)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "have.length.lte"
      | "have.lengthOf.lte"
      | "have.length.at.most"
      | "have.lengthOf.at.most",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is within `start` and `finish`.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.length.within', 1, 5)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "have.length.within" | "have.lengthOf.within",
    start: number,
    finish: number
  ): Subject;
  /**
   * Asserts that the target array has the same members as the given array `set`.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.members', [2, 1, 3])
   * @see http://chaijs.com/api/bdd/#method_members
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.members" | "have.deep.members", values: any[]): Subject;
  /**
   * Asserts that the target array has the same members as the given array where order matters.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.ordered.members', [1, 2, 3])
   * @see http://chaijs.com/api/bdd/#method_members
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.ordered.members", values: any[]): Subject;
  /**
   * Causes all `.property` and `.include` assertions that follow in the chain to ignore inherited properties.
   * @example
   *    Object.prototype.b = 2
   *    cy.wrap({ a: 1 }).should('have.property', 'a').and('not.have.ownProperty', 'b')
   * @see http://chaijs.com/api/bdd/#method_ownproperty
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.ownProperty", property: string): Subject;
  /**
   * Asserts that the target has a property with the given key `name`.
   * @example
   *    cy.wrap({ a: 1 }).should('have.property', 'a')
   *    cy.wrap({ a: 1 }).should('have.property', 'a', 1)
   * @see http://chaijs.com/api/bdd/#method_property
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "have.property"
      | "have.nested.property"
      | "have.own.property"
      | "have.a.property"
      | "have.deep.property"
      | "have.deep.own.property"
      | "have.deep.nested.property",
    property: string,
    value?: any
  ): Subject;
  /**
   * Asserts that the target has its own property descriptor with the given key name.
   * @example
   *    cy.wrap({a: 1}).should('have.ownPropertyDescriptor', 'a', { value: 1 })
   * @see http://chaijs.com/api/bdd/#method_ownpropertydescriptor
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "have.ownPropertyDescriptor" | "haveOwnPropertyDescriptor",
    name: string,
    descriptor?: PropertyDescriptor
  ): Subject;
  /**
   * Asserts that the target string contains the given substring `str`.
   * @example
   *    cy.wrap('foobar').should('have.string', 'bar')
   * @see http://chaijs.com/api/bdd/#method_string
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.string", match: string | RegExp): Subject;
  /**
   * When the target is a string, `.include` asserts that the given string `val` is a substring of the target.
   * @example
   *    cy.wrap('foobar').should('include', 'foo')
   * @see http://chaijs.com/api/bdd/#method_include
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "include"
      | "deep.include"
      | "nested.include"
      | "own.include"
      | "deep.own.include"
      | "deep.nested.include",
    value: any
  ): Subject;
  /**
   * When the target is a string, `.include` asserts that the given string `val` is a substring of the target.
   * @example
   *    cy.wrap([1, 2, 3]).should('include.members', [1, 2])
   * @see http://chaijs.com/api/bdd/#method_members
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "include.members"
      | "include.ordered.members"
      | "include.deep.ordered.members",
    value: any[]
  ): Subject;
  /**
   * When one argument is provided, `.increase` asserts that the given function `subject` returns a greater number when it's
   * invoked after invoking the target function compared to when it's invoked beforehand.
   * `.increase` also causes all `.by` assertions that follow in the chain to assert how much greater of a number is returned.
   * it's often best to assert that the return value increased by the expected amount, rather than asserting it increased by any amount.
   *
   * When two arguments are provided, `.increase` asserts that the value of the given object `subject`’s `prop` property is greater after
   * invoking the target function compared to beforehand.
   *
   * @example
   *    let val = 1
   *    function addTwo() { val += 2 }
   *    function getVal() { return val }
   *    cy.wrap(addTwo).should('increase', getVal)
   *
   *    const myObj = { val: 1 }
   *    function addTwo() { myObj.val += 2 }
   *    cy.wrap(addTwo).should('increase', myObj, 'val')
   * @see http://chaijs.com/api/bdd/#method_increase
   * @see https://on.cypress.io/assertions
   */
  (chainer: "increase", value: object, property?: string): Subject;
  /**
   * Asserts that the target matches the given regular expression `re`.
   * @example
   *    cy.wrap('foobar').should('match', /^foo/)
   * @see http://chaijs.com/api/bdd/#method_match
   * @see https://on.cypress.io/assertions
   */
  (chainer: "match", value: RegExp): Subject;
  /**
   * When the target is a non-function object, `.respondTo` asserts that the target has a `method` with the given name method. The method can be own or inherited, and it can be enumerable or non-enumerable.
   * @example
   *    class Cat {
   *      meow() {}
   *    }
   *    cy.wrap(new Cat()).should('respondTo', 'meow')
   * @see http://chaijs.com/api/bdd/#method_respondto
   * @see https://on.cypress.io/assertions
   */
  (chainer: "respondTo", value: string): Subject;
  /**
   * Invokes the given `matcher` function with the target being passed as the first argument, and asserts that the value returned is truthy.
   * @example
   *    cy.wrap(1).should('satisfy', (num) => num > 0)
   * @see http://chaijs.com/api/bdd/#method_satisfy
   * @see https://on.cypress.io/assertions
   */
  (chainer: "satisfy", fn: (val: any) => boolean): Subject;
  /**
   * When no arguments are provided, `.throw` invokes the target function and asserts that an error is thrown.
   * When one argument is provided, and it's a string, `.throw` invokes the target function and asserts that an error is thrown with a message that contains that string.
   * @example
   *    function badFn() { throw new TypeError('Illegal salmon!') }
   *    cy.wrap(badFn).should('throw')
   *    cy.wrap(badFn).should('throw', 'salmon')
   *    cy.wrap(badFn).should('throw', /salmon/)
   * @see http://chaijs.com/api/bdd/#method_throw
   * @see https://on.cypress.io/assertions
   */
  (chainer: "throw", value?: string | RegExp): Subject;
  /**
   * When no arguments are provided, `.throw` invokes the target function and asserts that an error is thrown.
   * When one argument is provided, and it's a string, `.throw` invokes the target function and asserts that an error is thrown with a message that contains that string.
   * @example
   *    function badFn() { throw new TypeError('Illegal salmon!') }
   *    cy.wrap(badFn).should('throw')
   *    cy.wrap(badFn).should('throw', 'salmon')
   *    cy.wrap(badFn).should('throw', /salmon/)
   * @see http://chaijs.com/api/bdd/#method_throw
   * @see https://on.cypress.io/assertions
   */
  // tslint:disable-next-line ban-types
  (
    chainer: "throw",
    error: Error | Function,
    expected?: string | RegExp
  ): Subject;
  /**
   * Asserts that the target is a member of the given array list.
   * @example
   *    cy.wrap(1).should('be.oneOf', [1, 2, 3])
   * @see http://chaijs.com/api/bdd/#method_oneof
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.oneOf", list: ReadonlyArray<any>): Subject;
  /**
   * Asserts that the target is extensible, which means that new properties can be added to it.
   * @example
   *    cy.wrap({a: 1}).should('be.extensible')
   * @see http://chaijs.com/api/bdd/#method_extensible
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.extensible"): Subject;
  /**
   * Asserts that the target is sealed, which means that new properties can’t be added to it, and its existing properties can’t be reconfigured or deleted.
   * @example
   *    let sealedObject = Object.seal({})
   *    let frozenObject = Object.freeze({})
   *    cy.wrap(sealedObject).should('be.sealed')
   *    cy.wrap(frozenObject).should('be.sealed')
   * @see http://chaijs.com/api/bdd/#method_sealed
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.sealed"): Subject;
  /**
   * Asserts that the target is frozen, which means that new properties can’t be added to it, and its existing properties can’t be reassigned to different values, reconfigured, or deleted.
   * @example
   *    let frozenObject = Object.freeze({})
   *    cy.wrap(frozenObject).should('be.frozen')
   * @see http://chaijs.com/api/bdd/#method_frozen
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.frozen"): Subject;
  /**
   * Asserts that the target is a number, and isn’t `NaN` or positive/negative `Infinity`.
   * @example
   *    cy.wrap(1).should('be.finite')
   * @see http://chaijs.com/api/bdd/#method_finite
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.finite"): Subject;

  // chai.not
  /**
   * Asserts that the target’s `type` is not equal to the given string type.
   * Types are case insensitive. See the `type-detect` project page for info on the type detection algorithm:
   * https://github.com/chaijs/type-detect.
   * @example
   *    cy.wrap('foo').should('not.be.a', 'number')
   * @see http://chaijs.com/api/bdd/#method_a
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.a", type: string): Subject;
  /**
   * Asserts that the target is a not number or not a date greater than the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('not.be.above', 10)
   * @see http://chaijs.com/api/bdd/#method_above
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.above", value: number | Date): Subject;
  /**
   * Asserts that the target’s `type` is not equal to the given string type.
   * Types are case insensitive. See the `type-detect` project page for info on the type detection algorithm:
   * https://github.com/chaijs/type-detect.
   * @example
   *    cy.wrap('foo').should('not.be.an', 'object')
   * @alias a
   * @see http://chaijs.com/api/bdd/#method_a
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.an", value: string): Subject;
  /**
   * Asserts that the target is not a number or not a `n` date greater than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('not.be.at.least', 10)
   * @see http://chaijs.com/api/bdd/#method_least
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.at.least", value: number | Date): Subject;
  /**
   * Asserts that the target is not a number or not a `n` date less than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(4).should('not.be.below', 1)
   * @see http://chaijs.com/api/bdd/#method_below
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.below", value: number): Subject;
  /**
   * Asserts that the target is not an `arguments` object.
   * @example
   *    cy.wrap(1).should('not.be.arguments')
   * @see http://chaijs.com/api/bdd/#method_arguments
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.arguments"): Subject;
  /**
   * Asserts that the target is a not number that’s within a given +/- `delta` range of the given number `expected`. However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(5.1).should('not.be.approximately', 6, 0.5)
   * @alias closeTo
   * @see http://chaijs.com/api/bdd/#method_closeto
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.approximately", value: number, delta: number): Subject;
  /**
   * Asserts that the target is not a number that’s within a given +/- `delta` range of the given number `expected`. However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(5.1).should('not.be.closeTo', 6, 0.5)
   * @see http://chaijs.com/api/bdd/#method_closeto
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.closeTo", value: number, delta: number): Subject;
  /**
   * When the target is a not string or array, .empty asserts that the target’s length property is strictly (===) equal to 0
   * @example
   *    cy.wrap([1]).should('not.be.empty')
   *    cy.wrap('foo').should('not.be.empty')
   * @see http://chaijs.com/api/bdd/#method_empty
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.empty"): Subject;
  /**
   * Asserts that the target is not an instance of the given `constructor`.
   * @example
   *    cy.wrap([1, 2]).should('not.be.instanceOf', String)
   * @see http://chaijs.com/api/bdd/#method_instanceof
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.instanceOf", value: any): Subject;
  /**
   * Asserts that the target is not strictly (`===`) equal to `false`.
   * @example
   *    cy.wrap(true).should('not.be.false')
   * @see http://chaijs.com/api/bdd/#method_false
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.false"): Subject;
  /**
   * Asserts that the target is a not number or a date greater than the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('be.greaterThan', 7)
   * @alias above
   * @see http://chaijs.com/api/bdd/#method_above
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.greaterThan", value: number): Subject;
  /**
   * Asserts that the target is a not number or a date greater than the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('not.be.gt', 7)
   * @alias above
   * @see http://chaijs.com/api/bdd/#method_above
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.gt", value: number): Subject;
  /**
   * Asserts that the target is a not number or a `n` date greater than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(6).should('not.be.gte', 7)
   * @alias least
   * @see http://chaijs.com/api/bdd/#method_least
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.gte", value: number): Subject;
  /**
   * Asserts that the target is not a number or a `n` date less than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(4).should('not.be.lessThan', 3)
   * @alias below
   * @see http://chaijs.com/api/bdd/#method_below
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.lessThan", value: number): Subject;
  /**
   * Asserts that the target is not a number or a `n` date less than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(4).should('not.be.lt', 3)
   * @alias below
   * @see http://chaijs.com/api/bdd/#method_below
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.lt", value: number): Subject;
  /**
   * Asserts that the target is not a number or a date less than or equal to the given number or date n respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(4).should('not.be.lte', 3)
   * @alias most
   * @see http://chaijs.com/api/bdd/#method_most
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.lte", value: number): Subject;
  /**
   * Asserts that the target is not loosely (`==`) equal to `true`. However, it's often best to assert that the target is strictly (`===`) or deeply equal to its expected value.
   * @example
   *    cy.wrap(0).should('not.be.ok')
   * @see http://chaijs.com/api/bdd/#method_ok
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.ok"): Subject;
  /**
   * Asserts that the target is not strictly (`===`) equal to true.
   * @example
   *    cy.wrap(false).should('not.be.true')
   * @see http://chaijs.com/api/bdd/#method_true
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.true"): Subject;
  /**
   * Asserts that the target is not strictly (`===`) equal to undefined.
   * @example
   *    cy.wrap(true).should('not.be.undefined')
   * @see http://chaijs.com/api/bdd/#method_undefined
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.undefined"): Subject;
  /**
   * Asserts that the target is strictly (`===`) equal to null.
   * @example
   *    cy.wrap(null).should('not.be.null')
   * @see http://chaijs.com/api/bdd/#method_null
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.null"): Subject;
  /**
   * Asserts that the target is strictly (`===`) equal to NaN.
   * @example
   *    cy.wrap(NaN).should('not.be.NaN')
   * @see http://chaijs.com/api/bdd/#method_nan
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.NaN"): Subject;
  /**
   * Asserts that the target is not a number or a date greater than or equal to the given number or date `start`, and less than or equal to the given number or date `finish` respectively.
   * However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(3).should('not.be.within', 5, 10)
   * @see http://chaijs.com/api/bdd/#method_within
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.within", start: number, end: number): Subject;
  (chainer: "not.be.within", start: Date, end: Date): Subject;
  /**
   * When one argument is provided, `.change` asserts that the given function `subject` returns a different value when it's invoked before the target function compared to when it's invoked afterward.
   * However, it's often best to assert that `subject` is equal to its expected value.
   * @example
   *    let dots = ''
   *    function addDot() { dots += '.' }
   *    function getDots() { return dots }
   *    cy.wrap(() => {}).should('not.change', getDots)
   * @see http://chaijs.com/api/bdd/#method_change
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.change", fn: (...args: any[]) => any): Subject;
  /**
   * When two arguments are provided, `.change` asserts that the value of the given object `subject`'s `prop` property is different before invoking the target function compared to afterward.
   * @example
   *    const myObj = { dots: '' }
   *    function addDot() { myObj.dots += '.' }
   *    cy.wrap(() => {}).should('not.change', myObj, 'dots')
   * @see http://chaijs.com/api/bdd/#method_change
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.change", obj: object, prop: string): Subject;
  /**
   * When the target is a string, `.include` asserts that the given string val is a substring of the target.
   * @example
   *    cy.wrap('tester').should('not.contain', 'foo')
   * @alias include
   * @see http://chaijs.com/api/bdd/#method_include
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.contain", value: any): Subject;
  /**
   * When one argument is provided, `.decrease` asserts that the given function `subject` does not returns a lesser number when it's invoked after invoking the target function compared to when it's invoked beforehand.
   * `.decrease` also causes all `.by` assertions that follow in the chain to assert how much lesser of a number is returned. it's often best to assert that the return value decreased by the expected amount, rather than asserting it decreased by any amount.
   * @example
   *    let val = 1
   *    function subtractTwo() { val -= 2 }
   *    function getVal() { return val }
   *    cy.wrap(() => {}).should('not.decrease', getVal)
   * @see http://chaijs.com/api/bdd/#method_decrease
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.decrease", fn: (...args: any[]) => any): Subject;
  /**
   * When two arguments are provided, `.decrease` asserts that the value of the given object `subject`'s `prop` property is not lesser after invoking the target function compared to beforehand.
   * @example
   *    const myObj = { val: 1 }
   *    function subtractTwo() { myObj.val -= 2 }
   *    cy.wrap(() => {}).should('not.decrease', myObj, 'val')
   * @see http://chaijs.com/api/bdd/#method_decrease
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.decrease", obj: object, prop: string): Subject;
  /**
   * Causes all `.equal`, `.include`, `.members`, `.keys`, and `.property` assertions that follow in the chain to not use deep equality instead of strict (`===`) equality. See the `deep-eql` project page for info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   * @example
   *    cy.wrap({ a: 1 }).should('not.deep.equal', { b: 1 })
   * @see http://chaijs.com/api/bdd/#method_deep
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.deep.equal", value: Subject): Subject;
  /**
   * Asserts that the target is not strictly (`===`) equal to either `null` or `undefined`. However, it's often best to assert that the target is equal to its expected value.
   * @example
   *    cy.wrap(null).should('not.exist')
   * @see http://chaijs.com/api/bdd/#method_exist
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.exist"): Subject;
  /**
   * Asserts that the target is not strictly (`===`) equal to the given `val`.
   * @example
   *    cy.wrap(1).should('not.eq', 2)
   * @alias equal
   * @see http://chaijs.com/api/bdd/#method_equal
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.eq", value: any): Subject;
  /**
   * Asserts that the target is not deeply equal to the given `obj`. See the `deep-eql` project page for info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   * @example
   *    cy.wrap({a: 1}).should('not.eql', {c: 1}).and('not.equal', {a: 1})
   * @see http://chaijs.com/api/bdd/#method_eql
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.eql", value: any): Subject;
  /**
   * Asserts that the target is not strictly (`===`) equal to the given `val`.
   * @example
   *    cy.wrap(1).should('not.equal', 2)
   * @see http://chaijs.com/api/bdd/#method_equal
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.equal", value: any): Subject;
  /**
   * Causes all `.keys` assertions that follow in the chain to not require that the target have all of the given keys. This is the opposite of `.any`, which only requires that the target have at least one of the given keys.
   * @example
   *    cy.wrap({ a: 1, b: 2 }).should('not.have.all.keys', 'c', 'd')
   * @see http://chaijs.com/api/bdd/#method_all
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.have.all.keys"
      | "not.have.keys"
      | "not.have.deep.keys"
      | "not.have.all.deep.keys",
    ...value: string[]
  ): Subject;
  /**
   * Causes all `.keys` assertions that follow in the chain to only require that the target not have at least one of the given keys. This is the opposite of `.all`, which requires that the target have all of the given keys.
   * @example
   *    cy.wrap({ a: 1, b: 2 }).should('not.have.any.keys', 'c')
   * @see http://chaijs.com/api/bdd/#method_any
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.have.any.keys" | "not.include.any.keys",
    ...value: string[]
  ): Subject;
  /**
   * Asserts that the target does not have a property with the given key `name`. See the `deep-eql` project page for info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   * @example
   *    cy.wrap({ x: {a: 1 }}).should('not.have.deep.property', 'y', { a: 1 })
   * @see http://chaijs.com/api/bdd/#method_property
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.deep.property", value: string, obj: object): Subject;
  /**
   * Asserts that the target’s `length` property is not equal to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('not.have.length', 2)
   * cy.wrap('foo').should('not.have.length', 2)
   * @alias lengthOf
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.length" | "not.have.lengthOf", value: number): Subject;
  /**
   * Asserts that the target’s `length` property is not greater than to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('not.have.length.greaterThan', 4)
   *    cy.wrap('foo').should('not.have.length.greaterThan', 4)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.have.length.greaterThan" | "not.have.lengthOf.greaterThan",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is not greater than to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('not.have.length.gt', 4)
   *    cy.wrap('foo').should('not.have.length.gt', 4)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.have.length.gt"
      | "not.have.lengthOf.gt"
      | "not.have.length.above"
      | "not.have.lengthOf.above",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is not greater than or equal to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('not.have.length.gte', 4)
   *    cy.wrap('foo').should('not.have.length.gte', 4)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.have.length.gte"
      | "not.have.lengthOf.gte"
      | "not.have.length.at.least"
      | "not.have.lengthOf.at.least",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is less than to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('have.length.lessThan', 2)
   *    cy.wrap('foo').should('have.length.lessThan', 2)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.have.length.lessThan" | "not.have.lengthOf.lessThan",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is not less than to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('not.have.length.lt', 2)
   *    cy.wrap('foo').should('not.have.length.lt', 2)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.have.length.lt"
      | "not.have.lengthOf.lt"
      | "not.have.length.below"
      | "not.have.lengthOf.below",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is not less than or equal to the given number `n`.
   * @example
   *    cy.wrap([1, 2, 3]).should('not.have.length.lte', 2)
   *    cy.wrap('foo').should('not.have.length.lte', 2)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.have.length.lte"
      | "not.have.lengthOf.lte"
      | "not.have.length.at.most"
      | "not.have.lengthOf.at.most",
    value: number
  ): Subject;
  /**
   * Asserts that the target’s `length` property is within `start` and `finish`.
   * @example
   *    cy.wrap([1, 2, 3]).should('not.have.length.within', 6, 12)
   * @see http://chaijs.com/api/bdd/#method_lengthof
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.have.length.within" | "not.have.lengthOf.within",
    start: number,
    finish: number
  ): Subject;
  /**
   * Asserts that the target array does not have the same members as the given array `set`.
   * @example
   *    cy.wrap([1, 2, 3]).should('not.have.members', [4, 5, 6])
   * @see http://chaijs.com/api/bdd/#method_members
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.have.members" | "not.have.deep.members",
    values: any[]
  ): Subject;
  /**
   * Asserts that the target array does not have the same members as the given array where order matters.
   * @example
   *    cy.wrap([1, 2, 3]).should('not. have.ordered.members', [4, 5, 6])
   * @see http://chaijs.com/api/bdd/#method_members
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.ordered.members", values: any[]): Subject;
  /**
   * Causes all `.property` and `.include` assertions that follow in the chain to ignore inherited properties.
   * @example
   *    Object.prototype.b = 2
   *    cy.wrap({ a: 1 }).should('have.property', 'a').and('not.have.ownProperty', 'b')
   * @see http://chaijs.com/api/bdd/#method_ownproperty
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.ownProperty", property: string): Subject;
  /**
   * Asserts that the target has a property with the given key `name`.
   * @example
   *    cy.wrap({ a: 1 }).should('not.have.property', 'b')
   *    cy.wrap({ a: 1 }).should('not.have.property', 'b', 1)
   * @see http://chaijs.com/api/bdd/#method_property
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.have.property"
      | "not.have.nested.property"
      | "not.have.own.property"
      | "not.have.a.property"
      | "not.have.deep.property"
      | "not.have.deep.own.property"
      | "not.have.deep.nested.property",
    property: string,
    value?: any
  ): Subject;
  /**
   * Asserts that the target has its own property descriptor with the given key name.
   * @example
   *    cy.wrap({a: 1}).should('not.have.ownPropertyDescriptor', 'a', { value: 2 })
   * @see http://chaijs.com/api/bdd/#method_ownpropertydescriptor
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.have.ownPropertyDescriptor" | "not.haveOwnPropertyDescriptor",
    name: string,
    descriptor?: PropertyDescriptor
  ): Subject;
  /**
   * Asserts that the target string does not contains the given substring `str`.
   * @example
   *    cy.wrap('foobar').should('not.have.string', 'baz')
   * @see http://chaijs.com/api/bdd/#method_string
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.string", match: string | RegExp): Subject;
  /**
   * When the target is a string, `.include` asserts that the given string `val` is not a substring of the target.
   * @example
   *    cy.wrap('foobar').should('not.include', 'baz')
   * @see http://chaijs.com/api/bdd/#method_include
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.include"
      | "not.deep.include"
      | "not.nested.include"
      | "not.own.include"
      | "not.deep.own.include"
      | "not.deep.nested.include",
    value: any
  ): Subject;
  /**
   * When the target is a string, `.include` asserts that the given string `val` is not a substring of the target.
   * @example
   *    cy.wrap([1, 2, 3]).should('not.include.members', [4, 5])
   * @see http://chaijs.com/api/bdd/#method_members
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.include.members"
      | "not.include.ordered.members"
      | "not.include.deep.ordered.members",
    value: any[]
  ): Subject;
  /**
   * When one argument is provided, `.increase` asserts that the given function `subject` returns a greater number when it's
   * invoked after invoking the target function compared to when it's invoked beforehand.
   * `.increase` also causes all `.by` assertions that follow in the chain to assert how much greater of a number is returned.
   * it's often best to assert that the return value increased by the expected amount, rather than asserting it increased by any amount.
   *
   * When two arguments are provided, `.increase` asserts that the value of the given object `subject`’s `prop` property is greater after
   * invoking the target function compared to beforehand.
   *
   * @example
   *    let val = 1
   *    function addTwo() { val += 2 }
   *    function getVal() { return val }
   *    cy.wrap(() => {}).should('not.increase', getVal)
   *
   *    const myObj = { val: 1 }
   *    function addTwo() { myObj.val += 2 }
   *    cy.wrap(addTwo).should('increase', myObj, 'val')
   * @see http://chaijs.com/api/bdd/#method_increase
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.increase", value: object, property?: string): Subject;
  /**
   * Asserts that the target does not match the given regular expression `re`.
   * @example
   *    cy.wrap('foobar').should('not.match', /baz$/)
   * @see http://chaijs.com/api/bdd/#method_match
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.match", value: RegExp): Subject;
  /**
   * When the target is a non-function object, `.respondTo` asserts that the target does not have a `method` with the given name method. The method can be own or inherited, and it can be enumerable or non-enumerable.
   * @example
   *    class Cat {
   *      meow() {}
   *    }
   *    cy.wrap(new Cat()).should('not.respondTo', 'bark')
   * @see http://chaijs.com/api/bdd/#method_respondto
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.respondTo", value: string): Subject;
  /**
   * Invokes the given `matcher` function with the target being passed as the first argument, and asserts that the value returned is falsy.
   * @example
   *    cy.wrap(1).should('not.satisfy', (num) => num < 0)
   * @see http://chaijs.com/api/bdd/#method_satisfy
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.satisfy", fn: (val: any) => boolean): Subject;
  /**
   * When no arguments are provided, `.throw` invokes the target function and asserts that no error is thrown.
   * When one argument is provided, and it's a string, `.throw` invokes the target function and asserts that no error is thrown with a message that contains that string.
   * @example
   *    function badFn() { console.log('Illegal salmon!') }
   *    cy.wrap(badFn).should('not.throw')
   *    cy.wrap(badFn).should('not.throw', 'salmon')
   *    cy.wrap(badFn).should('not.throw', /salmon/)
   * @see http://chaijs.com/api/bdd/#method_throw
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.throw", value?: string | RegExp): Subject;
  /**
   * When no arguments are provided, `.throw` invokes the target function and asserts that no error is thrown.
   * When one argument is provided, and it's a string, `.throw` invokes the target function and asserts that no error is thrown with a message that contains that string.
   * @example
   *    function badFn() { console.log('Illegal salmon!') }
   *    cy.wrap(badFn).should('not.throw')
   *    cy.wrap(badFn).should('not.throw', 'salmon')
   *    cy.wrap(badFn).should('not.throw', /salmon/)
   * @see http://chaijs.com/api/bdd/#method_throw
   * @see https://on.cypress.io/assertions
   */
  // tslint:disable-next-line ban-types
  (
    chainer: "not.throw",
    error: Error | Function,
    expected?: string | RegExp
  ): Subject;
  /**
   * Asserts that the target is a member of the given array list.
   * @example
   *    cy.wrap(42).should('not.be.oneOf', [1, 2, 3])
   * @see http://chaijs.com/api/bdd/#method_oneof
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.oneOf", list: ReadonlyArray<any>): Subject;
  /**
   * Asserts that the target is extensible, which means that new properties can be added to it.
   * @example
   *    let o = Object.seal({})
   *    cy.wrap(o).should('not.be.extensible')
   * @see http://chaijs.com/api/bdd/#method_extensible
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.extensible"): Subject;
  /**
   * Asserts that the target is sealed, which means that new properties can’t be added to it, and its existing properties can’t be reconfigured or deleted.
   * @example
   *    cy.wrap({a: 1}).should('be.sealed')
   *    cy.wrap({a: 1}).should('be.sealed')
   * @see http://chaijs.com/api/bdd/#method_sealed
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.sealed"): Subject;
  /**
   * Asserts that the target is frozen, which means that new properties can’t be added to it, and its existing properties can’t be reassigned to different values, reconfigured, or deleted.
   * @example
   *    cy.wrap({a: 1}).should('not.be.frozen')
   * @see http://chaijs.com/api/bdd/#method_frozen
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.frozen"): Subject;
  /**
   * Asserts that the target is a number, and isn’t `NaN` or positive/negative `Infinity`.
   * @example
   *    cy.wrap(NaN).should('not.be.finite')
   *    cy.wrap(Infinity).should('not.be.finite')
   * @see http://chaijs.com/api/bdd/#method_finite
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.finite"): Subject;

  // sinon-chai
  /**
   * Assert spy/stub was called the `new` operator.
   * Beware that this is inferred based on the value of the this object and the spy function’s prototype, so it may give false positives if you actively return the right kind of object.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwithnew
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.always.calledWithNew" | "always.have.been.calledWithNew"
  ): Subject;
  /**
   * Assert if spy was always called with matching arguments (and possibly others).
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwayscalledwithmatcharg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.always.calledWithMatch" | "always.have.been.calledWithMatch",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy always returned the provided value.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwaysreturnedobj
   * @see https://on.cypress.io/assertions
   */
  (chainer: "always.returned" | "have.always.returned", value: any): Subject;
  /**
   * `true` if the spy was called at least once
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalled
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.called" | "have.been.called"): Subject;
  /**
   * Assert spy was called after `anotherSpy`
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledafteranotherspy
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.calledAfter" | "have.been.calledAfter",
    spy: sinon.SinonSpy
  ): Subject;
  /**
   * Assert spy was called before `anotherSpy`
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledbeforeanotherspy
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.calledBefore" | "have.been.calledBefore",
    spy: sinon.SinonSpy
  ): Subject;
  /**
   * Assert spy was called at least once with `obj` as `this`. `calledOn` also accepts a matcher (see [matchers](http://sinonjs.org/releases/v4.1.3/spies/#matchers)).
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledonobj
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.calledOn" | "have.been.calledOn", context: any): Subject;
  /**
   * Assert spy was called exactly once
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledonce
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.calledOnce" | "have.been.calledOnce"): Subject;
  /**
   * Assert spy was called exactly three times
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledthrice
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.calledThrice" | "have.been.calledThrice"): Subject;
  /**
   * Assert spy was called exactly twice
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledtwice
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.calledTwice" | "have.been.calledTwice"): Subject;
  /**
   * Assert spy was called at least once with the provided arguments and no others.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwithexactlyarg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.calledWithExactly" | "have.been.calledWithExactly",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy was called with matching arguments (and possibly others).
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwithmatcharg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.calledWithMatch" | "have.been.calledWithMatch",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy/stub was called the `new` operator.
   * Beware that this is inferred based on the value of the this object and the spy function’s prototype, so it may give false positives if you actively return the right kind of object.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwithnew
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.calledWithNew" | "have.been.calledWithNew"): Subject;
  /**
   * Assert spy always threw an exception.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwaysthrew
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "have.always.thrown",
    value?: Error | typeof Error | string
  ): Subject;
  /**
   * Assert the number of calls.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycallcount
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.callCount", value: number): Subject;
  /**
   * Assert spy threw an exception at least once.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spythrew
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.thrown", value?: Error | typeof Error | string): Subject;
  /**
   * Assert spy returned the provided value at least once. (see [matchers](http://sinonjs.org/releases/v4.1.3/spies/#matchers))
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyreturnedobj
   * @see https://on.cypress.io/assertions
   */
  (chainer: "returned" | "have.returned", value: any): Subject;
  /**
   * Assert spy was called before anotherSpy, and no spy calls occurred between spy and anotherSpy.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledimmediatelybeforeanotherspy
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.calledImmediatelyBefore" | "have.been.calledImmediatelyBefore",
    anotherSpy: sinon.SinonSpy
  ): Subject;
  /**
   * Assert spy was called after anotherSpy, and no spy calls occurred between anotherSpy and spy.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledimmediatelyafteranotherspy
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.calledImmediatelyAfter" | "have.been.calledImmediatelyAfter",
    anotherSpy: sinon.SinonSpy
  ): Subject;
  /**
   * Assert the spy was always called with obj as this
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwayscalledonobj
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.always.calledOn" | "always.have.been.calledOn",
    obj: any
  ): Subject;
  /**
   * Assert spy was called at least once with the provided arguments.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwitharg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.calledWith" | "have.been.calledWith", ...args: any[]): Subject;
  /**
   * Assert spy was always called with the provided arguments (and possibly others).
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwayscalledwitharg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.always.calledWith" | "always.have.been.calledWith",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy was called at exactly once with the provided arguments.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwitharg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.calledOnceWith" | "have.been.calledOnceWith",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy was always called with the exact provided arguments.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwayscalledwithexactlyarg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.always.calledWithExactly" | "have.been.calledWithExactly",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy was called at exactly once with the provided arguments.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "be.calledOnceWithExactly" | "have.been.calledOnceWithExactly",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy always returned the provided value.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.always.returned", obj: any): Subject;

  // sinon-chai.not
  /**
   * Assert spy/stub was not called the `new` operator.
   * Beware that this is inferred based on the value of the this object and the spy function’s prototype, so it may give false positives if you actively return the right kind of object.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwithnew
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.be.always.calledWithNew"
      | "not.always.have.been.calledWithNew"
  ): Subject;
  /**
   * Assert if spy was not always called with matching arguments (and possibly others).
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwayscalledwithmatcharg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.be.always.calledWithMatch"
      | "not.always.have.been.calledWithMatch",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy not always returned the provided value.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwaysreturnedobj
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.always.returned" | "not.have.always.returned",
    value: any
  ): Subject;
  /**
   * `true` if the spy was not called at least once
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalled
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.called" | "not.have.been.called"): Subject;
  /**
   * Assert spy was not.called after `anotherSpy`
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledafteranotherspy
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.be.calledAfter" | "not.have.been.calledAfter",
    spy: sinon.SinonSpy
  ): Subject;
  /**
   * Assert spy was not called before `anotherSpy`
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledbeforeanotherspy
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.be.calledBefore" | "not.have.been.calledBefore",
    spy: sinon.SinonSpy
  ): Subject;
  /**
   * Assert spy was not called at least once with `obj` as `this`. `calledOn` also accepts a matcher (see [matchers](http://sinonjs.org/releases/v4.1.3/spies/#matchers)).
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledonobj
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.be.calledOn" | "not.have.been.calledOn",
    context: any
  ): Subject;
  /**
   * Assert spy was not called exactly once
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledonce
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.calledOnce" | "not.have.been.calledOnce"): Subject;
  /**
   * Assert spy was not called exactly three times
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledthrice
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.calledThrice" | "not.have.been.calledThrice"): Subject;
  /**
   * Assert spy was not called exactly twice
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledtwice
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.calledTwice" | "not.have.been.calledTwice"): Subject;
  /**
   * Assert spy was not called at least once with the provided arguments and no others.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwithexactlyarg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.be.calledWithExactly" | "not.have.been.calledWithExactly",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy was not called with matching arguments (and possibly others).
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwithmatcharg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.be.calledWithMatch" | "not.have.been.calledWithMatch",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy/stub was not called the `new` operator.
   * Beware that this is inferred based on the value of the this object and the spy function’s prototype, so it may give false positives if you actively return the right kind of object.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwithnew
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.calledWithNew" | "not.have.been.calledWithNew"): Subject;
  /**
   * Assert spy did not always throw an exception.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwaysthrew
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.have.always.thrown",
    value?: Error | typeof Error | string
  ): Subject;
  /**
   * Assert not the number of calls.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycallcount
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.callCount", value: number): Subject;
  /**
   * Assert spy did not throw an exception at least once.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spythrew
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.thrown", value?: Error | typeof Error | string): Subject;
  /**
   * Assert spy did not return the provided value at least once. (see [matchers](http://sinonjs.org/releases/v4.1.3/spies/#matchers))
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyreturnedobj
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.returned" | "not.have.returned", value: any): Subject;
  /**
   * Assert spy was called before anotherSpy, and no spy calls occurred between spy and anotherSpy.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledimmediatelybeforeanotherspy
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.be.calledImmediatelyBefore"
      | "not.have.been.calledImmediatelyBefore",
    anotherSpy: sinon.SinonSpy
  ): Subject;
  /**
   * Assert spy was called after anotherSpy, and no spy calls occurred between anotherSpy and spy.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledimmediatelyafteranotherspy
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.be.calledImmediatelyAfter"
      | "not.have.been.calledImmediatelyAfter",
    anotherSpy: sinon.SinonSpy
  ): Subject;
  /**
   * Assert the spy was always called with obj as this
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwayscalledonobj
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.be.always.calledOn" | "not.always.have.been.calledOn",
    obj: any
  ): Subject;
  /**
   * Assert spy was called at least once with the provided arguments.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwitharg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.be.calledWith" | "not.have.been.calledWith",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy was always called with the provided arguments (and possibly others).
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwayscalledwitharg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.be.always.calledWith" | "not.always.have.been.calledWith",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy was called at exactly once with the provided arguments.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spycalledwitharg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer: "not.be.calledOnceWith" | "not.have.been.calledOnceWith",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy was always called with the exact provided arguments.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#spyalwayscalledwithexactlyarg1-arg2-
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.be.always.calledWithExactly"
      | "not.have.been.calledWithExactly",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy was called at exactly once with the provided arguments.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#
   * @see https://on.cypress.io/assertions
   */
  (
    chainer:
      | "not.be.calledOnceWithExactly"
      | "not.have.been.calledOnceWithExactly",
    ...args: any[]
  ): Subject;
  /**
   * Assert spy always returned the provided value.
   * @see http://sinonjs.org/releases/v4.1.3/spies/#
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.always.returned", obj: any): Subject;

  // jquery-chai
  /**
   * Assert that at least one element of the selection is checked, using `.is(':checked')`.
   * @example
   *    cy.get('#result').should('be.checked')
   * @see http://chaijs.com/plugins/chai-jquery/#checked
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.checked"): Subject;
  /**
   * Assert that at least one element of the selection is disabled, using `.is(':disabled')`.
   * @example
   *    cy.get('#result').should('be.disabled')
   * @see http://chaijs.com/plugins/chai-jquery/#disabled
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.disabled"): Subject;
  /**
   * Assert that at least one element of the selection is empty, using `.is(':empty')`. If the object asserted against is not a jQuery object, the original implementation will be called.
   * @example
   *    cy.get('#result').should('be.empty')
   * @see http://chaijs.com/plugins/chai-jquery/#empty
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.empty"): Subject;
  /**
   * Assert that at least one element of the selection is enabled, using `.is(':enabled')`.
   * @example
   *    cy.get('#result').should('be.enabled')
   * @see http://chaijs.com/plugins/chai-jquery/#enabled
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.enabled"): Subject;
  /**
   * Assert that at least one element of the selection is hidden, using `.is(':hidden')`.
   * @example
   *    cy.get('#result').should('be.hidden')
   * @see http://chaijs.com/plugins/chai-jquery/#hidden
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.hidden"): Subject;
  /**
   * Assert that at least one element of the selection is selected, using `.is(':selected')`.
   * @example
   *    cy.get('#result').should('be.selected')
   * @see http://chaijs.com/plugins/chai-jquery/#selected
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.selected"): Subject;
  /**
   * Assert that at least one element of the selection is visible, using `.is(':visible')`.
   * @example
   *    cy.get('#result').should('be.visible')
   * @see http://chaijs.com/plugins/chai-jquery/#visible
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.visible"): Subject;
  /**
   * Assert that the selection contains the given text, using `:contains()`. If the object asserted against is not a jQuery object, or if `contain` is not called as a function, the original implementation will be called.
   * @example
   *    cy.get('#result').should('contain', 'text')
   * @see http://chaijs.com/plugins/chai-jquery/#containtext
   * @see https://on.cypress.io/assertions
   */
  (chainer: "contain", value: string): Subject;
  /**
   * Assert that at least one element of the selection is focused.
   * @example
   *    cy.get('#result').should('have.focus')
   *    cy.get('#result').should('be.focused')
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.focus"): Subject;
  /**
   * Assert that at least one element of the selection is focused.
   * @example
   *    cy.get('#result').should('be.focused')
   *    cy.get('#result').should('have.focus')
   * @see https://on.cypress.io/assertions
   */
  (chainer: "be.focused"): Subject;
  /**
   * Assert that the selection is not empty. Note that this overrides the built-in chai assertion. If the object asserted against is not a jQuery object, the original implementation will be called.
   * @example
   *    cy.get('#result').should('exist')
   * @see http://chaijs.com/plugins/chai-jquery/#exist
   * @see https://on.cypress.io/assertions
   */
  (chainer: "exist"): Subject;
  /**
   * Assert that the first element of the selection has the given attribute, using `.attr()`. Optionally, assert a particular value as well. The return value is available for chaining.
   * @example
   *    cy.get('#result').should('have.attr', 'role')
   *    cy.get('#result').should('have.attr', 'role', 'menu')
   * @see http://chaijs.com/plugins/chai-jquery/#attrname-value
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.attr", value: string, match?: string): Subject;
  /**
   * Assert that the first element of the selection has the given attribute, using `.attr()`. Optionally, assert a particular value as well. The return value is available for chaining.
   * @example
   *    cy.get('#result').should('have.class', 'success')
   * @see http://chaijs.com/plugins/chai-jquery/#classclassname
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.class", value: string): Subject;
  /**
   * Assert that the first element of the selection has the given CSS property, using `.css()`. Optionally, assert a particular value as well. The return value is available for chaining.
   * @example
   *    cy.get('#result').should('have.css', 'display', 'none')
   * @see http://chaijs.com/plugins/chai-jquery/#cssname-value
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.css", value: string, match?: string): Subject;
  /**
   * Assert that the first element of the selection has the given data value, using `.data()`. Optionally, assert a particular value as well. The return value is available for chaining.
   * @example
   *    cy.get('#result').should('have.data', 'foo', 'bar')
   * @see http://chaijs.com/plugins/chai-jquery/#dataname-value
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.data", value: string, match?: string): Subject;
  /**
   * Assert that the selection contains at least one element which has a descendant matching the given selector, using `.has()`.
   * @example
   *    cy.get('#result').should('have.descendants', 'h1')
   * @see http://chaijs.com/plugins/chai-jquery/#descendantsselector
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.descendants", selector: string): Subject;
  /**
   * Assert that the html of the first element of the selection is equal to the given html, using `.html()`.
   * @example
   *    cy.get('#result').should('have.html', '<em>John Doe</em>')
   * @see http://chaijs.com/plugins/chai-jquery/#htmlhtml
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.html", value: string): Subject;
  /**
   * Assert that the html of the first element of the selection partially contains the given html, using `.html()`.
   * @example
   *    cy.get('#result').should('contain.html', '<em>John Doe</em>')
   * @see http://chaijs.com/plugins/chai-jquery/#htmlhtml
   * @see https://on.cypress.io/assertions
   */
  (chainer: "contain.html", value: string): Subject;
  /**
   * Assert that the html of the first element of the selection partially contains the given html, using `.html()`.
   * @example
   *    cy.get('#result').should('include.html', '<em>John Doe</em>')
   * @see http://chaijs.com/plugins/chai-jquery/#htmlhtml
   * @see https://on.cypress.io/assertions
   */
  (chainer: "include.html", value: string): Subject;
  /**
   * Assert that the first element of the selection has the given id, using `.attr('id')`.
   * @example
   *    cy.get('#result').should('have.id', 'result')
   * @see http://chaijs.com/plugins/chai-jquery/#idid
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.id", value: string, match?: string): Subject;
  /**
   * Assert that the first element of the selection has the given property, using `.prop()`. Optionally, assert a particular value as well. The return value is available for chaining.
   * @example
   *    cy.get('#result').should('have.prop', 'disabled')
   *    cy.get('#result').should('have.prop', 'disabled', false)
   * @see http://chaijs.com/plugins/chai-jquery/#propname-value
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.prop", value: string, match?: any): Subject;
  /**
   * Assert that the text of the first element of the selection is equal to the given text, using `.text()`.
   * @example
   *    cy.get('#result').should('have.text', 'John Doe')
   * @see http://chaijs.com/plugins/chai-jquery/#texttext
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.text", value: string): Subject;
  /**
   * Assert that the text of the first element of the selection partially contains the given text, using `.text()`.
   * @example
   *    cy.get('#result').should('contain.text', 'John Doe')
   * @see http://chaijs.com/plugins/chai-jquery/#texttext
   * @see https://on.cypress.io/assertions
   */
  (chainer: "contain.text", value: string): Subject;
  /**
   * Assert that the text of the first element of the selection partially contains the given text, using `.text()`.
   * @example
   *    cy.get('#result').should('include.text', 'John Doe')
   * @see http://chaijs.com/plugins/chai-jquery/#texttext
   * @see https://on.cypress.io/assertions
   */
  (chainer: "include.text", value: string): Subject;
  /**
   * Assert that the first element of the selection has the given value, using `.val()`.
   * @example
   *    cy.get('textarea').should('have.value', 'foo bar baz')
   * @see http://chaijs.com/plugins/chai-jquery/#valuevalue
   * @see https://on.cypress.io/assertions
   */
  (chainer: "have.value", value: string): Subject;
  /**
   * Assert that the first element of the selection partially contains the given value, using `.val()`.
   * @example
   *    cy.get('textarea').should('contain.value', 'foo bar baz')
   * @see http://chaijs.com/plugins/chai-jquery/#valuevalue
   * @see https://on.cypress.io/assertions
   */
  (chainer: "contain.value", value: string): Subject;
  /**
   * Assert that the first element of the selection partially contains the given value, using `.val()`.
   * @example
   *    cy.get('textarea').should('include.value', 'foo bar baz')
   * @see http://chaijs.com/plugins/chai-jquery/#valuevalue
   * @see https://on.cypress.io/assertions
   */
  (chainer: "include.value", value: string): Subject;
  /**
   * Assert that the selection matches a given selector, using `.is()`. Note that this overrides the built-in chai assertion. If the object asserted against is not a jQuery object, the original implementation will be called.
   * @example
   *    cy.get('#result').should('match', ':empty')
   * @see http://chaijs.com/plugins/chai-jquery/#matchselector
   * @see https://on.cypress.io/assertions
   */
  (chainer: "match", value: string): Subject;

  // jquery-chai.not
  /**
   * Assert that at least one element of the selection is not checked, using `.is(':checked')`.
   * @example
   *    cy.get('#result').should('not.be.checked')
   * @see http://chaijs.com/plugins/chai-jquery/#checked
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.checked"): Subject;
  /**
   * Assert that at least one element of the selection is not disabled, using `.is(':disabled')`.
   * @example
   *    cy.get('#result').should('not.be.disabled')
   * @see http://chaijs.com/plugins/chai-jquery/#disabled
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.disabled"): Subject;
  /**
   * Assert that at least one element of the selection is not empty, using `.is(':empty')`. If the object asserted against is not a jQuery object, the original implementation will be called.
   * @example
   *    cy.get('#result').should('not.be.empty')
   * @see http://chaijs.com/plugins/chai-jquery/#empty
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.empty"): Subject;
  /**
   * Assert that at least one element of the selection is not enabled, using `.is(':enabled')`.
   * @example
   *    cy.get('#result').should('not.be.enabled')
   * @see http://chaijs.com/plugins/chai-jquery/#enabled
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.enabled"): Subject;
  /**
   * Assert that at least one element of the selection is not hidden, using `.is(':hidden')`.
   * @example
   *    cy.get('#result').should('not.be.hidden')
   * @see http://chaijs.com/plugins/chai-jquery/#hidden
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.hidden"): Subject;
  /**
   * Assert that at least one element of the selection is not selected, using `.is(':selected')`.
   * @example
   *    cy.get('#result').should('not.be.selected')
   * @see http://chaijs.com/plugins/chai-jquery/#selected
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.selected"): Subject;
  /**
   * Assert that at least one element of the selection is not visible, using `.is(':visible')`.
   * @example
   *    cy.get('#result').should('not.be.visible')
   * @see http://chaijs.com/plugins/chai-jquery/#visible
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.visible"): Subject;
  /**
   * Assert that no element of the selection is focused.
   * @example
   *    cy.get('#result').should('not.have.focus')
   *    cy.get('#result').should('not.be.focused')
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.focus"): Subject;
  /**
   * Assert that no element of the selection is focused.
   * @example
   *    cy.get('#result').should('not.be.focused')
   *    cy.get('#result').should('not.have.focus')
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.be.focused"): Subject;
  /**
   * Assert that the selection does not contain the given text, using `:contains()`. If the object asserted against is not a jQuery object, or if `contain` is not called as a function, the original implementation will be called.
   * @example
   *    cy.get('#result').should('not.contain', 'text')
   * @see http://chaijs.com/plugins/chai-jquery/#containtext
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.contain", value: string): Subject;
  /**
   * Assert that the selection is empty. Note that this overrides the built-in chai assertion. If the object asserted against is not a jQuery object, the original implementation will be called.
   * @example
   *    cy.get('#result').should('not.exist')
   * @see http://chaijs.com/plugins/chai-jquery/#exist
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.exist"): Subject;
  /**
   * Assert that the first element of the selection does not have the given attribute, using `.attr()`. Optionally, assert a particular value as well. The return value is available for chaining.
   * @example
   *    cy.get('#result').should('not.have.attr', 'role')
   *    cy.get('#result').should('not.have.attr', 'role', 'menu')
   * @see http://chaijs.com/plugins/chai-jquery/#attrname-value
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.attr", value: string, match?: string): Subject;
  /**
   * Assert that the first element of the selection does not have the given attribute, using `.attr()`. Optionally, assert a particular value as well. The return value is available for chaining.
   * @example
   *    cy.get('#result').should('not.have.class', 'success')
   * @see http://chaijs.com/plugins/chai-jquery/#classclassname
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.class", value: string): Subject;
  /**
   * Assert that the first element of the selection does not have the given CSS property, using `.css()`. Optionally, assert a particular value as well. The return value is available for chaining.
   * @example
   *    cy.get('#result').should('not.have.css', 'display', 'none')
   * @see http://chaijs.com/plugins/chai-jquery/#cssname-value
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.css", value: string, match?: string): Subject;
  /**
   * Assert that the first element of the selection does not have the given data value, using `.data()`. Optionally, assert a particular value as well. The return value is available for chaining.
   * @example
   *    cy.get('#result').should('not.have.data', 'foo', 'bar')
   * @see http://chaijs.com/plugins/chai-jquery/#dataname-value
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.data", value: string, match?: string): Subject;
  /**
   * Assert that the selection does not contain at least one element which has a descendant matching the given selector, using `.has()`.
   * @example
   *    cy.get('#result').should('not.have.descendants', 'h1')
   * @see http://chaijs.com/plugins/chai-jquery/#descendantsselector
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.descendants", selector: string): Subject;
  /**
   * Assert that the html of the first element of the selection is not equal to the given html, using `.html()`.
   * @example
   *    cy.get('#result').should('not.have.html', '<em>John Doe</em>')
   * @see http://chaijs.com/plugins/chai-jquery/#htmlhtml
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.html", value: string): Subject;
  /**
   * Assert that the html of the first element of the selection does not contain the given html, using `.html()`.
   * @example
   *    cy.get('#result').should('not.contain.html', '<em>John Doe</em>')
   * @see http://chaijs.com/plugins/chai-jquery/#htmlhtml
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.contain.html", value: string): Subject;
  /**
   * Assert that the html of the first element of the selection does not contain the given html, using `.html()`.
   * @example
   *    cy.get('#result').should('not.include.html', '<em>John Doe</em>')
   * @see http://chaijs.com/plugins/chai-jquery/#htmlhtml
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.include.html", value: string): Subject;
  /**
   * Assert that the first element of the selection does not have the given id, using `.attr('id')`.
   * @example
   *    cy.get('#result').should('not.have.id', 'result')
   * @see http://chaijs.com/plugins/chai-jquery/#idid
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.id", value: string, match?: string): Subject;
  /**
   * Assert that the first element of the selection does not have the given property, using `.prop()`. Optionally, assert a particular value as well. The return value is available for chaining.
   * @example
   *    cy.get('#result').should('not.have.prop', 'disabled')
   *    cy.get('#result').should('not.have.prop', 'disabled', false)
   * @see http://chaijs.com/plugins/chai-jquery/#propname-value
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.prop", value: string, match?: any): Subject;
  /**
   * Assert that the text of the first element of the selection is not equal to the given text, using `.text()`.
   * @example
   *    cy.get('#result').should('not.have.text', 'John Doe')
   * @see http://chaijs.com/plugins/chai-jquery/#texttext
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.text", value: string): Subject;
  /**
   * Assert that the text of the first element of the selection does not contain the given text, using `.text()`.
   * @example
   *    cy.get('#result').should('not.contain.text', 'John Doe')
   * @see http://chaijs.com/plugins/chai-jquery/#texttext
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.contain.text", value: string): Subject;
  /**
   * Assert that the text of the first element of the selection does not contain the given text, using `.text()`.
   * @example
   *    cy.get('#result').should('not.include.text', 'John Doe')
   * @see http://chaijs.com/plugins/chai-jquery/#texttext
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.include.text", value: string): Subject;
  /**
   * Assert that the first element of the selection does not have the given value, using `.val()`.
   * @example
   *    cy.get('textarea').should('not.have.value', 'foo bar baz')
   * @see http://chaijs.com/plugins/chai-jquery/#valuevalue
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.have.value", value: string): Subject;
  /**
   * Assert that the first element of the selection does not contain the given value, using `.val()`.
   * @example
   *    cy.get('textarea').should('not.contain.value', 'foo bar baz')
   * @see http://chaijs.com/plugins/chai-jquery/#valuevalue
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.contain.value", value: string): Subject;
  /**
   * Assert that the first element of the selection does not contain the given value, using `.val()`.
   * @example
   *    cy.get('textarea').should('not.include.value', 'foo bar baz')
   * @see http://chaijs.com/plugins/chai-jquery/#valuevalue
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.include.value", value: string): Subject;
  /**
   * Assert that the selection does not match a given selector, using `.is()`. Note that this overrides the built-in chai assertion. If the object asserted against is not a jQuery object, the original implementation will be called.
   * @example
   *    cy.get('#result').should('not.match', ':empty')
   * @see http://chaijs.com/plugins/chai-jquery/#matchselector
   * @see https://on.cypress.io/assertions
   */
  (chainer: "not.match", value: string): Subject;

  // fallback
  /**
   * Create an assertion. Assertions are automatically retried until they pass or time out.
   * Ctrl+Space will invoke auto-complete in most editors.
   * @see https://on.cypress.io/should
   */
  (chainers: string, value?: any): Subject;
  (chainers: string, value: any, match: any): Subject;

  /**
   * Create an assertion. Assertions are automatically retried until they pass or time out.
   * Passing a function to `.should()` enables you to make multiple assertions on the yielded subject. This also gives you the opportunity to massage what you’d like to assert on.
   * Just be sure _not_ to include any code that has side effects in your callback function. The callback function will be retried over and over again until no assertions within it throw.
   * @example
   *    cy
   *      .get('p')
   *      .should(($p) => {
   *        // should have found 3 elements
   *        expect($p).to.have.length(3)
   *
   *        // make sure the first contains some text content
   *        expect($p.first()).to.contain('Hello World')
   *
   *        // use jquery's map to grab all of their classes
   *        // jquery's map returns a new jquery object
   *        const classes = $p.map((i, el) => {
   *          return Cypress.$(el).attr('class')
   *        })
   *
   *        // call classes.get() to make this a plain array
   *        expect(classes.get()).to.deep.eq([
   *          'text-primary',
   *          'text-danger',
   *          'text-default'
   *        ])
   *      })
   * @see https://on.cypress.io/should
   */
  (fn: (currentSubject: Subject) => void): Subject;
}
