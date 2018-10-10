import { memoize } from '../memoization/memoization';


/**
 * Fibonacci number
 * Memoize allows us to find a huge values
 *
 * @type {(value) => any}
 */
export const fibonacci = memoize((num: number): number => {
  switch (num) {
    case 0:
    case 1:
      return num;
    default:
      return fibonacci(num - 2) + fibonacci(num - 1);
  }
});
