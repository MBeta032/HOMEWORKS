import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MusicDashboard } from "../pages/MusicDashboard";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { RankingPage } from "../pages/RankingPage";
import { RecommendationsPage } from "../pages/RecommendationsPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MusicDashboard />}>
          <Route index element={<HomePage />} />
          <Route path="buscar" element={<SearchPage />} />
          <Route path="ranking" element={<RankingPage />} />
          <Route path="recomendaciones" element={<RecommendationsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}