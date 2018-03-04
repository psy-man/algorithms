import { HashMap } from './hashMap';


test('HashMap', () => {
  const hashMap = new HashMap(1);

  hashMap
    .set('Theodore Handle', '12-01-1930')
    .set('Bartholomew Shoe', '20-09-1970')
    .set('Jonquil Von Haggerston', '12-11-1970');

  expect(hashMap.count).toBe(3);
  expect(hashMap.limit).toBe(4);

  hashMap
    .set('Abraham Pigeon', '01-01-1999')
    .set('Abraham Pigeon', '10-10-2010');

  expect(hashMap.get('Abraham Pigeon')).toBe('10-10-2010');

  expect(hashMap.count).toBe(4);
  expect(hashMap.limit).toBe(8);

  expect(hashMap.delete('Unknown Smith')).toBeFalsy();
  expect(hashMap.delete('Bartholomew Shoe')).toBeTruthy();

  expect(hashMap.count).toBe(3);
  expect(hashMap.get('Bartholomew Shoe')).toBeUndefined();

  expect(hashMap.delete('Theodore Handle')).toBeTruthy();
  expect(hashMap.delete('Jonquil Von Haggerston')).toBeTruthy();
  expect(hashMap.delete('Abraham Pigeon')).toBeTruthy();

  expect(hashMap.count).toBe(0);
  expect(hashMap.limit).toBe(2);
});
