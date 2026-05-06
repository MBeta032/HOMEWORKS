import { useSmartSearchContext } from "../context/SmartSearchContext";
import type { IProduct } from "../interfaces/IProduct";

export function ProductResults() {
  const { results, prefix, hasSearched } = useSmartSearchContext();

  if (!hasSearched) {
    return (
      <section className="card">
        <h2>Top resultados</h2>
        <p className="empty-text">
          Escribe un prefijo y presiona buscar para ver los productos más
          populares.
        </p>
      </section>
    );
  }

  if (results.length === 0) {
    return (
      <section className="card">
        <h2>Top resultados</h2>
        <p className="empty-text">
          No se encontraron productos con ese prefijo.
        </p>
      </section>
    );
  }

  return (
    <section className="card">
      <h2>Top resultados para "{prefix}"</h2>

      <div className="results">
        {results.map((product: IProduct, index: number) => (
          <article className="result-card" key={`${product.name}-${index}`}>
            <span className="result-card__position">#{index + 1}</span>

            <div>
              <h3>{product.name}</h3>
              <p>Popularidad: {product.popularity}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}