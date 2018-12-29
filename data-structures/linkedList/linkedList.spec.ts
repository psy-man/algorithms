import { LinkedList } from './linkedList';


test('LinkedList', () => {
  const list = new LinkedList<string>();

  list.append('1');
  list.append('2');
  list.append('3');
  list.append('4');
  list.append('5');

  expect(list.size()).toBe(5);

  expect(list.insert('3.1', '3')).toBeTruthy();
  expect(list.insert('100', '100')).toBeFalsy();

  expect(list.remove('3')).toBeTruthy();
  expect(list.remove('33')).toBeFalsy();

  expect(list.find('4').value).toBe('4');
  expect(list.find('43')).toBeNull();

  expect(list.toArray()).toEqual(['1', '2', '3.1', '4', '5']);

  expect(list.remove('1')).toBeTruthy();
  expect(list.size()).toBe(4);
  expect(list.toArray()).toEqual(['2', '3.1', '4', '5']);
});
