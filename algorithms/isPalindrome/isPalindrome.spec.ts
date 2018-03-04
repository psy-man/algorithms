import { isPalindrome } from './isPalindrome';


test('isPalindrome', () => {
  expect(isPalindrome('')).toBeTruthy();
  expect(isPalindrome('abcdcba')).toBeTruthy();
  expect(isPalindrome('abcd')).toBeFalsy();
  expect(isPalindrome('A man a plan a canal Panama')).toBeTruthy();
  expect(isPalindrome(`lo   l`)).toBeTruthy();
});

