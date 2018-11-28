/**
 * Node for a Linked List
 */
class LinkedNode<T> {
  constructor(public value: T, public next: LinkedNode<T> = null) {
  }
}

/**
 * Linked List
 *
 * @property head - first node
 * @property tail - last node
 * @property length - the size
 */
export class LinkedList<T> {
  private head: LinkedNode<T>;
  private tail: LinkedNode<T>;

  private length = 0;

  /**
   * Adds a new item to the end of the list
   * O(1)
   *
   * @param element
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
   * Adds a new item to the start of the list
   * O(1)
   *
   * @param element
   */
  prepend(element: T): void {
    const node = new LinkedNode<T>(element);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length += 1;
  }

  /**
   * Finds the node with specific value
   * O(n)
   *
   * @param element
   */
  find(element: T): LinkedNode<T> | null {
    let current = this.head;

    while (current && current.value !== element) {
      current = current.next;
    }

    return current;
  }

  /**
   * Finds the previous node of the node with specific value
   *
   * @param element
   */
  findPrev(element: T): LinkedNode<T> | null {
    let current = this.head;

    while (current.next && current.next.value !== element) {
      current = current.next;
    }

    if (current === this.tail && this.tail.value !== element) {
      return null;
    }

    return current;
  }

  /**
   * Inserts element after the specified one
   *
   * @param element
   * @param after
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
   * @param element
   */
  remove(element: T): boolean {
    if (this.head.value === element) {
      return this.removeFirst();
    }

    const prev = this.findPrev(element);

    if (prev) {
      prev.next = prev.next.next;
      this.length -= 1;
      return true;
    }

    return false;
  }

  /**
   * Removes the head
   */
  removeFirst(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.head = this.head.next;
    this.length -= 1;
    return true;
  }

  /**
   * Return the first value
   */
  getHeadValue(): T {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

  /**
   * Return the last value
   */
  getTailValue(): T {
    if (this.isEmpty()) {
      return null;
    }

    return this.tail.value;
  }

  /**
   * Returns the size of the list
   */
  size(): number {
    return this.length;
  }

  /**
   * Checks if the list is empty
   * O(1)
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * Transforms the list into Array type
   */
  toArray(): T[] {
    if (this.length === 0) {
      return [];
    }

    const items = [];
    let current = this.head;

    while (current !== null) {
      items.push(current.value);

      current = current.next;
    }

    return items;
  }
}
