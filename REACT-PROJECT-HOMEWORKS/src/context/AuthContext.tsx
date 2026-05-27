import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { auth } from "../Firebase/config";
import { showErrorAlert, showSuccessToast } from "../utils/alerts";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

function getAuthErrorMessage(errorCode: string): string {
  if (errorCode === "auth/email-already-in-use") {
    return "Este correo ya está registrado.";
  }

  if (errorCode === "auth/invalid-email") {
    return "El correo no tiene un formato válido.";
  }

  if (errorCode === "auth/weak-password") {
    return "La contraseña debe tener mínimo 6 caracteres.";
  }

  if (
    errorCode === "auth/invalid-credential" ||
    errorCode === "auth/wrong-password" ||
    errorCode === "auth/user-not-found"
  ) {
    return "Correo o contraseña incorrectos.";
  }

  return "No pudimos completar la acción. Intenta nuevamente.";
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      showSuccessToast("Sesión iniciada correctamente.");
      return true;
    } catch (error) {
      const firebaseError = error as { code?: string };
      showErrorAlert(getAuthErrorMessage(firebaseError.code ?? ""));
      return false;
    }
  };

  const register = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showSuccessToast("Cuenta creada correctamente.");
      return true;
    } catch (error) {
      const firebaseError = error as { code?: string };
      showErrorAlert(getAuthErrorMessage(firebaseError.code ?? ""));
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    await signOut(auth);
    showSuccessToast("Sesión cerrada.");
  };

  const value: AuthContextValue = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}