import type { ReactNode } from "react"

type ButtonProps = {
  text?: string
  children?: ReactNode
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export default function Button({
  text,
  children,
  type = "button",
  onClick,
  disabled = false,
  className = ""
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children ?? text}
    </button>
  )
}