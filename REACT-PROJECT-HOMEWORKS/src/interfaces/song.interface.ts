export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  popularity: number;
}

export interface SongRelation {
  songId: string;
  relatedSongIds: string[];
}

export interface CreateSongInput {
  title: string;
  artist: string;
  genre: string;
  popularity: number;
}