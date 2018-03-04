import { DoublyLinkedList } from './doublyLinkedList';


test('DoublyLinkedList', () => {
  const list = new DoublyLinkedList<number>();

  expect(list.has(1)).toBeFalsy();
  expect(list.traverse()).toEqual([]);

  list
    .append(2)
    .append(3)
    .prepend(1)
    .append(4)
    .append(5);

  expect(list.has(1)).toBeTruthy();
  expect(list.has(3)).toBeTruthy();
  expect(list.has(6)).toBeFalsy();

  expect(list.traverse()).toEqual([1, 2, 3, 4, 5]);
  expect(list.traverse(false)).toEqual([5, 4, 3, 2, 1]);
});
