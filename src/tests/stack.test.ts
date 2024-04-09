import Stack from "../stack";

describe("stack", () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  afterEach(() => {
    stack.clear();
  });

  it("push should add an item to the stack", () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
  });

  it("pop should remove the last item from the stack", () => {
    stack.push(1);
    stack.push(2);
    const popped = stack.pop();
    expect(stack.size()).toBe(1);
    expect(popped).toBe(2);
  });

  it("should return true if the stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it("should return false if the stack is not empty", () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("pop should throw an error if the stack is empty", () => {
    expect(() => stack.pop()).toThrow(/empty/i);
  });

  it("peek should return the last item from the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it("peek should throw an error if the stack is empty", () => {
    expect(() => stack.peek()).toThrow(/empty/i);
  });

  it("size should return the number of items in the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  it("clear should remove all items from the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.clear();
    expect(stack.size()).toBe(0);
  });
});
