const factorial = (n: number): number | undefined => {
  if (n < 0) {
    return undefined;
  }
  if (n === 0) {
    return 1;
  }
  return n * Number(factorial(n - 1));
};

export default factorial;
