import { useContext } from "react"
import { FileTreeContext } from "../context/FileTreeContext"

export function useFileTree() {
  return useContext(FileTreeContext)!
}