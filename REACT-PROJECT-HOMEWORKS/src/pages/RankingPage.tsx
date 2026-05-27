import { RankingList } from "../components/RankingList";
import { DashboardSection } from "../components/shared/DashboardSection";
import { Navbar } from "../components/shared/NavBar";
import { Sidebar } from "../components/shared/SideBar";

export function RankingPage() {
  return (
    <div className="music-dashboard">
      <Navbar />

      <div className="music-dashboard__layout">
        <Sidebar />

        <main className="music-dashboard__content">
          <DashboardSection
            id="ranking"
            title="Canciones más populares"
            subtitle="Explora los temas destacados del catálogo."
          >
            <RankingList />
          </DashboardSection>
        </main>
      </div>
    </div>
  );
}