import test from 'ava';
import { hasPairWithSum } from './pairWithSum';


test(t => t.is(hasPairWithSum([], 12), false));
test(t => t.is(hasPairWithSum([1, 2, 3, 4, 5, 9, 11, 16], 8), true));
test(t => t.is(hasPairWithSum([3, 7, 19], 12), false));

