**Hash Map**

Implementation of [https://en.wikipedia.org/wiki/Hash_table](https://en.wikipedia.org/wiki/Hash_table)

```
const hashMap = new HashMap(100);

hashMap
  .set('Theodore Handle', '12-01-1930')
  .set('Bartholomew Shoe', '20-09-1970')
  .set('Jonquil Von Haggerston', '12-11-1970')
  .set('Abraham Pigeon', '01-01-1999')
  .set('Abraham Pigeon', '10-10-2010');
  
hashMap.get('Abraham Pigeon'); // '10-10-2010'
hashMap.delete('Theodore Handle'); // true
```
