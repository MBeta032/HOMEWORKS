import { DashboardSection } from "../components/shared/DashboardSection";
import { SongSearch } from "../components/SongSearch";
import { SuggestionsList } from "../components/SuggestionsList";

export function SearchPage() {
  return (
    <DashboardSection
      id="search"
      title="Encuentra tu próxima canción"
      subtitle="Escribe el nombre o las primeras letras de una canción."
    >
      <SongSearch />
      <SuggestionsList />
    </DashboardSection>
  );
}