import factorial from "../factorial";

describe("factorial", () => {
  it("should return 1 if the number is 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return undefined if the number is negative", () => {
    expect(factorial(-1)).toBeUndefined();
  });

  it("should return 1 if the number is 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 6 if the number is 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return the factorial of the number", () => {
    expect(factorial(5)).toBe(120);
  });
});
