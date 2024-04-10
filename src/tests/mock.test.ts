import { trackPageView } from "../libs/analytics";
import { getExchangeRate } from "../libs/currency";
import { charge } from "../libs/payment";
import { getShippingQuote } from "../libs/shipping";
import {
  getPriceInCurrency,
  getShippingInfo,
  renderPage,
  submitOrder,
} from "../mocking";

// This will mock the getExchangeRate function from the currency module
// this line is hoisted to the top of the file - so it will be executed before the getPriceInCurrency function is called
vi.mock("../libs/currency");

vi.mock("../libs/shipping");

vi.mock("../libs/analytics");

vi.mock("../libs/payment");

describe("mock", () => {
  it("should mock a function", () => {
    const greet = vi.fn();
    greet.mockReturnValue("Hello, World!");

    expect(greet()).toMatch(/hello/i);
    expect(greet).toHaveBeenCalled();
  });

  it("should mock a function with arguments", () => {
    const greet = vi.fn();

    greet.mockImplementation((name: string) => `Hello, ${name}!`);

    expect(greet("John")).toMatch(/john/i);
    expect(greet).toHaveBeenCalledWith("John");
  });

  it("should mock a promise", async () => {
    const fetchUser = vi.fn();

    fetchUser.mockResolvedValue({ name: "John" });

    const user = await fetchUser();

    expect(user.name).toMatch(/john/i);
  });
});

describe("getPriceInCurrency", () => {
  it("should return the price in the given currency", () => {
    // This will mock the getExchangeRate function from the currency module
    // and return 1.6 when called with "USD" and "AUD"
    // This is useful when you want to mock a function from a module - you don't have to import the module
    // and you can mock the function directly
    // Mocking is done at the module level, so you can mock multiple functions from the same module
    vi.mocked(getExchangeRate).mockReturnValue(1.6);

    const price = getPriceInCurrency(10, "AUD");
    expect(price).toBe(16);
  });
});

describe("getShippingInfo", () => {
  it("should return the shipping cost and estimated days", () => {
    vi.mocked(getShippingQuote).mockImplementation(() => ({
      cost: 10,
      estimatedDays: 2,
    }));

    const shippingInfo = getShippingInfo("US");

    expect(shippingInfo).toMatch(/shipping cost/i);
    expect(shippingInfo).toMatch(/\$10/i);
    expect(shippingInfo).toMatch(/2/i);
  });

  it("should return 'Shipping Unavailable' if the quote is not available", () => {
    vi.mocked(getShippingQuote).mockReturnValue(null as any);

    const shippingInfo = getShippingInfo("US");

    expect(shippingInfo).toMatch(/shipping unavailable/i);
  });
});

describe("renderPage", () => {
  it("should contain the content", async () => {
    const page = await renderPage();

    expect(page).match(/content/i);
  });

  it("should call trackPageView with the correct path", async () => {
    await renderPage();

    expect(trackPageView).toHaveBeenCalledWith("/home");
  });
});

describe("submitOrder", () => {
  const order = { totalAmount: 100 };
  const creditCard = { creditCardNumber: "1234" };

  it("should return success if the payment is successful", async () => {
    vi.mocked(charge).mockResolvedValue({ status: "success" });

    const result = await submitOrder(order, creditCard);

    expect(result.success).toBe(true);
  });

  it("should call charge with the correct arguments", async () => {
    vi.mocked(charge).mockResolvedValue({ status: "success" });

    await submitOrder(order, creditCard);

    expect(charge).toHaveBeenCalledWith(creditCard, order.totalAmount);
  });

  it("should return error if the payment is failed", async () => {
    vi.mocked(charge).mockResolvedValue({ status: "failed" });

    const result = await submitOrder(order, creditCard);

    expect(result.success).toBe(false);
    expect(result).toHaveProperty("error");
    expect(result.error).toMatch(/error/i);
  });
});
