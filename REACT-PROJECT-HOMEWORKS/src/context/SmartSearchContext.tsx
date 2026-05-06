import { createContext, useContext, type ReactNode } from "react";
import {
  useSmartSearch,
  type UseSmartSearchReturn,
} from "../hooks/useSmartSearch";

interface SmartSearchProviderProps {
  children: ReactNode;
}

const SmartSearchContext = createContext<UseSmartSearchReturn | undefined>(
  undefined
);

export function SmartSearchProvider({ children }: SmartSearchProviderProps) {
  const smartSearch = useSmartSearch();

  return (
    <SmartSearchContext.Provider value={smartSearch}>
      {children}
    </SmartSearchContext.Provider>
  );
}

export function useSmartSearchContext(): UseSmartSearchReturn {
  const context = useContext(SmartSearchContext);

  if (context === undefined) {
    throw new Error(
      "useSmartSearchContext debe usarse dentro de SmartSearchProvider"
    );
  }

  return context;
}