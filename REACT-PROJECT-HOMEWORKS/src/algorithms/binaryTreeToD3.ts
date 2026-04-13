import { TreeNode } from "./TreeNode"

export type D3TreeNode = {
  name: string
  children?: D3TreeNode[]
}

export const binaryTreeToD3 = (node: TreeNode | null): D3TreeNode | null => {
  if (node === null) {
    return null
  }

  const leftNode = binaryTreeToD3(node.left)
  const rightNode = binaryTreeToD3(node.right)

  const children = [leftNode, rightNode].filter(
    (child): child is D3TreeNode => child !== null
  )

  if (children.length === 0) {
    return {
      name: String(node.value),
    }
  }

  return {
    name: String(node.value),
    children,
  }
}