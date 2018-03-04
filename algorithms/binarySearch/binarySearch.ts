/**
 * Binary Search
 *
 * @param {number[]} array
 * @param {number} num
 * @param {number} left
 * @param {number} right
 * @return {number | undefined}
 */
export function binarySearch(array: number[], num: number, left: number, right: number): number | undefined {
  if (right < left) {
    return undefined;
  }

  const middle: number = Math.floor((left + right) / 2);
  const current: number = array[middle];

  if (num === current) {
    return middle
  }

  if (current > num) {
    return binarySearch(array, num, left, middle - 1)
  }

  return binarySearch(array, num, middle + 1, right);
}