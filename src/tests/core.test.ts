import {
  calculateDiscount,
  canDrive,
  getCoupons,
  isPriceInRange,
  isValidUsername,
  validateUserInput,
} from "../core";

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

describe("isPriceInRange", () => {
  it("should retun false if price is outside value", () => {
    expect(isPriceInRange(10, 20, 30)).toBeFalsy();
    expect(isPriceInRange(100, 20, 30)).toBeFalsy();
  });

  it("should return true if price is within range", () => {
    expect(isPriceInRange(25, 20, 30)).toBeTruthy();
  });

  it("should return true if price is equal to min value", () => {
    expect(isPriceInRange(20, 20, 30)).toBeTruthy();
  });

  it("should return true if price is equal to max value", () => {
    expect(isPriceInRange(30, 20, 30)).toBeTruthy();
  });
});

describe("isValidUsername", () => {
  const minLength = 5;
  const maxLength = 15;
  it("should return false if username is empty", () => {
    expect(isValidUsername("")).toBeFalsy();
  });

  it("should return false if username is too short", () => {
    expect(isValidUsername("a")).toBeFalsy();
  });

  it("should return false if username is too long", () => {
    expect(isValidUsername("a".repeat(maxLength + 1))).toBeFalsy();
  });

  it("should return true if username is valid", () => {
    expect(isValidUsername("niraj")).toBeTruthy();
  });

  it("should return true if username is at min length", () => {
    expect(isValidUsername("a".repeat(minLength))).toBeTruthy();
  });

  it("should return true if username is at max length", () => {
    expect(isValidUsername("a".repeat(maxLength))).toBeTruthy();
  });

  it("should return false if username is not a string", () => {
    expect(isValidUsername(12345 as any)).toBeFalsy();
    expect(isValidUsername(null as any)).toBeFalsy();
    expect(isValidUsername(undefined as any)).toBeFalsy();
  });
});

describe("canDrive", () => {
  it("should throw error if country is not in the list", () => {
    expect(canDrive(16, "IN" as any)).toMatch(/invalid/i);
  });

  it.each([
    {
      age: 15,
      country: "US",
      expected: false,
    },
    {
      age: 16,
      country: "UK",
      expected: false,
    },
    {
      age: 13,
      country: "UK",
      expected: false,
    },
  ])(
    "should return $expected for $age is below legal driving age in $country",
    ({ age, country, expected }) => {
      expect(canDrive(age, country as any)).toBe(expected);
    }
  );

  it("should return true if age is at legal driving age", () => {
    expect(canDrive(16, "US")).toBeTruthy();
    expect(canDrive(17, "UK")).toBeTruthy();
  });

  it("should return true if age is above legal driving age", () => {
    expect(canDrive(17, "US")).toBeTruthy();
    expect(canDrive(18, "UK")).toBeTruthy();
  });
});
