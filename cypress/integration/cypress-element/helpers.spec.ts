import { el } from "../../../src";

import {
  isEl,
  isRootSelector,
  isSelector,
  getElType,
  getElPath,
  getSelectorByElement,
} from "../../../src/helpers";

const elWithChildren = el({
  name: "elWithChildren",
  child1: el({}),
  child2: el({ name: "child2" }),
});

describe("isEl", () => {
  const element = el({});
  it("element should be element", () => {
    expect(isEl(element)).to.be.true;
  });
  it("object like element is not element", () => {
    expect(isEl({ el: "button", name: "button" })).to.be.false;
  });
  it("other type is not element", () => {
    ["string", {}, 0, false, undefined, NaN, () => {}].map((i) => {
      expect(isEl(i), `${i || typeof i} don't should be a element`).to.be.false;
    });
  });
});

describe("isRootSelector", () => {
  it("real root selector", () => {
    expect(isRootSelector(el.r``)).to.be.true;
  });
  it("template string", () => {
    expect(isRootSelector(``)).to.be.false;
  });
  it("string", () => {
    expect(isRootSelector("")).to.be.false;
  });
  it("String", () => {
    expect(isRootSelector(new String(""))).to.be.false;
  });
});

describe("isSelector", () => {
  it("string", () => {
    expect(isSelector("div")).to.be.true;
  });
  it("root selector", () => {
    expect(isSelector(el.r`div`)).to.be.true;
  });

  it("undefined", () => {
    expect(isSelector(undefined)).to.be.false;
  });
});

describe("getElType", () => {
  it("element without name", () => {
    expect(getElType(el({}))).to.be.undefined;
    expect(getElType(el({ name: "" }))).to.be.undefined;
  });

  it("when name is present: should be a PascalCase", () => {
    expect(getElType(el({ name: "test" }))).deep.equal("Test");
    expect(getElType(el({ name: "Test" }))).deep.equal("Test");
    expect(getElType(el({ name: "testTest" }))).deep.equal("TestTest");
  });
});

describe("getElPath", () => {
  it("single element", () => {
    expect(getElPath(el({}))).deep.equal("");
    expect(getElPath(el({}), "method")).deep.equal(".method");
    expect(getElPath(el({ name: "test" }))).deep.equal("<Test>");
    expect(getElPath(el({ name: "test" }), "method")).deep.equal(
      "<Test>.method"
    );
  });
  it("children element access", () => {
    expect(getElPath(elWithChildren.child1)).deep.equal(
      "<ElWithChildren>.child1"
    );
    expect(getElPath(elWithChildren.child1, "method")).deep.equal(
      "<ElWithChildren>.child1.method"
    );

    expect(getElPath(elWithChildren.child2)).deep.equal(
      "<ElWithChildren>.child2<Child2>"
    );
    expect(getElPath(elWithChildren.child2, "method")).deep.equal(
      "<ElWithChildren>.child2<Child2>.method"
    );
  });
});

describe("getSelectorByElement", () => {
  const selectorFn = (cy) => cy.find("html");
  const exampleTree = el({
    fn: el({ el: selectorFn }),
    bigTree: el({
      el: "bigTree",
      one: el({ el: "one", two: el("two") }),
    }),
    withSelector: el({
      el: "withSelector",
      withSelector: el({ el: "withSelector" }),
      withOutSelector: el({}),
      withRoot: el(el.r`withRoot`),
      fn: el({ el: selectorFn }),
    }),
    withOutSelector: el({
      withSelector: el({ el: "withSelector" }),
      withOutSelector: el({}),
      fn: el({ el: selectorFn }),
    }),
  });
  describe("single element", () => {
    it("element without selector", () => {
      expect(getSelectorByElement(el({}))).to.length(0);
    });
    it("element with selector", () => {
      expect(getSelectorByElement(el("selector"))).deep.equal(["selector"]);
    });
  });
  it("root selector prevent any parent selectors", () => {
    expect(getSelectorByElement(exampleTree.withSelector.withRoot)).deep.equal([
      "withRoot",
    ]);
  });

  it("when parent and child has selectors - selectors should split `space`", () => {
    expect(
      getSelectorByElement(exampleTree.withSelector.withSelector)
    ).deep.equal(["withSelector", "withSelector"]);
  });

  it("element tree", () => {
    expect(
      getSelectorByElement(exampleTree.withSelector.withOutSelector)
    ).deep.equal(["withSelector"]);
    expect(
      getSelectorByElement(exampleTree.withOutSelector.withSelector)
    ).deep.equal(["withSelector"]);
    expect(
      getSelectorByElement(exampleTree.withOutSelector.withOutSelector)
    ).to.be.length(0);

    expect(getSelectorByElement(exampleTree.bigTree.one.two)).deep.equal([
      "bigTree",
      "one",
      "two",
    ]);
  });

  it("el don't mutable", () => {
    const single = el("single");

    const parent1 = el({ el: "parent1", single });
    const parent2 = el({ el: "parent2", single });

    expect(getSelectorByElement(single)).deep.equal(["single"]);
    expect(getSelectorByElement(parent1.single)).deep.equal([
      "parent1",
      "single",
    ]);
    expect(getSelectorByElement(parent2.single)).deep.equal([
      "parent2",
      "single",
    ]);
  });

  it("function as selector", () => {
    expect(getSelectorByElement(exampleTree.fn)).deep.equal([selectorFn]);
    expect(getSelectorByElement(exampleTree.withSelector.fn)).deep.equal([
      "withSelector",
      selectorFn,
    ]);
    expect(getSelectorByElement(exampleTree.withOutSelector.fn)).deep.equal([
      selectorFn,
    ]);
  });
});
