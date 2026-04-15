import { useNavigate } from "react-router-dom"
import FileTreeView from "../components/file-system/FileTreeView"
import NodeForm from "../components/file-system/NodeForm"
import { useAuth } from "../hooks/useAuth"
import { useFileTree } from "../hooks/useFileTree"

export default function Dashboard() {
  const { user, logout } = useAuth()
  const { tree, loadingTree } = useFileTree()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    navigate("/login")
  }

  if (loadingTree) {
    return <p className="status-message">Cargando árbol...</p>
  }

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <h1>Sistema de archivos</h1>
          <p>Bienvenido: {user?.email}</p>
        </div>

        <button onClick={handleLogout}>Cerrar sesión</button>
      </section>

      <section className="dashboard-content">
        <NodeForm />
        <FileTreeView node={tree} />
      </section>
    </main>
  )
}