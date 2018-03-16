import { List } from './list';


test('List', () => {
  const list = new List<string>();

  list
    .append('Test')
    .append('James')
    .append('Fred');

  expect(list.length()).toBe(3);

  expect(list.find('Test')).toBe(0);
  expect(list.find('Fred')).toBe(2);

  expect(list.remove('Unknown')).toBe(false);
  expect(list.remove('Test')).toBe(true);

  expect(list.insert('John', 'James')).toBe(true);
  expect(list.insert('New', 'Unknown')).toBe(false);

  expect(list.has('Test')).toBeFalsy();
  expect(list.has('Fred')).toBeTruthy();

  expect(Array.of(...list)).toEqual(['James', 'John', 'Fred']);

  list.clear();
  expect(list.length()).toBe(0);
  expect(Array.of(...list)).toEqual([]);
});
