/**
 * Node for a Linked List
 *
 * @template T
 */
class LinkedNode<T> {
  constructor(public data: T,
              public next: LinkedNode<T> = null) {
  }
}

/**
 * Linked List
 *
 * @property head - first node
 * @property tail - last node
 * @property length - the size
 * @template T
 */
export class LinkedList<T> {
  head: LinkedNode<T>;
  tail: LinkedNode<T>;
  length = 0;

  /**
   * Adds a new item to the end of the list
   *
   * @param {T} element
   */
  append(element: T): void {
    const node = new LinkedNode<T>(element);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
  }

  /**
   * Finds the node with specific value
   *
   * @param {T} element
   * @returns {LinkedNode<T> | null}
   */
  find(element: T): LinkedNode<T> | null {
    let current = this.head;

    while (current && current.data !== element) {
      current = current.next;
    }

    return current;
  }

  /**
   * Finds the previous node of the node with specific value
   *
   * @param {T} element
   * @returns {LinkedNode<T> | null}
   */
  findPrev(element: T): LinkedNode<T> | null {
    let current = this.head;

    while (current.next && current.next.data !== element) {
      current = current.next;
    }

    if (current === this.tail && this.tail.data !== element) {
      return null;
    }

    return current;
  }

  /**
   * Inserts element after the specified one
   *
   * @param {T} element
   * @param {T} after
   * @returns {boolean}
   */
  insert(element: T, after: T): boolean {
    const node = new LinkedNode<T>(element);
    const current = this.find(after);

    if (current) {
      node.next = current.next;
      current.next = node;

      this.length += 1;
      return true;
    }

    return false;
  }

  /**
   * Removes element from the list
   *
   * @param {T} element
   * @returns {boolean}
   */
  remove(element: T): boolean {
    const prev = this.findPrev(element);

    if (prev) {
      prev.next = prev.next.next;
      return true;
    }

    return false;
  }

  /**
   * Transforms the list into Array type
   *
   * @returns {T[]}
   */
  toArray(): T[] {
    if (this.length === 0) {
      return [];
    }

    const items = [];
    let current = this.head;

    while (current !== null) {
      items.push(current.data);

      current = current.next;
    }

    return items;
  }
}
