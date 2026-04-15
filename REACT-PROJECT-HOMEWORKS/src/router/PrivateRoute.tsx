import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

function PrivateRoute() {
  const { user, loading } = useAuth()

  if (loading) {
    return <p className="status-message">Cargando sesión...</p>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export { PrivateRoute }