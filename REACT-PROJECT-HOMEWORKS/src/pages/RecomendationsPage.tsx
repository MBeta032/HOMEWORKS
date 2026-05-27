import { RelatedSongs } from "../components/RelatedSongs";
import { DashboardSection } from "../components/shared/DashboardSection";
import { Navbar } from "../components/shared/NavBar";
import { Sidebar } from "../components/shared/SideBar";

export function RecommendationsPage() {
  return (
    <div className="music-dashboard">
      <Navbar />

      <div className="music-dashboard__layout">
        <Sidebar />

        <main className="music-dashboard__content">
          <DashboardSection
            id="related"
            title="También te puede gustar"
            subtitle="Selecciona una canción y descubre recomendaciones similares."
          >
            <RelatedSongs />
          </DashboardSection>
        </main>
      </div>
    </div>
  );
}