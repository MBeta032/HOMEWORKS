import { createContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { BinaryTree } from "../algorithms/BinaryTree"
import { defaultNumbers } from "../data/challenge-08/defaultNumbers"

type AddValueResponse = {
  ok: boolean
  message: string
}

type BinaryTreeContextType = {
  values: number[]
  preorder: number[]
  inorder: number[]
  postorder: number[]
  addValue: (value: number) => AddValueResponse
  containsValue: (value: number) => boolean
  resetTree: () => void
  tree: BinaryTree
}

export const BinaryTreeContext = createContext<BinaryTreeContextType | null>(null)

type BinaryTreeProviderProps = {
  children: ReactNode
}

export const BinaryTreeProvider = ({ children }: BinaryTreeProviderProps) => {
  const [values, setValues] = useState<number[]>(defaultNumbers)

  const tree = useMemo(() => {
    return BinaryTree.fromValues(values)
  }, [values])

  const preorder = useMemo(() => tree.preorder(), [tree])
  const inorder = useMemo(() => tree.inorder(), [tree])
  const postorder = useMemo(() => tree.postorder(), [tree])

  useEffect(() => {
    console.log("Preorder:", preorder)
    console.log("Inorder:", inorder)
    console.log("Postorder:", postorder)
  }, [preorder, inorder, postorder])

  const addValue = (value: number): AddValueResponse => {
    if (tree.contains(value)) {
      return {
        ok: false,
        message: `El valor ${value} ya existe en el árbol`,
      }
    }

    setValues(prevValues => [...prevValues, value])

    return {
      ok: true,
      message: `El valor ${value} fue agregado correctamente`,
    }
  }

  const containsValue = (value: number): boolean => {
    return tree.contains(value)
  }

  const resetTree = (): void => {
    setValues(defaultNumbers)
  }

  return (
    <BinaryTreeContext.Provider
      value={{
        values,
        preorder,
        inorder,
        postorder,
        addValue,
        containsValue,
        resetTree,
        tree,
      }}
    >
      {children}
    </BinaryTreeContext.Provider>
  )
}