import { Button } from "./shared/Button";
import { EmptyState } from "./shared/EmptyState";

interface SuggestionsListProps {
  suggestions: string[];
  onSelectSuggestion: (title: string) => void;
}

export function SuggestionsList({
  suggestions,
  onSelectSuggestion,
}: SuggestionsListProps) {
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
          onClick={() => onSelectSuggestion(title)}
        >
          {title}
        </Button>
      ))}
    </div>
  );
}