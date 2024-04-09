import average from "../average";

describe("average", () => {
  it("should return NaN if the array is empty", () => {
    expect(average([])).toBe(NaN);
  });

  it("should return the first element if the array has only one element", () => {
    expect(average([1])).toBe(1);
  });

  it("should return the average of two elements", () => {
    expect(average([1, 2])).toBe(1.5);
  });

  it("should return the average of the array", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
});
