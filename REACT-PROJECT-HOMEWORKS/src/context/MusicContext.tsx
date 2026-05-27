import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Trie } from "../algorithms/Trie";
import { MaxHeap } from "../algorithms/MaxHeap";
import { Graph } from "../algorithms/Graph";
import { songs as initialSongs, songRelations } from "../data/songs.data";
import type {
  CreateSongInput,
  Song,
  SongRelation,
} from "../interfaces/song.interface";
import {
  addSongToFirebase,
  getFirebaseSongs,
} from "../services/song.service";
import {
  showErrorAlert,
  showInfoToast,
  showSuccessToast,
  showWarningToast,
} from "../utils/alerts";

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
  isSavingSong: boolean;
  handleSearchTextChange: (text: string) => void;
  handleSelectSuggestion: (title: string) => void;
  handleSelectRelatedSong: (songId: string) => void;
  addNewSong: (song: CreateSongInput) => Promise<boolean>;
}

export const MusicContext = createContext<MusicContextValue | undefined>(
  undefined
);

function createSongTrie(songs: Song[]): Trie {
  const trie = new Trie();

  songs.forEach((song: Song) => {
    trie.insert(song.title);
  });

  return trie;
}

function createSongGraph(songs: Song[]): Graph {
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

function findSongByTitle(songs: Song[], title: string): Song | null {
  const foundSong = songs.find(
    (song: Song) => song.title.toLowerCase() === title.toLowerCase()
  );

  if (foundSong === undefined) {
    return null;
  }

  return foundSong;
}

function removeDuplicatedSongs(songs: Song[]): Song[] {
  const uniqueSongs: Song[] = [];

  songs.forEach((song: Song) => {
    const alreadyExists = uniqueSongs.some(
      (savedSong: Song) =>
        savedSong.title.toLowerCase() === song.title.toLowerCase() &&
        savedSong.artist.toLowerCase() === song.artist.toLowerCase()
    );

    if (!alreadyExists) {
      uniqueSongs.push(song);
    }
  });

  return uniqueSongs;
}

export function MusicProvider({ children }: MusicProviderProps) {
  const [songsList, setSongsList] = useState<Song[]>(initialSongs);
  const [searchText, setSearchText] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [exactMatch, setExactMatch] = useState<boolean>(false);
  const [selectedSongId, setSelectedSongId] = useState<string>("");
  const [isSavingSong, setIsSavingSong] = useState<boolean>(false);

  const songTrie = useMemo<Trie>(() => createSongTrie(songsList), [songsList]);

  const songHeap = useMemo<MaxHeap>(
    () => new MaxHeap(songsList),
    [songsList]
  );

  const songGraph = useMemo<Graph>(
    () => createSongGraph(songsList),
    [songsList]
  );

  const topSongs = songHeap.getTopK(TOP_SONGS_LIMIT);

  const relatedSongs =
    selectedSongId.length > 0 ? songGraph.getRelatedSongs(selectedSongId) : [];

  useEffect(() => {
    const loadFirebaseSongs = async (): Promise<void> => {
      try {
        const firebaseSongs = await getFirebaseSongs();
        const mergedSongs = removeDuplicatedSongs([
          ...initialSongs,
          ...firebaseSongs,
        ]);

        setSongsList(mergedSongs);
      } catch {
        showWarningToast("No pudimos cargar canciones guardadas.");
      }
    };

    loadFirebaseSongs();
  }, []);

  const handleSearchTextChange = (text: string): void => {
    const cleanText = text.trim();

    setSearchText(text);

    if (cleanText.length === 0) {
      setSuggestions([]);
      setExactMatch(false);
      return;
    }

    const foundExactMatch = songTrie.search(cleanText);
    const foundSuggestions = songTrie.getSuggestions(cleanText);

    setExactMatch(foundExactMatch);
    setSuggestions(foundSuggestions);

    if (cleanText.length >= 3 && foundSuggestions.length === 0) {
      showWarningToast("No encontramos canciones con esa búsqueda.");
    }
  };

  const handleSelectSuggestion = (title: string): void => {
    handleSearchTextChange(title);

    const selectedSong = findSongByTitle(songsList, title);

    if (selectedSong !== null) {
      setSelectedSongId(selectedSong.id);
      showSuccessToast(`${selectedSong.title} fue seleccionada.`);
    }
  };

  const handleSelectRelatedSong = (songId: string): void => {
    setSelectedSongId(songId);

    const selectedSong = songsList.find((song: Song) => song.id === songId);

    if (selectedSong !== undefined) {
      showInfoToast(`Mostrando recomendaciones para ${selectedSong.title}.`);
    }
  };

  const addNewSong = async (song: CreateSongInput): Promise<boolean> => {
    const titleAlreadyExists = songsList.some(
      (savedSong: Song) =>
        savedSong.title.toLowerCase() === song.title.toLowerCase() &&
        savedSong.artist.toLowerCase() === song.artist.toLowerCase()
    );

    if (titleAlreadyExists) {
      showWarningToast("Esa canción ya existe en el catálogo.");
      return false;
    }

    try {
      setIsSavingSong(true);

      const savedSong = await addSongToFirebase(song);

      setSongsList((currentSongs: Song[]) => [...currentSongs, savedSong]);
      showSuccessToast(`${savedSong.title} fue agregada al catálogo.`);

      return true;
    } catch {
      showErrorAlert("No pudimos guardar la canción en Firebase.");
      return false;
    } finally {
      setIsSavingSong(false);
    }
  };

  const value: MusicContextValue = {
    songs: songsList,
    searchText,
    suggestions,
    exactMatch,
    topSongs,
    selectedSongId,
    relatedSongs,
    isSavingSong,
    handleSearchTextChange,
    handleSelectSuggestion,
    handleSelectRelatedSong,
    addNewSong,
  };

  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
}