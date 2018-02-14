**Debounce**

Creates a debounced function that delays invoking func until after 
wait milliseconds have elapsed since the last time the debounced 
function was invoked. 

```
cosnt func = () => console.log('test');
const dFunc = debounce(func, 400);

dFunc();
dFunc();
dFunc('yo'); // only this call should invoke func() with argument 'yo' after 400ms
```
  