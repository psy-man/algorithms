import test from 'ava';
import { groupBy } from './groupBy';


test(t => t.deepEqual(
  groupBy(['one', 'two', 'three'], 'length'),
  {3: ['one', 'two'], 5: ['three']})
);

test(t => t.deepEqual(
  groupBy([1.3, 2.1, 2.4], Math.floor),
  {1: [1.3], 2: [2.1, 2.4]})
);

test(t => t.deepEqual(
  groupBy([{years: 30, name: 'John'}, {years: 26, name: 'Eugene'}, {years: 30, name: 'Chris'}], 'years'),
  {26: [{years: 26, name: 'Eugene'}], 30: [{years: 30, name: 'John'}, {years: 30, name: 'Chris'}]})
);
