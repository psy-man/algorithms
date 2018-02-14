import { reverse } from '../reverse/reverse';


/**
 * Checks if the string is palindrome
 *
 * @param {string} str
 * @returns {boolean}
 */
export function isPalindrome(str: string): boolean {
  const string = str.toLowerCase().replace(/ /g, '');

  return string === reverse(string);
}
