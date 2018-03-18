import { Queue } from './queue';


test('Queue', () => {
  const queue = new Queue<number>();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.length()).toBe(3);
  expect(queue.front()).toBe(1);
  expect(queue.back()).toBe(3);

  expect(queue.dequeue()).toBe(1);
  expect(queue.length()).toBe(2);

  queue.clear();

  expect(queue.length()).toBe(0);
  expect(queue.isEmpty()).toBeTruthy();

  expect(queue.dequeue()).toBeUndefined();
  expect(queue.back()).toBeUndefined();
  expect(queue.front()).toBeUndefined();
});
