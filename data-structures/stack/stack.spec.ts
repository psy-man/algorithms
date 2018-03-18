import { Stack } from './stack';


test('Stack', () => {
  const stack = new Stack<number>();

  expect(stack.pop()).toBeUndefined();
  expect(stack.pop()).toBeUndefined();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.length()).toBe(3);
  expect(stack.peek()).toBe(3);

  expect(stack.pop()).toBe(3);
  expect(stack.peek()).toBe(2);

  stack.clear();

  expect(stack.length()).toBe(0);
  expect(stack.pop()).toBeUndefined();
});
