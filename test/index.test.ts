import unrepeat from "../src";

describe("unrepeat", () => {
  it("should work with single character string", () => {
    let char = "a";
    let repCount = 5;

    var result = unrepeat(char.repeat(repCount));

    expect(result.repeated).toEqual(char);
    expect(result.count).toEqual(repCount);
  });
});
