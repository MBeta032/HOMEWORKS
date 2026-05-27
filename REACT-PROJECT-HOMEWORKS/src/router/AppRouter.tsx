import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { RankingPage } from "../pages/RankingPage";
import { RecommendationsPage } from "../pages/RecomendationsPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { AddSongPage } from "../pages/AddSongPage";
import { PrivateRoute } from "./PrivateRoute";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

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

        <Route
          path="/agregar"
          element={
            <PrivateRoute>
              <AddSongPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}