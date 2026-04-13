import { useContext } from "react"
import { BinaryTreeContext } from "../context/BinaryTreeContext"

export const useBinaryTree = () => {
  const context = useContext(BinaryTreeContext)

  if (!context) {
    throw new Error("useBinaryTree debe usarse dentro de BinaryTreeProvider")
  }

  return context
}