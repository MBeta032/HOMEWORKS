import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "genre" | "tech" | "info";
}

export function Badge({ children, variant = "info" }: BadgeProps) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}