**Implement simple promise**

```
const promise = new MyPromise((res) => {
    setTimeout(() => {
        res('result');
    }, 1000);
});

promise.then((result) => {
    console.log(result); // 'result'
})
```