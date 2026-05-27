import { useMusic } from "../hooks/useMusic";
import { Button } from "./shared/Button";
import { EmptyState } from "./shared/EmptyState";

export function SuggestionsList() {
  const { suggestions, handleSelectSuggestion } = useMusic();

  if (suggestions.length === 0) {
    return (
      <EmptyState
        message="No encontramos canciones con esa búsqueda."
        detail="Intenta escribir otro nombre o solo las primeras letras."
      />
    );
  }

  return (
    <div className="suggestions-list">
      {suggestions.map((title: string) => (
        <Button
          key={title}
          variant="ghost"
          onClick={() => handleSelectSuggestion(title)}
        >
          {title}
        </Button>
      ))}
    </div>
  );
}