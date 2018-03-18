/**
 * Stack
 * follows the LIFO (last in first out) operation
 *
 * @template T
 */
export class Stack<T> {
  private data: T[] = [];
  private top = 0;

  /**
   * Adds element to the stack
   *
   * @param {T} element
   */
  push(element: T): void {
    this.data[this.top] = element;
    this.top += 1;
  }

  /**
   * Returns the last element of the stack and decrements pointer to last element
   * if the stack is empty - undefined
   *
   * @returns {T | undefined}
   */
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    this.top -= 1;
    return this.data[this.top];
  }

  /**
   * Returns the top element of the stack
   * if the stack is empty - undefined
   *
   * @returns {T | undefined}
   */
  peek(): T | undefined {
    return this.data[this.top - 1];
  }

  /**
   * Checks if the stack is empty
   *
   * @returns {boolean}
   */
  isEmpty(): boolean {
    return this.top === 0;
  }

  /**
   * Resets the stack
   */
  clear(): void {
    this.top = 0;
  }

  /**
   * Returns the size of the stack
   *
   * @returns {number}
   */
  length(): number {
    return this.top;
  }
}
