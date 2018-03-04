import { hasPairWithSum } from './pairWithSum';


it('hasPairWithSum', () => {
  expect(hasPairWithSum([], 12)).toBeFalsy();
  expect(hasPairWithSum([1, 2, 3, 4, 5, 9, 11, 16], 8)).toBeTruthy();
  expect(hasPairWithSum([3, 7, 19], 12)).toBeFalsy();
});


