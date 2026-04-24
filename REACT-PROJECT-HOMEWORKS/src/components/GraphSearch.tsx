import { useGraph } from "../hooks/useGraph";
import { useGraphSearch } from "../hooks/useGraphSearch";
import { Button } from "./shared/Button";

export default function GraphSearch() {
  const { graph } = useGraph();

  const { citySearch, people, handleCitySearch, handleSubmit } =
    useGraphSearch();

  return (
    <section className="card">
      <h2>Buscar personas por ciudad</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="citySearch">Ciudad</label>

          <select
            id="citySearch"
            value={citySearch}
            onChange={handleCitySearch}
            className="custom-select"
          >
            <option value="">Selecciona una ciudad</option>

            {graph.cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <Button text="Buscar" type="submit" />
      </form>

      <div className="people-list">
        <h3>Personas encontradas</h3>

        {people.length === 0 ? (
          <p>No hay personas para mostrar.</p>
        ) : (
          <ul>
            {people.map((person) => (
              <li key={person.id}>
                <span>{person.name}</span>
                <strong>{person.age} años</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}