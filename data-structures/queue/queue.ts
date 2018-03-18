/**
 * Queue
 * follows the FIFO (first in first out) operation
 *
 * @template T
 */
export class Queue<T> {
  private data: T[] = [];

  /**
   * Add element to the queue
   *
   * @param {T} element
   */
  enqueue(element: T): void {
    this.data.push(element);
  }

  /**
   * Gets the first element of the queue
   *
   * @returns {T}
   */
  front(): T {
    return this.data[0];
  }

  /**
   * Removes the first element of the queue
   *
   * @returns {T | undefined}
   */
  dequeue(): T | undefined {
    return this.data.shift();
  }

  /**
   * Returns the last element of the queue
   *
   * @returns {T}
   */
  back(): T {
    return this.data[this.length() - 1];
  }

  /**
   * Resets the queue
   */
  clear(): void {
    this.data = [];
  }

  /**
   * Checks if the queue is empty
   *
   * @returns {boolean}
   */
  isEmpty(): boolean {
    return this.length() === 0;
  }

  /**
   * Returns the size of the queue
   *
   * @returns {number}
   */
  length(): number {
    return this.data.length;
  }
}
