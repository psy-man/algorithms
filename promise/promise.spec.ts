import test from 'ava';
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

test(async t => {
  const res = await new Promise(resolve => {
    getPromise()
      .then((res) => {
        resolve(res);
      });
  });

  t.is(res, 'test result');
});


test(async t => {
  const res = await new Promise(resolve => {
    getPromise(1000)
      .then((res) => {
        resolve(res);
      });
  });

  t.is(res, 'test result');
});
