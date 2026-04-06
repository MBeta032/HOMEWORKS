import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

interface PrivateRouteProps {
  children: React.ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { user, loading } = useAuth()

  if (loading) {
    return <p>Cargando sesión...</p>
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}