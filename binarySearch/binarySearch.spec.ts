import test from 'ava';
import { binarySearch } from './binarySearch';


test(t => t.is(binarySearch([], 1, 0, 0), undefined));
test(t => t.is(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 0, 11), 1));
test(t => t.is(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 100, 0, 10), undefined));
