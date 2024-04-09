import sum from "../sum";

describe("sum", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds 2 +3 to equal 5", () => {
    // AAA
    // Arrange - Arrange means setting up the test scenario. This is where you set up the values that you’ll be testing.
    const a = 2;
    const b = 3;

    // Act - Act means executing the test scenario. This is where you execute the code that you’re testing.
    const result = sum(a, b);

    // Assert - Assert means verifying the result. This is where you check if the code behaves as expected
    expect(result).toBe(5);
  });
});
