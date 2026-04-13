import { TreeNode } from "./TreeNode"

export class BinaryTree {
  private root: TreeNode | null

  constructor() {
    this.root = null
  }

  getRoot(): TreeNode | null {
    return this.root
  }

  insert(value: number): boolean {
    if (this.root === null) {
      this.root = new TreeNode(value)
      return true
    }

    return this.insertRecursive(this.root, value)
  }

  private insertRecursive(currentNode: TreeNode, value: number): boolean {
    if (value === currentNode.value) {
      return false
    }

    if (value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(value)
        return true
      }

      return this.insertRecursive(currentNode.left, value)
    }

    if (currentNode.right === null) {
      currentNode.right = new TreeNode(value)
      return true
    }

    return this.insertRecursive(currentNode.right, value)
  }

  contains(value: number): boolean {
    return this.containsRecursive(this.root, value)
  }

  private containsRecursive(node: TreeNode | null, value: number): boolean {
    if (node === null) {
      return false
    }

    if (node.value === value) {
      return true
    }

    if (value < node.value) {
      return this.containsRecursive(node.left, value)
    }

    return this.containsRecursive(node.right, value)
  }

  preorder(): number[] {
    const result: number[] = []
    this.preorderRecursive(this.root, result)
    return result
  }

  private preorderRecursive(node: TreeNode | null, result: number[]): void {
    if (node === null) {
      return
    }

    result.push(node.value)
    this.preorderRecursive(node.left, result)
    this.preorderRecursive(node.right, result)
  }

  inorder(): number[] {
    const result: number[] = []
    this.inorderRecursive(this.root, result)
    return result
  }

  private inorderRecursive(node: TreeNode | null, result: number[]): void {
    if (node === null) {
      return
    }

    this.inorderRecursive(node.left, result)
    result.push(node.value)
    this.inorderRecursive(node.right, result)
  }

  postorder(): number[] {
    const result: number[] = []
    this.postorderRecursive(this.root, result)
    return result
  }

  private postorderRecursive(node: TreeNode | null, result: number[]): void {
    if (node === null) {
      return
    }

    this.postorderRecursive(node.left, result)
    this.postorderRecursive(node.right, result)
    result.push(node.value)
  }

  static fromValues(values: number[]): BinaryTree {
    const tree = new BinaryTree()

    values.forEach(value => {
      tree.insert(value)
    })

    return tree
  }
}