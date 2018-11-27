import { PriorityQueue } from './priorityQueue';


interface PriorityQueueValue {
  id: number;
  text: string;
}

test('PriorityQueue', () => {
  const queue = new PriorityQueue<PriorityQueueValue>();

  for (let i = 1; i <= 100; i += 1) {
    queue.push({ id: i, text: `This item has priority of ${i}` }, i);
  }

  expect(queue.isEmpty()).toBe(false);
  expect(queue.size()).toBe(100);
  expect(queue.top().priority).toBe(100);

  for (let i = 0; i < 50; i += 1) {
    queue.pop();
  }

  expect(queue.size()).toBe(50);
  expect(queue.top().priority).toBe(50);

  for (let i = 0; i < 50; i += 1) {
    queue.pop();
  }

  expect(queue.isEmpty()).toBe(true);
  expect(queue.size()).toBe(0);

  expect(queue.top()).toBe(null);
  expect(queue.pop()).toBe(null);
});
