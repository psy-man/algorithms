import test from 'ava';
import { flattenDeep } from './flattenDeep';


test(t => t.deepEqual(flattenDeep([[1, 2, 3], [4, 5, 6]]), [1, 2, 3, 4, 5, 6]));
test(t => t.deepEqual(flattenDeep([1, [[2], [3, [4]], 5]]), [1, 2, 3, 4, 5]));
