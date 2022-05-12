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
    expect(getElType(el({ name: "test" }))).to.be.eq("Test");
    expect(getElType(el({ name: "Test" }))).to.be.eq("Test");
    expect(getElType(el({ name: "testTest" }))).to.be.eq("TestTest");
  });
});

describe("getElPath", () => {
  it("single element", () => {
    expect(getElPath(el({}))).to.be.eq("");
    expect(getElPath(el({}), "method")).to.be.eq(".method");
    expect(getElPath(el({ name: "test" }))).to.be.eq("<Test>");
    expect(getElPath(el({ name: "test" }), "method")).to.be.eq("<Test>.method");
  });
  it("children element access", () => {
    expect(getElPath(elWithChildren.child1)).to.be.eq(
      "<ElWithChildren>.child1"
    );
    expect(getElPath(elWithChildren.child1, "method")).to.be.eq(
      "<ElWithChildren>.child1.method"
    );

    expect(getElPath(elWithChildren.child2)).to.be.eq(
      "<ElWithChildren>.child2<Child2>"
    );
    expect(getElPath(elWithChildren.child2, "method")).to.be.eq(
      "<ElWithChildren>.child2<Child2>.method"
    );
  });
});

describe("getSelectorByElement", () => {
  const exampleTree = el({
    bigTree: el({
      el: "bigTree",
      one: el({ el: "one", two: el("two") }),
    }),
    withSelector: el({
      el: "withSelector",
      withSelector: el({ el: "withSelector" }),
      withOutSelector: el({}),
      withRoot: el(el.r`withRoot`),
    }),
    withOutSelector: el({
      withSelector: el({ el: "withSelector" }),
      withOutSelector: el({}),
    }),
  });
  describe("single element", () => {
    it("element without selector", () => {
      expect(getSelectorByElement(el({}))).to.be.undefined;
    });
    it("element with selector", () => {
      expect(getSelectorByElement(el("selector"))).to.be.eq("selector");
    });
  });
  it("root selector prevent any parent selectors", () => {
    expect(getSelectorByElement(exampleTree.withSelector.withRoot)).to.be.eq(
      "withRoot"
    );
  });

  it("when parent and child has selectors - selectors should split `space`", () => {
    expect(
      getSelectorByElement(exampleTree.withSelector.withSelector)
    ).to.be.eq("withSelector withSelector");
  });

  it("element tree", () => {
    expect(
      getSelectorByElement(exampleTree.withSelector.withOutSelector)
    ).to.be.eq("withSelector");
    expect(
      getSelectorByElement(exampleTree.withOutSelector.withSelector)
    ).to.be.eq("withSelector");
    expect(getSelectorByElement(exampleTree.withOutSelector.withOutSelector)).to
      .be.undefined;

    expect(getSelectorByElement(exampleTree.bigTree.one.two)).to.be.eq(
      "bigTree one two"
    );
  });

  it("el don't mutable", () => {
    const single = el("single");

    const parent1 = el({ el: "parent1", single });
    const parent2 = el({ el: "parent2", single });

    expect(getSelectorByElement(single)).to.be.eq("single");
    expect(getSelectorByElement(parent1.single)).to.be.eq("parent1 single");
    expect(getSelectorByElement(parent2.single)).to.be.eq("parent2 single");
  });
});
