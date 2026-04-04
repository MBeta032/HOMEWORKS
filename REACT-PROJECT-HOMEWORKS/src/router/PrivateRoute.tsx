import { Navigate } from "react-router-dom"
import { auth } from "../Firebase/config"

interface PrivateRouteProps {
  children: React.ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const user = auth.currentUser

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}