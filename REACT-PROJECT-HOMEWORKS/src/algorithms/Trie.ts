class TrieNode {
  value: string | null;
  children: Record<string, TrieNode>;
  isEndOfWord: boolean;

  constructor(value: string | null) {
    this.value = value;
    this.children = {};
    this.isEndOfWord = false;
  }
}

export class Trie {
  root: TrieNode;
  private words: Record<string, string>;

  constructor() {
    this.root = new TrieNode(null);
    this.words = {};
  }

  insert(word: string): void {
    const normalizedWord = this.normalize(word);

    if (normalizedWord.length === 0) {
      return;
    }

    let current = this.root;

    for (const character of normalizedWord) {
      if (current.children[character] === undefined) {
        current.children[character] = new TrieNode(character);
      }

      current = current.children[character];
    }

    current.isEndOfWord = true;
    this.words[normalizedWord] = word;
  }

  search(word: string): boolean {
    const normalizedWord = this.normalize(word);

    if (normalizedWord.length === 0) {
      return false;
    }

    let current = this.root;

    for (const character of normalizedWord) {
      const nextNode = current.children[character];

      if (nextNode === undefined) {
        return false;
      }

      current = nextNode;
    }

    return current.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    const normalizedPrefix = this.normalize(prefix);

    if (normalizedPrefix.length === 0) {
      return false;
    }

    return this.getNode(normalizedPrefix) !== null;
  }

  getSuggestions(prefix: string): string[] {
    const normalizedPrefix = this.normalize(prefix);

    if (normalizedPrefix.length === 0) {
      return [];
    }

    const prefixNode = this.getNode(normalizedPrefix);

    if (prefixNode === null) {
      return [];
    }

    const suggestions: string[] = [];
    this.collectWords(prefixNode, normalizedPrefix, suggestions);

    return suggestions;
  }

  private getNode(text: string): TrieNode | null {
    let current = this.root;

    for (const character of text) {
      const nextNode = current.children[character];

      if (nextNode === undefined) {
        return null;
      }

      current = nextNode;
    }

    return current;
  }

  private collectWords(
    node: TrieNode,
    currentWord: string,
    suggestions: string[]
  ): void {
    if (node.isEndOfWord) {
      suggestions.push(this.words[currentWord] ?? currentWord);
    }

    for (const character in node.children) {
      const childNode = node.children[character];
      this.collectWords(childNode, currentWord + character, suggestions);
    }
  }

  private normalize(word: string): string {
    return word.toLowerCase().trim();
  }
}