import type { IProduct } from "../interfaces/IProduct";

export class TrieNode {
  value: string | null;
  children: Record<string, TrieNode>;
  isEndOfWord: boolean;
  product: IProduct | null;

  constructor(value: string | null) {
    this.value = value;
    this.children = {};
    this.isEndOfWord = false;
    this.product = null;
  }
}