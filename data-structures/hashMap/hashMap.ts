/**
 * Simple implementation of Hash Table
 */
export class HashMap {
  public count = 0;
  private data = [];

  constructor(public limit) {
  }

  /**
   * Adds new item
   *
   * @param {string} key
   * @param {string} value
   * @returns {HashMap}
   */
  set(key: string, value: string): HashMap {
    const index = this.hash(key);

    let bucket = this.data[ index ];

    if (!bucket) {
      bucket = [];
      this.data[ index ] = bucket;
    }

    let override = false;

    for (let i = 0; i < bucket.length; i += 1) {
      const tuple = bucket[ i ];

      if (tuple[ 0 ] === key) {
        tuple[ 1 ] = value;
        override = true;
      }
    }

    if (!override) {
      bucket.push([ key, value ]);
      this.count += 1;

      if (this.count > this.limit * 0.75) {
        this.resize(this.limit * 2);
      }
    }

    return this;
  }

  /**
   * Return the value of key
   * or undefined if element isn't present
   *
   * @param {string} key
   * @returns {string | undefined}
   */
  get(key: string): string | undefined {
    const bucket = this.getBucket(key);

    if (!bucket) {
      return undefined;
    }

    for (const item of bucket) {
      if (item[ 0 ] === key) {
        return item[ 1 ];
      }
    }

    return undefined;
  }

  /**
   * Removes the element
   * if element was removed, it returns true
   * otherwise - false
   *
   * @param {string} key
   * @returns {boolean}
   */
  delete(key: string): boolean {
    const bucket = this.getBucket(key);

    if (!bucket) {
      return false;
    }

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[ i ];


      if (tuple[ 0 ] === key) {
        bucket.splice(i, 1);
        this.count -= 1;

        if (this.count < this.limit * 0.25) {
          this.resize(this.limit / 2);
        }

        return true;
      }
    }

    return false;
  }

  /**
   * Changes the size of hash map
   *
   * @param size
   */
  resize(size) {
    const oldData = this.data;

    this.limit = size;
    this.count = 0;
    this.data = [];

    for (const bucket of oldData) {
      if (bucket) {
        for (const [ key, value ] of bucket) {
          this.set(key, value);
        }
      }
    }
  }

  /**
   * Hashes the key
   *
   * @param {string} key
   * @returns {number}
   */
  private hash(key: string): number {
    let hash = 0;

    for (const letter of key) {
      hash = (hash << 5) + letter.charCodeAt(0);
      hash = (hash & hash) % this.limit;
    }

    return hash;
  }

  /**
   * Returns the bucket
   *
   * @param {string} key
   * @returns {string[] | undefined}
   */
  private getBucket(key: string): string[] | undefined {
    const index = this.hash(key);
    return this.data[ index ];
  }
}
