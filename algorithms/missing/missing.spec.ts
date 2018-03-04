import { missing } from './missing';


it('missing', () => {
  expect(missing([])).toBeUndefined();
  expect(missing([1, 4, 3])).toBe(2);
  expect(missing([2, 3, 4])).toBe(1);
  expect(missing([5, 1, 4, 2])).toBe(3);
  expect(missing([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBeUndefined();
  expect(missing([5, 6, 3, 2, 4, 1, 8])).toBe(7);
});

