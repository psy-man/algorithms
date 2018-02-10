import test from 'ava';
import { reduce } from './reduce';


test(t => t.is(
  reduce([1, 2, 3, 4], (a, b) => a + b, 0),
  10
));

test(t => t.deepEqual(
  reduce([1, 2, 3, 4, 1, 4, 2, 1], (a, b) => a.add(b), new Set()),
  new Set([1, 2, 3, 4])
));
  