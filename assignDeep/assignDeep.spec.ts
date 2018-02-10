import test from 'ava';
import { assignDeep } from './assignDeep';


test(t => t.deepEqual(assignDeep({a: 1}, {}), {a: 1}));
test(t => t.deepEqual(assignDeep({a: 1}, {a: 2}), {a: 2}));
test(t => t.deepEqual(assignDeep({a: 1}, {a: {b: 2}}), {a: {b: 2}}));
test(t => t.deepEqual(
  assignDeep({a: {b: {c: 1}}}, {a: {b: {d: 2}}, e: 3}, {k: 20}),
  {a: {b: {c: 1, d: 2}}, e: 3, k: 20}
));
