export enum TraverseDirection {
  inOrder = 'inOrder',
  preOrder = 'preOrder',
  postOrder = 'postOrder',
}

export class BinarySearchTreeNode<T> {
  constructor(
    public data: T,
    public left: BinarySearchTreeNode<T> = null,
    public right: BinarySearchTreeNode<T> = null) {
  }
}

export class BinarySearchTree<T> {
  private root: BinarySearchTreeNode<T> = null;

  insert(element: T) {
    const node = new BinarySearchTreeNode(element);

    if (this.root === null) {
      this.root = node;
      return;
    }

    let current = this.root;
    let parent: BinarySearchTreeNode<T>;

    while (true) {
      parent = current;
      const direction = element < current.data ? 'left' : 'right';

      current = current[direction];

      if (current === null) {
        parent[direction] = node;
        break;
      }
    }
  }

  traverse(order: TraverseDirection, result: T[] = []): T[] {
    this[order](this.root, result);

    return result;
  }

  inOrder(node: BinarySearchTreeNode<T>, result) {
    if (node === null) {
      return;
    }

    this.inOrder(node.left, result);
    result.push(node.data);
    this.inOrder(node.right, result);
  }

  preOrder(node: BinarySearchTreeNode<T>, result) {
    if (node === null) {
      return;
    }

    result.push(node.data);
    this.preOrder(node.left, result);
    this.preOrder(node.right, result);
  }

  postOrder(node: BinarySearchTreeNode<T>, result) {
    if (node === null) {
      return;
    }

    this.postOrder(node.left, result);
    this.postOrder(node.right, result);
    result.push(node.data);
  }

  getMin(): T {
    let current = this.root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  getMax(): T {
    let current = this.root;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }

  find(element: T): BinarySearchTreeNode<T> {
    let current = this.root;

    while (current && current.data !== element) {
      current = element < current.data ? current.left : current.right;
    }

    return current;
  }

  has(element: T): boolean {
    return this.find(element) !== null;
  }

  remove(element: T) {
    this.removeNode(this.root, element);
  }

  getMaxLevel(node: BinarySearchTreeNode<T> = this.root): number {
    if (node === null) {
      return 0;
    }

    return Math.max(this.getMaxLevel(node.left), this.getMaxLevel(node.right)) + 1;
  }

  print() {
    const depth = this.getMaxLevel(this.root);
    const cols = 2 ** depth - 1;

    const matrix = [];

    for (let i = 0; i < depth; i += 1) {
      matrix[i] = [];
      for (let j = 0; j < cols; j += 1) {
        matrix[i][j] = ' ';
      }
    }

    function traverse(node: BinarySearchTreeNode<T>, lvl, pos) {
      if (node !== null) {

        const left_padding = 2 ** (depth - lvl - 1) - 1;
        const spacing = 2 ** (depth - lvl) - 1;

        const index = left_padding + pos * (spacing + 1);

        matrix[lvl][index] = node.data;

        traverse(node.left, lvl + 1, pos << 1);
        traverse(node.right, lvl + 1, (pos << 1) + 1);
      }
    }

    traverse(this.root, 0, 0);

    for (let i = 0; i < depth; i += 1) {
      let str = "";
      for (let j = 0; j < cols; j += 1) {
        str += matrix[i][j];
      }

      console.log(str + '\n');
    }

    return matrix;
  }

  private removeNode(node: BinarySearchTreeNode<T>, element: T) {
    if (node === null) {
      return null;
    }

    if (node.data === element) {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const temp = this.getSmallest(node.right);
      node.data = temp.data;
      node.right = this.removeNode(node.right, temp.data);

      return node;

    } else if (node.data > element) {
      node.left = this.removeNode(node.left, element);
      return node;
    } else {
      node.right = this.removeNode(node.right, element);
      return node;
    }
  }

  private getSmallest(node): BinarySearchTreeNode<T> {
    let current = node;


    while (current.left !== null) {
      current = current.left;
    }

    return current;
  }
}
