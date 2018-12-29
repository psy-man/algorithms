import { LinkedList } from '../linkedList/linkedList';


/**
 * Stack
 * follows the LIFO (last in first out) operation
 * O(1) for all operations
 */
export class Stack<T> {
  private list = new LinkedList<T>();

  /**
   * Adds element to the stack
   * O(1)
   *
   * @param element
   */
  push(element: T): void {
    this.list.prepend(element);
  }

  /**
   * Returns the top element of the stack
   * O(1)
   */
  top(): T {
    if (this.isEmpty()) {
      return null;
    }

    return this.list.getHeadValue();
  }

  /**
   * Returns and removes the first element of the stack
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
   * Checks if the stack is empty
   * O(1)
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Resets the stack
   * O(1)
   */
  clear(): void {
    this.list = new LinkedList<T>();
  }

  /**
   * Returns the size of the stack
   * O(1)
   */
  size(): number {
    return this.list.size();
  }
}
