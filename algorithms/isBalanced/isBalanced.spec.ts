import { isBalanced } from './isBalanced';


it('isBalanced', () => {
  expect(isBalanced('{')).toBeFalsy();
  expect(isBalanced('}')).toBeFalsy();
  expect(isBalanced('}{')).toBeFalsy();
  expect(isBalanced('()')).toBeTruthy();
  expect(isBalanced(`const d = () => ({['key']: [9]})`)).toBeTruthy();
  expect(isBalanced(`function test() {`)).toBeFalsy();
  expect(isBalanced(`[(])`)).toBeFalsy();
  expect(isBalanced(`[({})]`)).toBeTruthy();
  expect(isBalanced(`[()]{}{[()()]()}`)).toBeTruthy();
});

