/**
 * Finds missing number in unsorted array from 1 to N
 *
 * @param {number[]} numbers
 * @returns {number | undefined}
 */
export function missing(numbers: number[]): number | undefined {
  if (numbers.length === 0) {
    return undefined;
  }

  const max = Math.max(...numbers);

  const expectedSum = (max * (max + 1)) / 2;
  const actualSum = numbers.reduce((p, n) => p + n, 0);

  const lostNumber = expectedSum - actualSum;

  return lostNumber > 0 ? lostNumber : undefined;
}
