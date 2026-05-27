import type { Song } from "../interfaces/song.interface";

export class Graph {
  private nodes: Song[];
  private adjacencyList: Record<string, string[]>;

  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node: Song): void {
    const nodeExists = this.searchNode(node.id);

    if (nodeExists !== null) {
      return;
    }

    this.nodes.push(node);
    this.adjacencyList[node.id] = [];
  }

  addEdge(firstSongId: string, secondSongId: string): void {
    const firstSong = this.searchNode(firstSongId);
    const secondSong = this.searchNode(secondSongId);

    if (firstSong === null || secondSong === null) {
      return;
    }

    if (!this.adjacencyList[firstSongId].includes(secondSongId)) {
      this.adjacencyList[firstSongId].push(secondSongId);
    }

    if (!this.adjacencyList[secondSongId].includes(firstSongId)) {
      this.adjacencyList[secondSongId].push(firstSongId);
    }
  }

  searchNode(songId: string): Song | null {
    const foundSong = this.nodes.find((song: Song) => song.id === songId);

    if (foundSong === undefined) {
      return null;
    }

    return foundSong;
  }

  getAdjacency(songId: string): string[] {
    const adjacency = this.adjacencyList[songId];

    if (adjacency === undefined) {
      return [];
    }

    return [...adjacency];
  }

  printAdjacency(songId: string): string {
    const song = this.searchNode(songId);

    if (song === null) {
      return "La canción no existe en el grafo.";
    }

    const relatedIds = this.getAdjacency(songId);

    if (relatedIds.length === 0) {
      return `${song.title} no tiene canciones relacionadas.`;
    }

    const relatedTitles = relatedIds
      .map((relatedId: string) => this.searchNode(relatedId))
      .filter((relatedSong: Song | null): relatedSong is Song => relatedSong !== null)
      .map((relatedSong: Song) => relatedSong.title);

    return `${song.title} está relacionada con: ${relatedTitles.join(", ")}.`;
  }

  printGraph(): Record<string, string[]> {
    return { ...this.adjacencyList };
  }

  getRelatedSongs(songId: string): Song[] {
    const relatedIds = this.getAdjacency(songId);

    return relatedIds
      .map((relatedId: string) => this.searchNode(relatedId))
      .filter((relatedSong: Song | null): relatedSong is Song => relatedSong !== null);
  }

  getNodes(): Song[] {
    return [...this.nodes];
  }
}