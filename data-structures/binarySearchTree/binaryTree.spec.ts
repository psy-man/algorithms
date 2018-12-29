import { BinarySearchTree, BinarySearchTreeNode, TraverseDirection } from './binarySearchTree';


test('BinarySearchTree', () => {
  const tree = new BinarySearchTree<number>();

  tree.insert(23);
  tree.insert(13);
  tree.insert(54);
  tree.insert(46);
  tree.insert(77);
  tree.insert(42);
  tree.insert(7);
  tree.insert(9);
  tree.insert(15);
  tree.insert(1);

  expect(tree.traverse(TraverseDirection.inOrder)).toEqual([1, 7, 9, 13, 15, 23, 42, 46, 54, 77]);

  expect(tree.has(10)).toBe(false);
  expect(tree.has(23)).toBe(true);
  tree.remove(23);
  expect(tree.has(23)).toBe(false);

  expect(tree.getMin()).toBe(1);
  expect(tree.getMax()).toBe(77);
  expect(tree.getMaxLevel()).toBe(4);

  expect(tree.find(7)).toBeInstanceOf(BinarySearchTreeNode);
  expect(tree.find(100)).toBeNull();

  expect(tree.traverse(TraverseDirection.inOrder)).toEqual([1, 7, 9, 13, 15, 42, 46, 54, 77]);
  expect(tree.traverse(TraverseDirection.preOrder)).toEqual([42, 13, 7, 1, 9, 15, 54, 46, 77]);
  expect(tree.traverse(TraverseDirection.postOrder)).toEqual([1, 9, 7, 15, 13, 46, 77, 54, 42]);

  tree.remove(42);
  tree.remove(1);
  tree.remove(9);

  expect(tree.getMaxLevel()).toBe(3);
  expect(tree.getMin()).toBe(7);

  expect(tree.print()).toEqual([
    [" ", " ", " ", 46, " ", " ", " "],
    [" ", 13, " ", " ", " ", 54, " "],
    [7, " ", 15, " ", " ", " ", 77]
  ]);
});
