export interface FileValue {
  id: string
  name: string
  type: "folder" | "file"
  createdBy: string
}

export interface FileNodeData {
  value: FileValue
  children: FileNodeData[]
}

export class FileNode {
  value: FileValue
  children: FileNode[]

  constructor(value: FileValue) {
    this.value = value
    this.children = []
  }

  addChild(node: FileNode) {
    if (this.value.type === "file") {
      throw new Error("Un archivo no puede tener hijos")
    }

    this.children.push(node)
  }

  toJSON(): FileNodeData {
    return {
      value: this.value,
      children: this.children.map(child => child.toJSON()),
    }
  }

  static fromJSON(data: FileNodeData) {
    const node = new FileNode(data.value)
    node.children = data.children.map(child => FileNode.fromJSON(child))
    return node
  }
}