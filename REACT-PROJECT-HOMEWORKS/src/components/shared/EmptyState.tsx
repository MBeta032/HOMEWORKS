interface EmptyStateProps {
  message: string;
  detail?: string;
}

export function EmptyState({ message, detail }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <p>{message}</p>

      {detail !== undefined && <small>{detail}</small>}
    </div>
  );
}