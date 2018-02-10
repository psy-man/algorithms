**Memoization**

Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again

```
expensive(1);  // this takes 500ms
expensive(1); // this takes 0ms
expensive(2); // this takes 500ms
```