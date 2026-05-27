import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { RankingPage } from "../pages/RankingPage";
import { RecommendationsPage } from "../pages/RecomendationsPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { PrivateRoute } from "./PrivateRoute";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/buscar"
          element={
            <PrivateRoute>
              <SearchPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/ranking"
          element={
            <PrivateRoute>
              <RankingPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/recomendaciones"
          element={
            <PrivateRoute>
              <RecommendationsPage />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}