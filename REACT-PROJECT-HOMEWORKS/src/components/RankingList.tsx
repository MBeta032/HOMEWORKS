import type { Song } from "../interfaces/song.interface";
import { EmptyState } from "./shared/EmptyState";
import { SongCard } from "./SongCard";

interface RankingListProps {
  songs: Song[];
}

export function RankingList({ songs }: RankingListProps) {
  if (songs.length === 0) {
    return (
      <EmptyState
        message="Todavía no hay canciones para mostrar."
        detail="Cuando tengamos canciones disponibles, aparecerán en esta sección."
      />
    );
  }

  return (
    <div className="ranking-list">
      {songs.map((song: Song, index: number) => (
        <SongCard key={song.id} song={song} rank={index + 1} />
      ))}
    </div>
  );
}