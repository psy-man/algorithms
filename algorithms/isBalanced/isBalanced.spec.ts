import { isBalanced } from './isBalanced';


it('isBalanced', () => {
  expect(isBalanced('{')).toBe(false);
  expect(isBalanced('}')).toBe(false);
  expect(isBalanced('}{')).toBe(false);
  expect(isBalanced('()')).toBe(true);
  expect(isBalanced(`const d = () => ({['key']: [9]})`)).toBe(true);
  expect(isBalanced(`function test() {`)).toBe(false);
  expect(isBalanced(`[(])`)).toBe(false);
  expect(isBalanced(`[({})]`)).toBe(true);
  expect(isBalanced(`[()]{}{[()()]()}`)).toBe(true);
});

