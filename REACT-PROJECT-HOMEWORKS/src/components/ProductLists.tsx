import { useSmartSearchContext } from "../context/SmartSearchContext";
import type { IProduct } from "../interfaces/IProduct";

export function ProductLists() {
  const { products } = useSmartSearchContext();

  return (
    <section className="card">
      <h2>Productos guardados</h2>

      <div className="products">
        {products.map((product: IProduct, index: number) => (
          <article className="product-card" key={`${product.name}-${index}`}>
            <h3>{product.name}</h3>
            <p>Popularidad: {product.popularity}</p>
          </article>
        ))}
      </div>
    </section>
  );
}