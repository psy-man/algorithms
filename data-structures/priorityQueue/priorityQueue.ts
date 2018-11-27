class PriorityQueueNode<T> {
  constructor(public value: T, public priority: number) {
  }
}

/**
 * PriorityQueue
 * At first, we pop the value with highest priority
 *
 * Gonna use the HEAP data structure
 */
export class PriorityQueue<T> {
  private heap: PriorityQueueNode<T>[] = [null];

  /**
   * Adds item to the Queue
   * O(logN)
   *
   * @param value
   * @param priority
   */
  push(value: T, priority: number): void {
    this.heap.push(new PriorityQueueNode<T>(value, priority));

    // first element
    if (this.size() === 1) {
      return;
    }

    let currentIdx = this.size();

    while (this.hasParent(currentIdx) && this.parentPriority(currentIdx) < this.getPriority(currentIdx)) {
      const parentIdx = this.getParentIdx(currentIdx);

      this.swap(currentIdx, parentIdx);
      currentIdx = parentIdx;
    }
  }

  /**
   * Returns and removes the value with the highest priority
   * O(logN)
   */
  pop(): PriorityQueueNode<T> {
    if (this.isEmpty()) {
      return null;
    }

    // the last one
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const top = this.top();
    this.heap[1] = this.heap.pop();

    let currentIdx = 1;

    while (this.hasLeft(currentIdx)) {
      let minChildIdx = this.getLeftIdx(currentIdx);
      if (this.hasRight(currentIdx) && this.rightPriority(currentIdx) > this.leftPriority(currentIdx)) {
        minChildIdx = this.getRightIdx(currentIdx);
      }

      if (this.getPriority(currentIdx) > this.getPriority(minChildIdx)) {
        break;
      }

      this.swap(currentIdx, minChildIdx);
      currentIdx = minChildIdx;
    }

    return top;
  }

  /**
   * Returns the value with the highest priority
   * O(1)
   */
  top(): PriorityQueueNode<T> {
    if (this.isEmpty()) {
      return null;
    }

    return this.heap[1];
  }

  /**
   * Returns the size of the queue
   * O(1)
   */
  size(): number {
    return this.heap.length - 1
  }

  /**
   * Returns the size of the queue
   * O(1)
   */
  isEmpty(): boolean {
    return this.size() === 0
  }

  // Helpers

  private getLeftIdx(idx): number {
    return idx * 2
  }

  private hasLeft(idx): boolean {
    return !!this.heap[this.getLeftIdx(idx)]
  }

  private leftPriority(idx): number {
    return this.heap[this.getLeftIdx(idx)].priority
  }

  private getRightIdx(idx): number {
    return idx * 2 + 1
  }

  private hasRight(idx): boolean {
    return !!this.heap[this.getRightIdx(idx)]
  }

  private rightPriority(idx): number {
    return this.heap[this.getRightIdx(idx)].priority
  }

  private getParentIdx(idx): number {
    return idx >> 1
  }

  private hasParent(idx): boolean {
    return !!this.heap[this.getParentIdx(idx)]
  }

  private parentPriority(idx): number {
    return this.heap[this.getParentIdx(idx)].priority
  }

  private getPriority(idx): number {
    return this.heap[idx].priority
  }

  private swap(left: number, rigth: number) {
    const temp = this.heap[left];
    this.heap[left] = this.heap[rigth];
    this.heap[rigth] = temp;
  }
}
