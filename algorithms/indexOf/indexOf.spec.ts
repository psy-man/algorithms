import { indexOf } from './indexOf';


test('indexOf', () => {
  expect(indexOf([1, 2, 3], 1)).toBe(0);
  expect(indexOf([1, 2, 3], 4)).toBe(-1);
  expect(indexOf([1, 2, 3, 4, 5, 1], 1, 3)).toBe(5);
});

