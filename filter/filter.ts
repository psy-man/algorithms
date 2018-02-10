/**
 * Filters an array
 *
 * @param {Array} array
 * @param {Function} func
 * @returns {Array}
 */
export function filter(array: any[], func: Function): any[] {
  const result = [];

  for (const item of array) {
    if (func(item)) {
      result.push(item);
    }
  }

  return result;
}
  