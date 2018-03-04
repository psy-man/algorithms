import { reduce } from './reduce';


test('reduce', () => {
  expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10);
  expect(reduce([1, 2, 3, 4, 1, 4, 2, 1], (a, b) => a.add(b), new Set()))
    .toEqual(new Set([1, 2, 3, 4]));
});

