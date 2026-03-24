import { createContext, useState, type ReactNode } from "react"
import type { AuthContextType, AuthUser } from "../interfaces/auth.interface"

const VALID_EMAIL = "user@mail.com"
const VALID_PASSWORD = "123"

export const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null)

  const login = (email: string, password: string) => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setUser({ email })
      return true
    }

    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}