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
