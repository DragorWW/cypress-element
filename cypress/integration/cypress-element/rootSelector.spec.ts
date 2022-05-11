import { rootSelector } from "../../../src/rootSelector";
import { rootSymbol } from "../../../src/constants";

describe("rootSelector", () => {
  it("should be String class", () => {
    expect((rootSelector`` as any) instanceof String).to.be.true;
  });

  it("should be have root selector symbol", () => {
    expect(rootSelector``).to.haveOwnProperty(rootSymbol as any, true);
  });

  it("original selector should be save", () => {
    expect(rootSelector`test test`.toString(), "simple string").to.be.eq(
      "test test"
    );
    expect(
      rootSelector`test ${"test"}`.toString(),
      "string with expression"
    ).to.be.eq("test test");
    expect(
      rootSelector`${`tes${`t`}`} ${"test"}`.toString(),
      "string with expression in expression"
    ).to.be.eq("test test");
  });
});
