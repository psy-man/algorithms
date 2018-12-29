class TrieNode {
  constructor(
    public char: string,
    public children = new Map<string, TrieNode>(),
    public isEnd = false
  ) {
  }
}

export class Trie {
  private root: TrieNode = new TrieNode(null);

  constructor(words: string[] = []) {
    words.forEach(word => this.add(word));
  }

  add(word: string) {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode(char))
      }

      node = node.children.get(char);
    }

    node.isEnd = true;
  }

  has(word: string): boolean {
    const node = this.getLastNode(word);
    return node !== null && node.isEnd;
  }

  delete(word: string): boolean {
    let node = this.root;
    let prev: TrieNode;

    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }

      prev = node;
      node = node.children.get(char);
    }

    if (!node.isEnd) {
      return false;
    }

    if (node.children.size > 0) {
      node.isEnd = false;
    } else {
      prev.children.delete(node.char);
    }

    return true;
  }

  find(prefix: string): string[] {
    const result: string[] = [];

    const node = this.getLastNode(prefix);

    if (node === null) {
      return result;
    }

    this.traverse(node, result, prefix);
    return result;
  }

  getAll(): string[] {
    const result: string[] = [];
    this.traverse(this.root, result);
    return result;
  }

  private traverse(node: TrieNode, result: string[], word: string = '') {
    if (node.isEnd) {
      result.push(word);
    }

    for (const child of node.children.values()) {
      this.traverse(child, result, word + child.char);
    }
  }

  private getLastNode(word: string): TrieNode {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        return null;
      }

      node = node.children.get(char);
    }

    return node;
  }
}
