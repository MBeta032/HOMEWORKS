import { useState, type ChangeEvent, type FormEvent } from "react";
import { useSmartSearchContext } from "../context/SmartSearchContext";
import { Button } from "./shared/Button";

export function AddProductForm() {
  const { addProduct } = useSmartSearchContext();

  const [name, setName] = useState<string>("");
  const [popularity, setPopularity] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handlePopularityChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPopularity(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const cleanName = name.trim();
    const popularityNumber = Number(popularity);

    if (cleanName.length === 0) {
      setError("El nombre no puede estar vacío.");
      return;
    }

    if (popularity.length === 0 || Number.isNaN(popularityNumber)) {
      setError("La popularidad debe ser un número.");
      return;
    }

    if (popularityNumber < 0) {
      setError("La popularidad debe ser mayor o igual a 0.");
      return;
    }

    addProduct(cleanName, popularityNumber);

    setName("");
    setPopularity("");
    setError("");
  };

  return (
    <section className="card">
      <h2>Agregar producto</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="product-name">Nombre del producto</label>
          <input
            id="product-name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Ej: air zoom"
          />
        </div>

        <div className="form__group">
          <label htmlFor="product-popularity">Popularidad</label>
          <input
            id="product-popularity"
            type="number"
            value={popularity}
            onChange={handlePopularityChange}
            placeholder="Ej: 92"
            min="0"
          />
        </div>

        {error.length > 0 && <p className="error">{error}</p>}

        <Button type="submit">Agregar producto</Button>
      </form>
    </section>
  );
}