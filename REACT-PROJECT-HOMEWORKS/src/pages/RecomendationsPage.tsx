import { DashboardSection } from "../components/shared/DashboardSection";
import { RelatedSongs } from "../components/RelatedSongs";

export function RecommendationsPage() {
  return (
    <DashboardSection
      id="related"
      title="También te puede gustar"
      subtitle="Selecciona una canción y descubre recomendaciones similares."
    >
      <RelatedSongs />
    </DashboardSection>
  );
}