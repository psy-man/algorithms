/**
 * List of ADT
 *
 * @template T
 */
export class List<T> {
  private size = 0;
  private pos = -1;

  private data: T[] = [];

  /**
   * Adds new element at the end of the list
   *
   * @param {T} element
   * @returns {List<T>}
   */
  append(element: T): List<T> {
    this.data[this.size] = element;
    this.size += 1;

    return this;
  }

  /**
   * Finds the index of element
   * If element not found: -1
   *
   * @param {T} element
   * @returns {number}
   */
  find(element: T): number {
    for (let i = 0; i < this.data.length; i += 1) {
      if (this.data[i] === element) {
        return i;
      }
    }

    return -1;
  }

  /**
   * Removes element from the list
   *
   * @param {T} element
   * @returns {boolean}
   */
  remove(element: T): boolean {
    const index = this.find(element);

    if (index > -1) {
      this.data.splice(index, 1);
      this.size -= 1;

      return true;
    }

    return false;
  }

  /**
   * Append element after specific item
   *
   * @param {T} element
   * @param {T} after
   * @returns {boolean}
   */
  insert(element: T, after: T): boolean {
    const index = this.find(after);

    if (index > -1) {
      this.data.splice(index + 1, 0, element);
      this.size += 1;

      return true;
    }

    return false;
  }

  /**
   * Checks if list contains this element
   *
   * @param {T} element
   * @returns {boolean}
   */
  has(element: T): boolean {
    return this.find(element) > -1;
  }

  /**
   * Creates an iterator through list
   *
   * @returns {Object}
   */
  [Symbol.iterator]() {
    this.pos = -1;

    return {
      next: () => ({
        value: this.data[++this.pos],
        done: !this.data[this.pos]
      })
    }
  }

  /**
   * Removes all items from a list
   */
  clear(): void {
    this.data = [];
    this.size = 0;
    this.pos = 0;
  }


  /**
   * Returns the size of list
   *
   * @returns {number}
   */
  length(): number {
    return this.size;
  }
}


