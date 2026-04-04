import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Tasks from "../pages/Tasks"
import ATM from "../pages/ATM"
import Library from "../pages/Library"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />

        <Route
          path="/atm"
          element={
            <PrivateRoute>
              <ATM />
            </PrivateRoute>
          }
        />

        <Route
          path="/library"
          element={
            <PrivateRoute>
              <Library />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}