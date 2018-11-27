/**
 * Checks if the string is palindrome
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isPalindrome(str: string): boolean {
  const string = str.toLowerCase().replace(/[^\w\d]/g, '');

  for (let i = 0; i < string.length / 2; i += 1) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }

  return true;
}
