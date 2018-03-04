import { hasPairWithSum } from './pairWithSum';


it('hasPairWithSum', () => {
  expect(hasPairWithSum([], 12)).toBe(false);
  expect(hasPairWithSum([1, 2, 3, 4, 5, 9, 11, 16], 8)).toBe(true);
  expect(hasPairWithSum([3, 7, 19], 12)).toBe(false);
});


