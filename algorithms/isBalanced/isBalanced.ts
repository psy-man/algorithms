/**
 * Checks if the braces are balanced
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isBalanced(str: string): boolean {
  const stack: string[] = [];
  const braces = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (isOpen(char)) {
      stack.push(char);
    } else if (isClose(char)) {
      const last = stack[stack.length - 1];

      if (char === braces[last]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;

  function isOpen(char) {
    return Object.keys(braces).includes(char);
  }

  function isClose(char) {
    return Object.values(braces).includes(char);
  }
}
