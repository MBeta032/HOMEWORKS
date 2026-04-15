import { useState } from "react"
import type { FileNodeData } from "../../algorithms/FileNode"
import { useAuth } from "../../hooks/useAuth"
import { useFileTree } from "../../hooks/useFileTree"

interface FolderOption {
  id: string
  name: string
}

function getFolderOptions(node: FileNodeData, result: FolderOption[] = []) {
  if (node.value.type === "folder") {
    result.push({
      id: node.value.id,
      name: node.value.name,
    })
  }

  for (const child of node.children) {
    getFolderOptions(child, result)
  }

  return result
}

export default function NodeForm() {
  const { user } = useAuth()
  const { tree, addNode } = useFileTree()

  const [name, setName] = useState("")
  const [type, setType] = useState<"folder" | "file">("folder")
  const [parentId, setParentId] = useState("root")
  const [error, setError] = useState("")

  const folderOptions = getFolderOptions(tree)

  async function handleSubmit(e: any) {
    e.preventDefault()
    setError("")

    if (!user?.email) {
      setError("Debes iniciar sesión")
      return
    }

    if (!name.trim()) {
      setError("El nombre es obligatorio")
      return
    }

    try {
      await addNode(parentId, name.trim(), type, user.email)
      setName("")
      setType("folder")
      setParentId("root")
    } catch {
      setError("No se pudo crear el elemento")
    }
  }

  return (
    <section className="panel-card">
      <h2>Crear elemento</h2>

      <form onSubmit={handleSubmit} className="node-form">
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            placeholder="Ej: Tareas"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="type">Tipo</label>
          <select
            id="type"
            value={type}
            onChange={e => setType(e.target.value as "folder" | "file")}
          >
            <option value="folder">Carpeta</option>
            <option value="file">Archivo</option>
          </select>
        </div>

        <div>
          <label htmlFor="parentId">Carpeta padre</label>
          <select
            id="parentId"
            value={parentId}
            onChange={e => setParentId(e.target.value)}
          >
            {folderOptions.map(folder => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Crear</button>
      </form>
    </section>
  )
}