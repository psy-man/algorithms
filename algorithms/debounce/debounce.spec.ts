import { debounce } from './debounce';


it('debounce', (done) => {
  expect.assertions(2);
  let count = 0;

  let func = (...args) => {
    count += 1;

    expect(count).toBe(1);
    expect(args).toEqual(['test', 100]);
    done();
  };


  const dFunc = debounce(func, 400);
  dFunc(10);
  dFunc(50);
  dFunc('test', 100);
});
