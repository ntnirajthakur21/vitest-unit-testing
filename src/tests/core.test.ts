import { calculateDiscount, getCoupons, validateUserInput } from "../core";

describe("getCoupons", () => {
  it("should return an array of coupons", () => {
    const coupons = getCoupons();
    expect(Array.isArray(coupons)).toBeTruthy();
    expect(coupons.length).toBeGreaterThan(0);
  });

  it("should return an array with valid coupon codes", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("code");
      expect(coupon.code).toBeTruthy();
    });
  });

  it("should return an array with valid coupon discounts", () => {
    const coupons = getCoupons();
    coupons.forEach((coupon) => {
      expect(coupon).toHaveProperty("discount");
      expect(coupon.discount).toBeGreaterThan(0);
      expect(coupon.discount).toBeLessThanOrEqual(1);
    });
  });
});

describe("calculateDiscount", () => {
  it("should return valid discount if given valid code", () => {
    expect(calculateDiscount(100, "SAVE10")).toBe(90);
    expect(calculateDiscount(100, "SAVE20")).toBe(80);
  });

  it("should return 'Invalid price' if given invalid price", () => {
    expect(calculateDiscount(-100, "SAVE10")).toMatch(/invalid/i);
  });

  it("should handle non number price", () => {
    expect(calculateDiscount("100" as any, "SAVE10")).toMatch(/invalid/i);
  });

  it("should handle invalid discount code", () => {
    expect(calculateDiscount(100, "INVALID")).toBe(100);
  });

  it("should handle non string discount code", () => {
    expect(calculateDiscount(100, 123 as any)).toMatch(/invalid/i);
  });
});

describe("validateUserInput", () => {
  it("should return 'Validation successful' if given valid input", () => {
    expect(validateUserInput("niraj", 24)).toMatch(/success/i);
  });

  it("should return 'Invalid username' if given invalid username", () => {
    expect(validateUserInput("ni", 24)).toMatch(/invalid/i);
  });

  it("should return 'Invalid age' if given invalid age", () => {
    expect(validateUserInput("niraj", 10)).toMatch(/invalid/i);
  });

  it("should handle non string username", () => {
    expect(validateUserInput(123 as any, 24)).toMatch(/invalid/i);
  });

  it("should handle non number age", () => {
    expect(validateUserInput("niraj", "24" as any)).toMatch(/invalid/i);
  });

  it("should return error if username is too long", () => {
    const username = "a".repeat(256);
    expect(validateUserInput(username, 24)).toMatch(/invalid/i);
  });

  it("should return error if username is too short", () => {
    expect(validateUserInput("", 24)).toMatch(/invalid/i);
  });

  it("should return error if age is too low", () => {
    expect(validateUserInput("niraj", 10)).toMatch(/invalid/i);
  });

  it("should return error if age is too high", () => {
    expect(validateUserInput("niraj", 101)).toMatch(/invalid/i);
  });
});
