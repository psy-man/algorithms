/**
 * Finds the index of element in array
 *
 * @param {Array} array
 * @param el
 * @param {number} start
 * @returns {number}
 */
export function indexOf(array: any[], el, start = 0): number {
  for (let i = start; i < array.length; i++) {
    const q = array[i];

    if (q === el) {
      return i;
    }
  }

  return -1;
}
  