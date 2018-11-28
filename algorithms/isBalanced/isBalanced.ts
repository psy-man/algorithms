import { Stack } from '../../data-structures/stack/stack';


/**
 * Checks if the braces are balanced
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isBalanced(str: string): boolean {
  const stack = new Stack<string>();

  const braces = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  for (const char of str) {
    if (isOpen(char)) {
      stack.push(char);
    } else if (isClose(char)) {
      const last = stack.pop();

      if (char !== braces[last]) {
        return false;
      }
    }
  }

  return stack.isEmpty();

  function isOpen(char) {
    return Object.keys(braces).includes(char);
  }

  function isClose(char) {
    return Object.values(braces).includes(char);
  }
}
