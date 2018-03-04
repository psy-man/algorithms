import { isPalindrome } from './isPalindrome';


it('isPalindrome', () => {
  expect(isPalindrome('')).toBe(true);
  expect(isPalindrome('abcdcba')).toBe(true);
  expect(isPalindrome('abcd')).toBe(false);
  expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  expect(isPalindrome(`lo   l`)).toBe(true);
});

