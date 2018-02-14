/**
 * Recursively flattens array
 *
 * @param {Array} array
 * @returns {number[]}
 */
export function flattenDeep(array: any[]): number[] {
  if (Array.isArray(array)) {
    return array.reduce((p, n) => [...flattenDeep(p), ...flattenDeep(n)], []);
  }

  return [array];
}
