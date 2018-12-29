import { Stack } from './stack';


test('Stack', () => {
  const stack = new Stack<number>();

  expect(stack.top()).toBeNull();
  expect(stack.pop()).toBeNull();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.size()).toBe(3);
  expect(stack.top()).toBe(3);

  expect(stack.pop()).toBe(3);
  expect(stack.top()).toBe(2);

  stack.clear();

  expect(stack.size()).toBe(0);
  expect(stack.pop()).toBeNull();
});
