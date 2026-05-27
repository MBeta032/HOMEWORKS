import type { Song } from "../interfaces/song.interface";

export class MaxHeap {
  private heap: Song[];

  constructor(initialSongs: Song[] = []) {
    this.heap = [...initialSongs];

    if (this.heap.length > 0) {
      this.heapify();
    }
  }

  push(song: Song): void {
    this.heap.push(song);
    this.percolateUp();
  }

  pop(): Song | null {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop() ?? null;
    }

    const maxSong = this.heap[0];
    const lastSong = this.heap.pop();

    if (lastSong !== undefined) {
      this.heap[0] = lastSong;
      this.percolateDown(0);
    }

    return maxSong;
  }

  peek(): Song | null {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  heapify(): void {
    const startIndex = Math.floor((this.heap.length - 2) / 2);

    for (let index = startIndex; index >= 0; index -= 1) {
      this.percolateDown(index);
    }
  }

  percolateDown(index: number): void {
    let currentIndex = index;

    while (2 * currentIndex + 1 < this.heap.length) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;

      let highestChildIndex = leftChildIndex;

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].popularity >
          this.heap[leftChildIndex].popularity
      ) {
        highestChildIndex = rightChildIndex;
      }

      if (
        this.heap[highestChildIndex].popularity >
        this.heap[currentIndex].popularity
      ) {
        this.swap(currentIndex, highestChildIndex);
        currentIndex = highestChildIndex;
      } else {
        break;
      }
    }
  }

  percolateUp(): void {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (
        this.heap[currentIndex].popularity >
        this.heap[parentIndex].popularity
      ) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  swap(firstIndex: number, secondIndex: number): void {
    const temporalSong = this.heap[firstIndex];
    this.heap[firstIndex] = this.heap[secondIndex];
    this.heap[secondIndex] = temporalSong;
  }

  size(): number {
    return this.heap.length;
  }

  toArray(): Song[] {
    return [...this.heap];
  }

  getTopK(k: number): Song[] {
    if (k <= 0) {
      return [];
    }

    const heapCopy = new MaxHeap(this.toArray());
    const topSongs: Song[] = [];

    while (topSongs.length < k && heapCopy.size() > 0) {
      const song = heapCopy.pop();

      if (song !== null) {
        topSongs.push(song);
      }
    }

    return topSongs;
  }
}