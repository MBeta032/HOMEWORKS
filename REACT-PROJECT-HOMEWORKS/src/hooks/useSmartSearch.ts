import { useState } from "react";
import { Trie } from "../algorithms/Trie";
import { mockProducts } from "../data/MockProducts";
import type { IProduct } from "../interfaces/IProduct";

export interface UseSmartSearchReturn {
  products: IProduct[];
  prefix: string;
  topK: number;
  results: IProduct[];
  message: string;
  hasSearched: boolean;
  changePrefix: (value: string) => void;
  changeTopK: (value: number) => void;
  searchProducts: () => void;
  addProduct: (name: string, popularity: number) => void;
}

function createTrie(products: IProduct[]): Trie {
  const trie = new Trie();

  products.forEach((product: IProduct) => {
    trie.insert(product.name, product.popularity);
  });

  return trie;
}

export function useSmartSearch(): UseSmartSearchReturn {
  const [products, setProducts] = useState<IProduct[]>(mockProducts);
  const [trie, setTrie] = useState<Trie>(() => createTrie(mockProducts));
  const [prefix, setPrefix] = useState<string>("air");
  const [topK, setTopK] = useState<number>(2);
  const [results, setResults] = useState<IProduct[]>([]);
  const [message, setMessage] = useState<string>("");
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const changePrefix = (value: string): void => {
    setPrefix(value);
  };

  const changeTopK = (value: number): void => {
    if (value < 1 || Number.isNaN(value)) {
      setTopK(1);
      return;
    }

    setTopK(value);
  };

  const searchProducts = (): void => {
    const foundProducts = trie.searchTopK(prefix, topK);

    setResults(foundProducts);
    setHasSearched(true);

    if (foundProducts.length === 0) {
      setMessage("No se encontraron productos con ese prefijo.");
    } else {
      setMessage("");
    }
  };

  const addProduct = (name: string, popularity: number): void => {
    const newProduct: IProduct = {
      name: name.trim(),
      popularity,
    };

    const updatedProducts = [...products, newProduct];
    const updatedTrie = createTrie(updatedProducts);

    setProducts(updatedProducts);
    setTrie(updatedTrie);
    setMessage("Producto agregado correctamente.");

    if (hasSearched) {
      const updatedResults = updatedTrie.searchTopK(prefix, topK);
      setResults(updatedResults);
    }
  };

  return {
    products,
    prefix,
    topK,
    results,
    message,
    hasSearched,
    changePrefix,
    changeTopK,
    searchProducts,
    addProduct,
  };
}