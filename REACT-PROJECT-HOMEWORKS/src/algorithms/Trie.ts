import { MaxHeap } from "./MaxHeap";
import { TrieNode } from "./TrieNode";
import type { IProduct } from "../interfaces/IProduct";

export class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode(null);
  }

  insert(name: string, popularity: number): void {
    const productName = name.trim();
    const normalizedName = this.normalizeText(productName);

    if (normalizedName.length === 0) {
      return;
    }

    let currentNode = this.root;

    for (const character of normalizedName) {
      if (currentNode.children[character] === undefined) {
        currentNode.children[character] = new TrieNode(character);
      }

      currentNode = currentNode.children[character];
    }

    currentNode.isEndOfWord = true;
    currentNode.product = {
      name: productName,
      popularity,
    };
  }

  search(word: string): boolean {
    const normalizedWord = this.normalizeText(word);

    if (normalizedWord.length === 0) {
      return false;
    }

    let currentNode = this.root;

    for (const character of normalizedWord) {
      if (currentNode.children[character] === undefined) {
        return false;
      }

      currentNode = currentNode.children[character];
    }

    return currentNode.isEndOfWord;
  }

  searchByPrefix(prefix: string): IProduct[] {
    const normalizedPrefix = this.normalizeText(prefix);
    let currentNode = this.root;

    for (const character of normalizedPrefix) {
      if (currentNode.children[character] === undefined) {
        return [];
      }

      currentNode = currentNode.children[character];
    }

    const products: IProduct[] = [];
    this.collectProducts(currentNode, products);

    return products;
  }

  searchTopK(prefix: string, k: number): IProduct[] {
    const productsByPrefix = this.searchByPrefix(prefix);
    const heap = new MaxHeap(productsByPrefix);
    const topProducts: IProduct[] = [];

    while (topProducts.length < k && heap.size() > 0) {
      const product = heap.pop();

      if (product !== undefined) {
        topProducts.push(product);
      }
    }

    return topProducts;
  }

  private collectProducts(node: TrieNode, products: IProduct[]): void {
    if (node.isEndOfWord && node.product !== null) {
      products.push(node.product);
    }

    Object.values(node.children).forEach((childNode: TrieNode) => {
      this.collectProducts(childNode, products);
    });
  }

  private normalizeText(text: string): string {
    return text.trim().toLowerCase();
  }
}