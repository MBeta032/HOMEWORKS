import { Navigate, Route, Routes } from "react-router-dom"
import PrivateRoute from "../components/shared/PrivateRoute"
import ATM from "../pages/ATM"
import Home from "../pages/Home"
import Library from "../pages/Library"
import Login from "../pages/Login"
import Register from "../pages/Register"

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/atm" element={<ATM />} />
        <Route path="/library" element={<Library />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}