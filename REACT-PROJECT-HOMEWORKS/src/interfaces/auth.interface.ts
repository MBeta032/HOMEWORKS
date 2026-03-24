export interface AuthUser {
  email: string
}

export interface AuthContextType {
  user: AuthUser | null
  login: (email: string, password: string) => boolean
  logout: () => void
}