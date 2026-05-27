import {
  addDoc,
  collection,
  getDocs,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "../Firebase/config";
import type { CreateSongInput, Song } from "../interfaces/song.interface";

const SONGS_COLLECTION = "songs";

function mapDocumentToSong(document: QueryDocumentSnapshot<DocumentData>): Song {
  const data = document.data();

  return {
    id: document.id,
    title: String(data.title),
    artist: String(data.artist),
    genre: String(data.genre),
    popularity: Number(data.popularity),
  };
}

export async function getFirebaseSongs(): Promise<Song[]> {
  const songsCollection = collection(db, SONGS_COLLECTION);
  const snapshot = await getDocs(songsCollection);

  return snapshot.docs.map((document: QueryDocumentSnapshot<DocumentData>) =>
    mapDocumentToSong(document)
  );
}

export async function addSongToFirebase(song: CreateSongInput): Promise<Song> {
  const songsCollection = collection(db, SONGS_COLLECTION);
  const documentReference = await addDoc(songsCollection, song);

  return {
    id: documentReference.id,
    ...song,
  };
}