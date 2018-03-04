import test from 'ava';
import { missing } from './missing';


test(t => t.is(missing([]), undefined));
test(t => t.is(missing([1, 4, 3]), 2));
test(t => t.is(missing([2, 3, 4]), 1));
test(t => t.is(missing([5, 1, 4, 2]), 3));
test(t => t.is(missing([1, 2, 3, 4, 5, 6, 7, 8, 9]), undefined));
test(t => t.is(missing([5, 6, 3, 2, 4, 1, 8]), 7));