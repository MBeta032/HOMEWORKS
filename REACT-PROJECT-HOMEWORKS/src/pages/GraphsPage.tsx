import { AddProductForm } from "../components/AddProductForm";
import { ProductLists } from "../components/ProductLists";
import { ProductResults } from "../components/ProductResults";
import { SearchBox } from "../components/SearchBox";
import { Header } from "../components/shared/Header";
import { useSmartSearchContext } from "../context/SmartSearchContext";

export function GraphsPage() {
  const { message } = useSmartSearchContext();

  return (
    <main className="page">
      <Header />

      {message.length > 0 && <p className="message">{message}</p>}

      <section className="page__content">
        <div className="page__column">
          <AddProductForm />
          <ProductLists />
        </div>

        <div className="page__column">
          <SearchBox />
          <ProductResults />
        </div>
      </section>
    </main>
  );
}