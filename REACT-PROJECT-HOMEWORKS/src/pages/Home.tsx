import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const goToATM = () => {
        navigate("/atm")
    }

    const goToLibrary = () => {
        navigate("/library")
    }

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    return(
        <main className="page">
            <section className="home-container">
                <h1>Home</h1>

                <p>Bienvenido al sistema</p>
                <p>
                Usuario actual: <strong>{user?.email}</strong>
                </p>

                <div className="home-actions">
                <button onClick={goToATM}>Ir a ATM</button>
                <button onClick={goToLibrary}>Ir a Library</button>
                <button onClick={handleLogout}>Logout</button>
                </div>
            </section>
        </main>
    )
}