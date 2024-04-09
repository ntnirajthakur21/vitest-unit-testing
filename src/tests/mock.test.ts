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
