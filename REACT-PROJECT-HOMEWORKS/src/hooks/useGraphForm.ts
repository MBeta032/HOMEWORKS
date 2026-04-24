import { useState, type ChangeEvent, type FormEvent } from "react";
import { toast } from "react-toastify";
import { useGraph } from "./useGraph";
import type ICity from "../interfaces/ICity";
import type IPerson from "../interfaces/IPerson";

type NodeType = "person" | "city";

export const useGraphForm = () => {
  const { graph, addCity, addPerson } = useGraph();

  const [type, setType] = useState<NodeType>("person");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [cityRelation, setCityRelation] = useState("");

  const [cityName, setCityName] = useState("");

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as NodeType);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleCityRelation = (e: ChangeEvent<HTMLSelectElement>) => {
    setCityRelation(e.target.value);
  };

  const handleCityName = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      (type === "person" &&
        (name.trim() === "" ||
          age.trim() === "" ||
          cityRelation.trim() === "")) ||
      (type === "city" && cityName.trim() === "")
    ) {
      toast.error("¡Todos los campos son obligatorios!");
      return;
    }

    if (type === "person") {
      const cityNode = graph.searchCity(cityRelation);

      if (!cityNode) {
        toast.error("La ciudad seleccionada no existe");
        return;
      }

      const person: IPerson = {
        id: crypto.randomUUID(),
        name: name.trim(),
        age: Number(age),
      };

      addPerson(person, cityNode);

      toast.success("¡Persona agregada correctamente!");

      setName("");
      setAge("");
      setCityRelation("");

      return;
    }

    const city: ICity = {
      id: crypto.randomUUID(),
      name: cityName.trim(),
    };

    addCity(city);

    toast.success("¡Ciudad agregada correctamente!");

    setCityName("");
  };

  return {
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
  };
};