import { FileNode, type FileNodeData, type FileValue } from "./FileNode"

export class FileTree {
  root: FileNode

  constructor(root?: FileNode) {
    this.root =
      root ||
      new FileNode({
        id: "root",
        name: "Mi unidad",
        type: "folder",
        createdBy: "system",
      })
  }

  findNodeById(id: string, currentNode: FileNode = this.root): FileNode | null {
    if (currentNode.value.id === id) {
      return currentNode
    }

    for (const child of currentNode.children) {
      const foundNode = this.findNodeById(id, child)

      if (foundNode) {
        return foundNode
      }
    }

    return null
  }

  addNode(parentId: string, value: FileValue) {
    const parentNode = this.findNodeById(parentId)

    if (!parentNode) {
      throw new Error("La carpeta padre no existe")
    }

    const newNode = new FileNode(value)
    parentNode.addChild(newNode)
  }

  static createValue(name: string, type: "folder" | "file", createdBy: string): FileValue {
    return {
      id: Date.now().toString(),
      name,
      type,
      createdBy,
    }
  }

  toJSON(): FileNodeData {
    return this.root.toJSON()
  }

  static fromJSON(data: FileNodeData) {
    return new FileTree(FileNode.fromJSON(data))
  }
}