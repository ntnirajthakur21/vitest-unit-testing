import { getExchangeRate } from "../libs/currency";
import { getPriceInCurrency } from "../mocking";

// This will mock the getExchangeRate function from the currency module
vi.mock("../libs/currency");

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
