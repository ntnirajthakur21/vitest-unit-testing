import max from "../max";

describe("max", () => {
  it("should return first number if it is greater than second number", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return second number if it is greater than first number", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return first number if both numbers are equal", () => {
    expect(max(2, 2)).toBe(2);
  });
});
