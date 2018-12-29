import { Trie } from './trie';


test('Trie', () => {
  const trie = new Trie(['time', 'timer']);

  expect(trie.has('tim')).toBe(false);
  expect(trie.has('time')).toBe(true);
  expect(trie.has('timer')).toBe(true);

  trie.add('tea');
  trie.add('ted');
  trie.add('ten');
  trie.add('teddy');
  trie.add('traffic');
  trie.add('te');

  trie.add('Eugene');
  trie.add('eureka');
  trie.add('env');

  expect(trie.has('terra')).toBe(false);
  expect(trie.has('traffic')).toBe(true);

  expect(trie.find('some')).toEqual([]);
  expect(trie.find('te')).toEqual(['te', 'tea', 'ted', 'teddy', 'ten']);
  expect(trie.find('e')).toEqual(['eureka', 'env']);

  expect(trie.delete('traffic')).toBe(true);
  expect(trie.delete('tra')).toBe(false);
  expect(trie.delete('te')).toBe(true);

  expect(trie.has('te')).toBe(false);
  expect(trie.has('traffic')).toBe(false);

  expect(trie.getAll()).toEqual(['time', 'timer', 'tea', 'ted', 'teddy', 'ten', 'Eugene', 'eureka', 'env']);
});
