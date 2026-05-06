import type { IProduct } from "../interfaces/IProduct";

export class MaxHeap {
  private heap: IProduct[];

  constructor(initialProducts: IProduct[] = []) {
    this.heap = [...initialProducts];
    this.heapify();
  }

  push(product: IProduct): void {
    this.heap.push(product);
    this.percolateUp();
  }

  pop(): IProduct | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const maxProduct = this.heap[0];
    const lastProduct = this.heap.pop();

    if (lastProduct === undefined) {
      return undefined;
    }

    this.heap[0] = lastProduct;
    this.percolateDown(0);

    return maxProduct;
  }

  peek(): IProduct | undefined {
    return this.heap[0];
  }

  heapify(): void {
    const startIndex = Math.floor(this.heap.length / 2) - 1;

    for (let index = startIndex; index >= 0; index--) {
      this.percolateDown(index);
    }
  }

  percolateDown(index: number): void {
    let currentIndex = index;

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let largestIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].popularity > this.heap[largestIndex].popularity
      ) {
        largestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].popularity > this.heap[largestIndex].popularity
      ) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex !== currentIndex) {
        this.swap(currentIndex, largestIndex);
        currentIndex = largestIndex;
      } else {
        break;
      }
    }
  }

  percolateUp(): void {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[currentIndex].popularity > this.heap[parentIndex].popularity) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  swap(i: number, j: number): void {
    const temporaryProduct = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temporaryProduct;
  }

  size(): number {
    return this.heap.length;
  }

  toArray(): IProduct[] {
    return [...this.heap];
  }
}