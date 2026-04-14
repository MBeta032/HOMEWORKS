import type { IMenuItem } from '../interfaces/IMenuItem'

class MenuTreeNode {
  item: IMenuItem
  children: MenuTreeNode[]

  constructor(item: IMenuItem) {
    this.item = item
    this.children = []
  }

  addChild(node: MenuTreeNode) {
    this.children.push(node)
  }
}

class MenuTree {
  root: MenuTreeNode | null

  constructor(root: MenuTreeNode | null = null) {
    this.root = root
  }

  dfs() {
    const result: IMenuItem[] = []

    const traverse = (node: MenuTreeNode | null) => {
      if (!node) return

      result.push(node.item)

      node.children.forEach(child => {
        traverse(child)
      })
    }

    traverse(this.root)

    return result
  }

  bfs() {
    const result: IMenuItem[] = []

    if (!this.root) return result

    const queue: MenuTreeNode[] = [this.root]

    while (queue.length > 0) {
      const current = queue.shift()

      if (!current) continue

      result.push(current.item)
      queue.push(...current.children)
    }

    return result
  }

  printHierarchy() {
    const lines: string[] = []

    const traverse = (node: MenuTreeNode | null, level: number) => {
      if (!node) return

      const prefix = level === 0 ? '' : '— '.repeat(level)
      lines.push(`${prefix}${node.item.title}`)

      node.children.forEach(child => {
        traverse(child, level + 1)
      })
    }

    traverse(this.root, 0)

    return lines
  }

  static fromItems(items: IMenuItem[]) {
    if (items.length === 0) {
      return new MenuTree(null)
    }

    const sortedItems = [...items].sort((a, b) => a.order - b.order)
    const nodesMap = new Map<string, MenuTreeNode>()

    sortedItems.forEach(item => {
      nodesMap.set(item.id, new MenuTreeNode(item))
    })

    let root: MenuTreeNode | null = null

    sortedItems.forEach(item => {
      const currentNode = nodesMap.get(item.id)

      if (!currentNode) return

      if (item.parentId === null) {
        root = currentNode
        return
      }

      const parentNode = nodesMap.get(item.parentId)

      if (parentNode) {
        parentNode.addChild(currentNode)
      }
    })

    const sortChildren = (node: MenuTreeNode | null) => {
      if (!node) return

      node.children.sort((a, b) => a.item.order - b.item.order)

      node.children.forEach(child => {
        sortChildren(child)
      })
    }

    sortChildren(root)

    return new MenuTree(root)
  }
}

export { MenuTree, MenuTreeNode }