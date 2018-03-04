/**
 * Simple Promise solution
 * TODO: to be improved
 */
export class MyPromise {
  onFulfilled;

  constructor(private resolveCb: Function) {
    resolveCb(this.resolve.bind(this));
  }

  resolve(result) {
    setTimeout(this.handle.bind(this, result), 0);
  }

  then(cb: Function) {
    this.onFulfilled = cb;
  }

  private handle(result) {
    this.onFulfilled(result);
  }
}
