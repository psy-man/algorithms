/**
 * Debounce
 *
 * @param {Function} func
 * @param {number} delay
 * @returns {(args) => void}
 */
export function debounce(func: Function, delay: number = 0) {
  let timer = null;

  return function (...args) {
    const later = () => func.apply(this, args);

    clearTimeout(timer);
    timer = setTimeout(later, delay);
  }
}
