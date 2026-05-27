import { DashboardSection } from "../components/shared/DashboardSection";
import { Navbar } from "../components/shared/NavBar";
import { Sidebar } from "../components/shared/SideBar";
import { SongSearch } from "../components/SongSearch";
import { SuggestionsList } from "../components/SuggestionsList";

export function SearchPage() {
  return (
    <div className="music-dashboard">
      <Navbar />

      <div className="music-dashboard__layout">
        <Sidebar />

        <main className="music-dashboard__content">
          <DashboardSection
            id="search"
            title="Encuentra tu próxima canción"
            subtitle="Escribe el nombre o las primeras letras de una canción."
          >
            <SongSearch />
            <SuggestionsList />
          </DashboardSection>
        </main>
      </div>
    </div>
  );
}