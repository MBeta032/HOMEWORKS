import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "react-toastify";
import { useGraph } from "./useGraph";
import type IPerson from "../interfaces/IPerson";

export const useGraphSearch = () => {
  const { graph } = useGraph();

  const [citySearch, setCitySearch] = useState("");
  const [people, setPeople] = useState<IPerson[]>([]);

  const handleCitySearch = (e: ChangeEvent<HTMLSelectElement>) => {
    setCitySearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (citySearch.trim() === "") {
      toast.error("¡Todos los campos son obligatorios!");
      return;
    }

    const city = graph.searchCity(citySearch);

    if (!city) {
      toast.error("La ciudad no existe");
      setPeople([]);
      return;
    }

    const peopleFound = graph.getPeopleByCity(city.name);

    setPeople(peopleFound);

    toast.success("Personas consultadas correctamente");
  };

  return {
    citySearch,
    people,
    handleCitySearch,
    handleSubmit,
  };
};