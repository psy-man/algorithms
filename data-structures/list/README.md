**List as ADT**


```
const list = new List<string>();

list
  .append('Test')
  .append('James')
  .append('Fred');
  
list.has('James'); // true
list.remove('Test'); // true
  
for (const element of list) {
  cosole.log(element); // James, Fred
}

list.clear();

```
