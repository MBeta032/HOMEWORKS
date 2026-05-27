import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { RankingPage } from "../pages/RankingPage";
import { RecommendationsPage } from "../pages/RecomendationsPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buscar" element={<SearchPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/recomendaciones" element={<RecommendationsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}