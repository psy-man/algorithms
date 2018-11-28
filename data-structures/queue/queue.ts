/**
 * Queue
 * follows the FIFO (first in first out) operation
 *
 * @template T
 */
import { LinkedList } from '../linkedList/linkedList';


/**
 * Queue
 * O(1) for all operations
 */
export class Queue<T> {
  private list = new LinkedList<T>();

  /**
   * Adds the element to the queue
   * O(1)
   *
   * @param element
   */
  push(element: T): void {
    this.list.append(element);
  }

  /**
   * Returns the first element of the queue
   * O(1)
   */
  top(): T {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.getHeadValue();
  }

  /**
   * Removes the first element of the queue
   * O(1)
   */
  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.list.getHeadValue();
    this.list.removeFirst();
    return value;
  }

  /**
   * Returns the last element of the queue
   * O(1)
   */
  back(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.getTailValue();
  }

  /**
   * Resets the queue
   * O(1)
   */
  clear(): void {
    this.list = new LinkedList<T>();
  }

  /**
   * Checks if the queue is empty
   * O(1)
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Returns the size of the queue
   * O(1)
   */
  size(): number {
    return this.list.size();
  }
}
