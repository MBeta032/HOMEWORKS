import { DashboardSection } from "../components/shared/DashboardSection";
import { RankingList } from "../components/RankingList";

export function RankingPage() {
  return (
    <DashboardSection
      id="ranking"
      title="Canciones más populares"
      subtitle="Explora los temas destacados del catálogo."
    >
      <RankingList />
    </DashboardSection>
  );
}