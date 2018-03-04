import { assignDeep } from './assignDeep';


it('assignDeep', () => {
  expect(assignDeep({a: 1}, {})).toEqual({a: 1});
  expect(assignDeep({a: 1}, {a: 2})).toEqual({a: 2});
  expect(assignDeep({a: 1}, {a: {b: 2}})).toEqual({a: {b: 2}});
  expect(assignDeep({a: {b: {c: 1}}}, {a: {b: {d: 2}}, e: 3}, {k: 20})).toEqual({a: {b: {c: 1, d: 2}}, e: 3, k: 20});
});

