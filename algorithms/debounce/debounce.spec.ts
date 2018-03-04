import test from 'ava';
import { debounce } from './debounce';


test.cb(t => {
  t.plan(2);
  let count = 0;

  let func = (...args) => {
    count += 1;

    t.is(count, 1);
    t.deepEqual(args, ['test', 100]);
    t.end();
  };


  const dFunc = debounce(func, 400);
  dFunc(10);
  dFunc(50);
  dFunc('test', 100);
});
