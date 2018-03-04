import test from 'ava';
import { HashMap } from './hashMap';


test(t => {
  const hashMap = new HashMap(1);

  hashMap
    .set('Theodore Handle', '12-01-1930')
    .set('Bartholomew Shoe', '20-09-1970')
    .set('Jonquil Von Haggerston', '12-11-1970');

  t.is(hashMap.count, 3);
  t.is(hashMap.limit, 4);

  hashMap
    .set('Abraham Pigeon', '01-01-1999')
    .set('Abraham Pigeon', '10-10-2010');

  t.is(hashMap.get('Abraham Pigeon'), '10-10-2010');

  t.is(hashMap.count, 4);
  t.is(hashMap.limit, 8);

  t.is(hashMap.delete('Unknown Smith'), false);
  t.is(hashMap.delete('Bartholomew Shoe'), true);

  t.is(hashMap.count, 3);
  t.is(hashMap.get('Bartholomew Shoe'), undefined);

  t.is(hashMap.delete('Theodore Handle'), true);
  t.is(hashMap.delete('Jonquil Von Haggerston'), true);
  t.is(hashMap.delete('Abraham Pigeon'), true);

  t.is(hashMap.count, 0);
  t.is(hashMap.limit, 2);
});
