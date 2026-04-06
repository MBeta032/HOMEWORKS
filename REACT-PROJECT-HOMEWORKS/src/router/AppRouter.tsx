import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import Tasks from "../pages/Tasks"
import ATM from "../pages/ATM"
import Library from "../pages/Library"
import PrivateRoute from "./PrivateRoute"
import { TaskProvider } from "../context/TaskContext"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
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
              <TaskProvider>
                <Tasks />
              </TaskProvider>
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
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter