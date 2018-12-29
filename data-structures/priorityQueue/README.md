**Priority Queue**

https://en.wikipedia.org/wiki/Priority_queue


```
const queue = new PriorityQueue<PriorityQueueValue>();

queue.enqueue(1, 1);
queue.enqueue(2, 2);
queue.enqueue(3, 3);

queue.size(); // 3

queue.top(); // 3
queue.pop(); // 3

queue.top(); // 2
```
