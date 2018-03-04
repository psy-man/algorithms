import { binarySearch } from './binarySearch';


it('binarySearch', () => {
  expect(binarySearch([], 1, 0, 0)).toBe(undefined);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 0, 11)).toBe(1);
  expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 100, 0, 10)).toBe(undefined);
});
