/**
 * Checks if sorted array
 * has the 2 numbers with specified sum
 *
 * @param {number[]} array
 * @param {number} sum
 * @return {boolean}
 */
export function hasPairWithSum(array: number[], sum: number): boolean {
  let min = 0;
  let max = array.length - 1;

  while (min < max) {
    const s = array[min] + array[max];

    if (s === sum) {
      return true;

    } else if (s > sum) {
      max -= 1;
    } else {
      min += 1;
    }
  }


  return false;
}
