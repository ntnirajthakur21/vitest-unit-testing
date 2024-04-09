export const getCoupons = () => {
  return [
    {
      code: "coupon1",
      discount: 0.1,
    },
    {
      code: "coupon2",
      discount: 0.2,
    },
    {
      code: "coupon3",
      discount: 0.3,
    },
  ];
};

export function calculateDiscount(price: number, discountCode: string) {
  if (typeof price !== "number" || price <= 0) {
    return "Invalid price";
  }

  if (typeof discountCode !== "string") {
    return "Invalid discount code";
  }

  let discount = 0;
  if (discountCode === "SAVE10") {
    discount = 0.1;
  } else if (discountCode === "SAVE20") {
    discount = 0.2;
  }

  return price - price * discount;
}

export function validateUserInput(username: string, age: number) {
  const errors = [];

  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 255
  ) {
    errors.push("Invalid username");
  }

  if (typeof age !== "number" || age < 18 || age > 100) {
    errors.push("Invalid age");
  }

  return errors.length === 0 ? "Validation successful" : errors.join(", ");
}

export const isPriceInRange = (
  price: number,
  minPrice: number,
  maxPrice: number
) => {
  return price >= minPrice && price <= maxPrice;
};

export const isValidUsername = (username: string): boolean => {
  const minLength = 5;
  const maxLength = 15;

  if (!username) return false;

  return username.length >= minLength && username.length <= maxLength;
};
