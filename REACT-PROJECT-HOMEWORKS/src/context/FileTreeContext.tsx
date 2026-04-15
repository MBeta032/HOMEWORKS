import { createContext, useEffect, useState, type ReactNode } from "react"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { FileTree } from "../algorithms/FileTree"
import type { FileNodeData } from "../algorithms/FileNode"
import { db } from "../Firebase/config"
import { useAuth } from "../hooks/useAuth"

interface FileTreeContextType {
  tree: FileNodeData
  loadingTree: boolean
  addNode: (
    parentId: string,
    name: string,
    type: "folder" | "file",
    createdBy: string
  ) => Promise<void>
}

export const FileTreeContext = createContext<FileTreeContextType | null>(null)

interface FileTreeProviderProps {
  children: ReactNode
}

const initialTree = new FileTree().toJSON()
const treeRef = doc(db, "fileTrees", "mainTree")

function isValidTree(tree: any): tree is FileNodeData {
  return (
    tree &&
    typeof tree === "object" &&
    tree.value &&
    typeof tree.value === "object" &&
    Array.isArray(tree.children)
  )
}

export function FileTreeProvider({ children }: FileTreeProviderProps) {
  const { user } = useAuth()
  const [tree, setTree] = useState<FileNodeData>(initialTree)
  const [loadingTree, setLoadingTree] = useState(true)

  useEffect(() => {
    async function loadTree() {
      if (!user) {
        setTree(initialTree)
        setLoadingTree(false)
        return
      }

      try {
        setLoadingTree(true)

        const treeSnapshot = await getDoc(treeRef)

        if (treeSnapshot.exists()) {
          const data = treeSnapshot.data()
          const savedTree = data.tree

          if (isValidTree(savedTree)) {
            setTree(savedTree)
          } else {
            await setDoc(treeRef, { tree: initialTree })
            setTree(initialTree)
          }
        } else {
          await setDoc(treeRef, { tree: initialTree })
          setTree(initialTree)
        }
      } catch (error) {
        console.log(error)
        setTree(initialTree)
      }

      setLoadingTree(false)
    }

    loadTree()
  }, [user])

  async function addNode(
    parentId: string,
    name: string,
    type: "folder" | "file",
    createdBy: string
  ) {
    if (!user) return

    const fileTree = FileTree.fromJSON(tree)
    const value = FileTree.createValue(name, type, createdBy)

    fileTree.addNode(parentId, value)

    const updatedTree = fileTree.toJSON()

    await setDoc(treeRef, { tree: updatedTree })
    setTree(updatedTree)
  }

  return (
    <FileTreeContext.Provider value={{ tree, loadingTree, addNode }}>
      {children}
    </FileTreeContext.Provider>
  )
}