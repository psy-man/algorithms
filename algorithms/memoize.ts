/**
 * Caches function results
 *
 * @param {Function} fn
 * @returns {(value) => any}
 */
export function memoize(fn: Function) {
  const cache = new Map();

  return value => {
    if (!cache.has(value)) {
      cache.set(value, fn(value));
    }

    return cache.get(value);
  }
}