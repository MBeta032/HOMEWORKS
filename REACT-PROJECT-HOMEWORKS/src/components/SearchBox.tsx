import { type ChangeEvent, type FormEvent } from "react";
import { useSmartSearchContext } from "../context/SmartSearchContext";
import { Button } from "./shared/Button";

export function SearchBox() {
  const { prefix, topK, changePrefix, changeTopK, searchProducts } =
    useSmartSearchContext();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    searchProducts();
  };

  const handlePrefixChange = (event: ChangeEvent<HTMLInputElement>): void => {
    changePrefix(event.target.value);
  };

  const handleTopKChange = (event: ChangeEvent<HTMLInputElement>): void => {
    changeTopK(Number(event.target.value));
  };

  return (
    <section className="card">
      <h2>Buscar por prefijo</h2>

      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="prefix">Prefijo</label>
          <input
            id="prefix"
            type="text"
            value={prefix}
            onChange={handlePrefixChange}
            placeholder="Ej: air"
          />
        </div>

        <div className="form__group">
          <label htmlFor="top-k">Top K</label>
          <input
            id="top-k"
            type="number"
            value={topK}
            onChange={handleTopKChange}
            min="1"
          />
        </div>

        <Button type="submit">Buscar</Button>
      </form>
    </section>
  );
}