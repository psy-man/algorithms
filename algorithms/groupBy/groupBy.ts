/**
 * Groups an array by property or function result
 *
 * @param {Array} array
 * @param {string | Function} by
 * @returns {Object}
 */
export function groupBy(array: any[], by: string | Function): Object {
  return array.reduce((acc, cur) => {
    const key = typeof by === 'string' ? cur[by] : by(cur);

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(cur);
    return acc;
  }, {})
}
