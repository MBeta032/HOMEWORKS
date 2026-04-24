import { useGraph } from "../hooks/useGraph";
import { useGraphForm } from "../hooks/useGraphForm";
import { Button } from "./shared/Button";

export default function GraphForm() {
  const { graph } = useGraph();

  const {
    type,
    name,
    age,
    cityRelation,
    cityName,
    handleTypeChange,
    handleNameChange,
    handleAgeChange,
    handleCityRelation,
    handleCityName,
    handleSubmit,
  } = useGraphForm();

  return (
    <section className="card">
      <h2>Agregar nodo</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="type">Tipo de nodo</label>
          <select id="type" value={type} onChange={handleTypeChange}>
            <option value="person">Persona</option>
            <option value="city">Ciudad</option>
          </select>
        </div>

        {type === "person" ? (
          <>
            <div className="form-group">
              <label htmlFor="name">Nombre de la persona</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Ej: Ana"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Edad</label>
              <input
                id="age"
                type="number"
                value={age}
                onChange={handleAgeChange}
                placeholder="Ej: 20"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cityRelation">Ciudad donde vive</label>
              <select
                id="cityRelation"
                value={cityRelation}
                onChange={handleCityRelation}
              >
                <option value="">Selecciona una ciudad</option>

                {graph.cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            <Button text="Agregar persona" type="submit" />
          </>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="cityName">Nombre de la ciudad</label>
              <input
                id="cityName"
                type="text"
                value={cityName}
                onChange={handleCityName}
                placeholder="Ej: Cali"
              />
            </div>

            <Button text="Agregar ciudad" type="submit" />
          </>
        )}
      </form>
    </section>
  );
}