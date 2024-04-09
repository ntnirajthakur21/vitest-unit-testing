const average = (arr: number[]): number => {
  if (arr.length === 0) {
    return NaN;
  }

  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
};

export default average;
