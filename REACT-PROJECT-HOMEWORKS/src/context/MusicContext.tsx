import { createContext, useState, type ReactNode } from "react";
import { Trie } from "../algorithms/Trie";
import { MaxHeap } from "../algorithms/MaxHeap";
import { Graph } from "../algorithms/Graph";
import { songs, songRelations } from "../data/songs.data";
import type { Song, SongRelation } from "../interfaces/song.interface";

const TOP_SONGS_LIMIT = 8;

interface MusicProviderProps {
  children: ReactNode;
}

interface MusicContextValue {
  songs: Song[];
  searchText: string;
  suggestions: string[];
  exactMatch: boolean;
  topSongs: Song[];
  selectedSongId: string;
  relatedSongs: Song[];
  handleSearchTextChange: (text: string) => void;
  handleSelectSuggestion: (title: string) => void;
  handleSelectRelatedSong: (songId: string) => void;
}

export const MusicContext = createContext<MusicContextValue | undefined>(
  undefined
);

function createSongTrie(): Trie {
  const trie = new Trie();

  songs.forEach((song: Song) => {
    trie.insert(song.title);
  });

  return trie;
}

function createSongGraph(): Graph {
  const graph = new Graph();

  songs.forEach((song: Song) => {
    graph.addNode(song);
  });

  songRelations.forEach((relation: SongRelation) => {
    relation.relatedSongIds.forEach((relatedSongId: string) => {
      graph.addEdge(relation.songId, relatedSongId);
    });
  });

  return graph;
}

function findSongByTitle(title: string): Song | null {
  const foundSong = songs.find(
    (song: Song) => song.title.toLowerCase() === title.toLowerCase()
  );

  if (foundSong === undefined) {
    return null;
  }

  return foundSong;
}

export function MusicProvider({ children }: MusicProviderProps) {
  const [songTrie] = useState<Trie>(() => createSongTrie());
  const [songHeap] = useState<MaxHeap>(() => new MaxHeap(songs));
  const [songGraph] = useState<Graph>(() => createSongGraph());

  const [searchText, setSearchText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [exactMatch, setExactMatch] = useState<boolean>(false);
  const [selectedSongId, setSelectedSongId] = useState<string>("");

  const topSongs = songHeap.getTopK(TOP_SONGS_LIMIT);

  const relatedSongs =
    selectedSongId.length > 0 ? songGraph.getRelatedSongs(selectedSongId) : [];

  const handleSearchTextChange = (text: string): void => {
    const cleanText = text.trim();

    setSearchText(text);

    if (cleanText.length === 0) {
      setSuggestions([]);
      setExactMatch(false);
      return;
    }

    setExactMatch(songTrie.search(cleanText));
    setSuggestions(songTrie.getSuggestions(cleanText));
  };

  const handleSelectSuggestion = (title: string): void => {
    handleSearchTextChange(title);

    const selectedSong = findSongByTitle(title);

    if (selectedSong !== null) {
      setSelectedSongId(selectedSong.id);
    }
  };

  const handleSelectRelatedSong = (songId: string): void => {
    setSelectedSongId(songId);
  };

  const value: MusicContextValue = {
    songs,
    searchText,
    suggestions,
    exactMatch,
    topSongs,
    selectedSongId,
    relatedSongs,
    handleSearchTextChange,
    handleSelectSuggestion,
    handleSelectRelatedSong,
  };

  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
}