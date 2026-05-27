import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
}

export function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button button--${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}