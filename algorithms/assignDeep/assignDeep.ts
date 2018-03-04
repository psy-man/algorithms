/**
 * Deep assign
 *
 * @param {Object} left
 * @param other
 * @returns {Object}
 */
export function assignDeep(left: Object, ...other): Object {
  for (const o of other) {
    for (const [k, v] of Object.entries(o)) {

      if (typeof v === 'object') {
        if (typeof left[k] !== 'object') {
          left[k] = {};
        }

        assignDeep(left[k], v);
      } else {
        left[k] = v;
      }
    }
  }

  return left;
}
  