import type { Song, SongRelation } from "../interfaces/song.interface";

export const songs: Song[] = [
  {
    id: "song-1",
    title: "Dakiti",
    artist: "Bad Bunny",
    genre: "Reggaeton",
    popularity: 98,
  },
  {
    id: "song-2",
    title: "Me Porto Bonito",
    artist: "Bad Bunny",
    genre: "Reggaeton",
    popularity: 97,
  },
  {
    id: "song-3",
    title: "Titi Me Pregunto",
    artist: "Bad Bunny",
    genre: "Reggaeton",
    popularity: 96,
  },
  {
    id: "song-4",
    title: "Yonaguni",
    artist: "Bad Bunny",
    genre: "Reggaeton",
    popularity: 94,
  },
  {
    id: "song-5",
    title: "Moscow Mule",
    artist: "Bad Bunny",
    genre: "Reggaeton",
    popularity: 95,
  },
  {
    id: "song-6",
    title: "La Jumpa",
    artist: "Arcangel",
    genre: "Trap Latino",
    popularity: 93,
  },
  {
    id: "song-7",
    title: "Diles",
    artist: "Ozuna",
    genre: "Trap Latino",
    popularity: 87,
  },
  {
    id: "song-8",
    title: "Te Bote",
    artist: "Nio Garcia",
    genre: "Trap Latino",
    popularity: 92,
  },
  {
    id: "song-9",
    title: "China",
    artist: "Anuel AA",
    genre: "Reggaeton",
    popularity: 91,
  },
  {
    id: "song-10",
    title: "Secreto",
    artist: "Anuel AA",
    genre: "Reggaeton",
    popularity: 88,
  },
  {
    id: "song-11",
    title: "Tusa",
    artist: "Karol G",
    genre: "Reggaeton",
    popularity: 96,
  },
  {
    id: "song-12",
    title: "Bichota",
    artist: "Karol G",
    genre: "Reggaeton",
    popularity: 94,
  },
  {
    id: "song-13",
    title: "Provenza",
    artist: "Karol G",
    genre: "Urbano Latino",
    popularity: 95,
  },
  {
    id: "song-14",
    title: "Qlona",
    artist: "Karol G",
    genre: "Reggaeton",
    popularity: 93,
  },
  {
    id: "song-15",
    title: "LALA",
    artist: "Myke Towers",
    genre: "Reggaeton",
    popularity: 92,
  },
  {
    id: "song-16",
    title: "La Curiosidad",
    artist: "Jay Wheeler",
    genre: "Reggaeton",
    popularity: 89,
  },
  {
    id: "song-17",
    title: "Girl",
    artist: "Myke Towers",
    genre: "Trap Latino",
    popularity: 86,
  },
  {
    id: "song-18",
    title: "La Noche de Anoche",
    artist: "Bad Bunny",
    genre: "Urbano Latino",
    popularity: 90,
  },
  {
    id: "song-19",
    title: "Todo de Ti",
    artist: "Rauw Alejandro",
    genre: "Reggaeton",
    popularity: 94,
  },
  {
    id: "song-20",
    title: "Desesperados",
    artist: "Rauw Alejandro",
    genre: "Reggaeton",
    popularity: 91,
  },
  {
    id: "song-21",
    title: "Punto 40",
    artist: "Rauw Alejandro",
    genre: "Reggaeton",
    popularity: 88,
  },
  {
    id: "song-22",
    title: "Feliz Cumpleanos Ferxxo",
    artist: "Feid",
    genre: "Reggaeton",
    popularity: 93,
  },
  {
    id: "song-23",
    title: "Normal",
    artist: "Feid",
    genre: "Reggaeton",
    popularity: 90,
  },
  {
    id: "song-24",
    title: "Hey Mor",
    artist: "Feid",
    genre: "Reggaeton",
    popularity: 91,
  },
  {
    id: "song-25",
    title: "Jordan IV",
    artist: "Feid",
    genre: "Reggaeton",
    popularity: 87,
  },
  {
    id: "song-26",
    title: "MIA",
    artist: "Bad Bunny",
    genre: "Reggaeton",
    popularity: 95,
  },
  {
    id: "song-27",
    title: "Mi Gente",
    artist: "J Balvin",
    genre: "Reggaeton",
    popularity: 92,
  },
  {
    id: "song-28",
    title: "Ginza",
    artist: "J Balvin",
    genre: "Reggaeton",
    popularity: 89,
  },
  {
    id: "song-29",
    title: "Otra Noche en Miami",
    artist: "Bad Bunny",
    genre: "Trap Latino",
    popularity: 90,
  },
  {
    id: "song-30",
    title: "Safaera",
    artist: "Bad Bunny",
    genre: "Reggaeton",
    popularity: 93,
  },
];

export const songRelations: SongRelation[] = [
  {
    songId: "song-1",
    relatedSongIds: ["song-2", "song-4", "song-5", "song-26"],
  },
  {
    songId: "song-2",
    relatedSongIds: ["song-1", "song-3", "song-5", "song-30"],
  },
  {
    songId: "song-3",
    relatedSongIds: ["song-2", "song-5", "song-30"],
  },
  {
    songId: "song-4",
    relatedSongIds: ["song-1", "song-18", "song-29"],
  },
  {
    songId: "song-5",
    relatedSongIds: ["song-1", "song-2", "song-3"],
  },
  {
    songId: "song-6",
    relatedSongIds: ["song-7", "song-8", "song-29"],
  },
  {
    songId: "song-7",
    relatedSongIds: ["song-6", "song-8", "song-17"],
  },
  {
    songId: "song-8",
    relatedSongIds: ["song-6", "song-7", "song-9"],
  },
  {
    songId: "song-9",
    relatedSongIds: ["song-8", "song-10", "song-27"],
  },
  {
    songId: "song-10",
    relatedSongIds: ["song-9", "song-11", "song-12"],
  },
  {
    songId: "song-11",
    relatedSongIds: ["song-10", "song-12", "song-13", "song-14"],
  },
  {
    songId: "song-12",
    relatedSongIds: ["song-11", "song-13", "song-14"],
  },
  {
    songId: "song-13",
    relatedSongIds: ["song-11", "song-12", "song-14"],
  },
  {
    songId: "song-14",
    relatedSongIds: ["song-11", "song-12", "song-13"],
  },
  {
    songId: "song-15",
    relatedSongIds: ["song-16", "song-17", "song-24"],
  },
  {
    songId: "song-16",
    relatedSongIds: ["song-15", "song-17", "song-20"],
  },
  {
    songId: "song-17",
    relatedSongIds: ["song-7", "song-15", "song-16"],
  },
  {
    songId: "song-18",
    relatedSongIds: ["song-4", "song-19", "song-29"],
  },
  {
    songId: "song-19",
    relatedSongIds: ["song-18", "song-20", "song-21"],
  },
  {
    songId: "song-20",
    relatedSongIds: ["song-16", "song-19", "song-21"],
  },
  {
    songId: "song-21",
    relatedSongIds: ["song-19", "song-20", "song-24"],
  },
  {
    songId: "song-22",
    relatedSongIds: ["song-23", "song-24", "song-25"],
  },
  {
    songId: "song-23",
    relatedSongIds: ["song-22", "song-24", "song-25"],
  },
  {
    songId: "song-24",
    relatedSongIds: ["song-15", "song-21", "song-22", "song-23"],
  },
  {
    songId: "song-25",
    relatedSongIds: ["song-22", "song-23"],
  },
  {
    songId: "song-26",
    relatedSongIds: ["song-1", "song-27", "song-28"],
  },
  {
    songId: "song-27",
    relatedSongIds: ["song-9", "song-26", "song-28"],
  },
  {
    songId: "song-28",
    relatedSongIds: ["song-26", "song-27"],
  },
  {
    songId: "song-29",
    relatedSongIds: ["song-4", "song-6", "song-18"],
  },
  {
    songId: "song-30",
    relatedSongIds: ["song-2", "song-3", "song-5"],
  },
];