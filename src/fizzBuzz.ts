/**
 * FizzBuzz
 * @param n number
 * @returns "Fizz" if n is divisible by 3, "Buzz" if n is divisible by 5, "FizzBuzz" if n is divisible by 3 and 5, otherwise n
 * @example
 * fizzBuzz(3); // "Fizz"
 * fizzBuzz(5); // "Buzz"
 * fizzBuzz(15); // "FizzBuzz"
 * fizzBuzz(4); // "4"
 * */
const fizzBuzz = (n: number): string => {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
};

export default fizzBuzz;
