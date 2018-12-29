import { Queue } from './queue';


test('Queue', () => {
  const queue = new Queue<number>();

  queue.push(1);
  queue.push(2);
  queue.push(3);

  expect(queue.size()).toBe(3);
  expect(queue.top()).toBe(1);
  expect(queue.back()).toBe(3);

  expect(queue.pop()).toBe(1);
  expect(queue.size()).toBe(2);

  queue.clear();

  expect(queue.size()).toBe(0);
  expect(queue.isEmpty()).toBeTruthy();

  expect(queue.pop()).toBeNull();
  expect(queue.back()).toBeNull();
  expect(queue.top()).toBeNull();
});
