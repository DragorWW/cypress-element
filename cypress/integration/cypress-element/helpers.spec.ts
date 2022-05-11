import { el } from "../../../src";

import {
  isEl,
  isRootSelector,
  isSelector,
  getElType,
  getElPath,
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
