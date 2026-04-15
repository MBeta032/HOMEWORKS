import { Navigate, Route, Routes } from "react-router-dom"
import { FileTreeProvider } from "../context/FileTreeContext"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { PrivateRoute } from "./PrivateRoute"

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<PrivateRoute />}>
        <Route
          path="/dashboard"
          element={
            <FileTreeProvider>
              <Dashboard />
            </FileTreeProvider>
          }
        />
      </Route>
    </Routes>
  )
}