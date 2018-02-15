import test from 'ava';
import { isPalindrome } from './isPalindrome';


test(t => t.is(isPalindrome(''), true));
test(t => t.is(isPalindrome('abcdcba'), true));
test(t => t.is(isPalindrome('abcd'), false));
test(t => t.is(isPalindrome('A man a plan a canal Panama'), true));
test(t => t.is(isPalindrome(`lo   l`), true));
