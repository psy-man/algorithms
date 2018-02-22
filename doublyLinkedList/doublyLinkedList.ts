/**
 * Node for Doubly Linked List
 * @property data - value of node
 * @property prev - link to the previous node or null
 * @property next - link to the next node or null
 * @template T
 */
class LinkedNode<T> {
  constructor(public data: T,
              public prev: LinkedNode<T>,
              public next: LinkedNode<T>) {
  }

  has(value: T): boolean {
    if (this.data === value) {
      return true;
    }

    return this.next !== null ? this.next.has(value) : false;
  }

  traverse(forwards = true, acc: T[]): T[] {
    acc.push(this.data);

    const next = forwards ? this.next : this.prev;
    return next !== null ? next.traverse(forwards, acc) : acc;
  }
}

/**
 * Doubly Linked List
 *
 * @property head - first node
 * @property tail - last node
 * @property length - the size
 * @template T
 */
export class DoublyLinkedList<T> {
  head: LinkedNode<T>;
  tail: LinkedNode<T>;
  length = 0;

  /**
   * Adds a new item to the end of the list
   *
   * @param {T} value
   * @returns {DoublyLinkedList<T>}
   */
  append(value: T): DoublyLinkedList<T> {
    const node = new LinkedNode<T>(value, null, null);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length += 1;

    return this;
  }

  /**
   * Adds new item to the beginning of the list
   *
   * @param {T} value
   * @returns {DoublyLinkedList<T>}
   */
  prepend(value: T): DoublyLinkedList<T> {
    if (this.length === 0) {
      return this.append(value);
    }

    const node = new LinkedNode<T>(value, null, this.head);

    this.head.prev = node;
    this.head = node;

    this.length += 1;

    return this;
  }

  /**
   * Checks if the list contains the value
   *
   * @param {T} value
   * @returns {boolean}
   */
  has(value: T): boolean {
    if (this.length === 0) {
      return false;
    }

    return this.head.has(value);
  }

  /**
   * Got the list in array representation
   *
   * @param {boolean} forwards - the direction
   * @returns {T[]}
   */
  traverse(forwards = true): T[] {
    if (this.length === 0) {
      return [];
    }

    const node = forwards ? this.head : this.tail;

    return node.traverse(forwards, []);
  }
}





