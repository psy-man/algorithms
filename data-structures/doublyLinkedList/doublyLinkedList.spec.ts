import test from 'ava';
import { DoublyLinkedList } from './doublyLinkedList';


test(t => {
  const list = new DoublyLinkedList<number>();

  t.is(list.has(1), false);
  t.deepEqual(list.traverse(), []);

  list
    .append(2)
    .append(3)
    .prepend(1)
    .append(4)
    .append(5);

  t.is(list.has(1), true);
  t.is(list.has(3), true);
  t.is(list.has(6), false);

  t.deepEqual(list.traverse(), [ 1, 2, 3, 4, 5 ]);
  t.deepEqual(list.traverse(false), [ 5, 4, 3, 2, 1 ]);
});
