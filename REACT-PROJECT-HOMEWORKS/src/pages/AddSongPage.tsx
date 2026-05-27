import { SongForm } from "../components/SongForm";
import { DashboardSection } from "../components/shared/DashboardSection";
import { Navbar } from "../components/shared/NavBar";
import { Sidebar } from "../components/shared/SideBar";

export function AddSongPage() {
  return (
    <div className="music-dashboard">
      <Navbar />

      <div className="music-dashboard__layout">
        <Sidebar />

        <main className="music-dashboard__content">
          <DashboardSection
            id="add-song"
            title="Agregar canción"
            subtitle="Registra una nueva canción en el catálogo musical."
          >
            <SongForm />
          </DashboardSection>
        </main>
      </div>
    </div>
  );
}