import test from 'ava';
import { indexOf } from './indexOf';


test(t => t.is(indexOf([1, 2, 3], 1), 0));
test(t => t.is(indexOf([1, 2, 3], 4), -1));
test(t => t.is(indexOf([1, 2, 3, 4, 5, 1], 3), -1));
