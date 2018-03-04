/**
 * Applies a function against an accumulator
 * and each element in the array (from left to right)
 * to reduce it to a single value.
 *
 * @param {Array} array
 * @param {(prev, next) => any} func
 * @param {T} acc
 * @returns {T}
 */
export function reduce<T>(array: any[], func: (prev, next) => any, acc: T): T {
  for (const item of array) {
    acc = func(acc, item);
  }

  return acc;
}
  