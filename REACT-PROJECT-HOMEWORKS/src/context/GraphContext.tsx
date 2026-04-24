import { createContext, type ReactNode } from "react";
import { useGraphState } from "../hooks/useGraphState";
import type Graph from "../algorithms/Graph";
import type ICity from "../interfaces/ICity";
import type IPerson from "../interfaces/IPerson";

interface GraphContextValue {
  graph: Graph;
  addCity: (city: ICity) => void;
  addPerson: (person: IPerson, city: ICity) => void;
}

export const GraphContext = createContext<GraphContextValue | undefined>(
  undefined
);

interface GraphProviderProps {
  children: ReactNode;
}

export const GraphProvider = ({ children }: GraphProviderProps) => {
  const graphState = useGraphState();

  return (
    <GraphContext.Provider value={graphState}>
      {children}
    </GraphContext.Provider>
  );
};