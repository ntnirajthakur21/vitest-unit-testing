import { should } from "vitest";
import fizzBuzz from "../fizzBuzz";

describe("fizzBuzz", () => {
  it("should return 'Fizz' if n is only divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("should return Buzz if n is only divisiaible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return FizzBuzz if n is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return args as string if args is not divisible by 3 or 5", () => {
    expect(fizzBuzz(4)).toBe("4");
  });
});
