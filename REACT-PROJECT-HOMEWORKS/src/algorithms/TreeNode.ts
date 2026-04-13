import type { IBinaryTreeNode } from "../interfaces/IBinaryTree"

export class TreeNode implements IBinaryTreeNode {
  value: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }

  isLeaf(): boolean {
    return this.left === null && this.right === null
  }
}