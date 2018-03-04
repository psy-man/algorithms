import { MyPromise } from './promise';


function getPromise(timeout = null) {
  return new MyPromise((res) => {
    if (timeout) {
      setTimeout(() => {
        res('test result');
      }, timeout);
    } else {
      res('test result');
    }
  })
}

it('MyPromise', async () => {
  expect(await new Promise(resolve => {
    getPromise()
      .then((res) => {
        resolve(res);
      });
  })).toBe('test result');

  expect(await new Promise(resolve => {
    getPromise(1000)
      .then((res) => {
        resolve(res);
      });
  })).toBe('test result');
});
