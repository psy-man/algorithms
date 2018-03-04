/**
 * Returns all permutations of string
 *
 * @param {string} str
 * @returns {string[]}
 */
export function permute(str: string): string[] {
  if (str.length === 0) {
    return [];
  }

  return [...permuteArray(str.split(''))].map(array => array.join(''));
}


/**
 * Returns all permutations of array
 *
 * @param {string[]} array
 * @param {number} n
 */
export function* permuteArray(array: string[], n: number = array.length) {
  if (n <= 1) {
    yield array.slice();
  } else {
    for (let i = 0; i < n; i += 1) {
      yield* permuteArray(array, n - 1);

      const q = n % 2 ? 0 : i;
      [array[q], array[n - 1]] = [array[n - 1], array[q]];
    }
  }
}